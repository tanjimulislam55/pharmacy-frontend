import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../../../contexts/allContex'
import AlertMessage from '../../AlertMessage/AlertMessage'
import classes from './Registration.module.css'

export default function Registration({ setOpenRegistration, setOpenLogin }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cfpPassword, setCfpPassword] = useState('')

    const [pharmacyName, setPharmacyName] = useState('')
    const [tradeLicense, setTradeLicense] = useState('')
    const [address, setAddress] = useState('')
    const [subDistrict, setSubDistrict] = useState('')
    const [district, setDistrict] = useState('')

    const [alert, setAlert] = useState(false)

    const { stateAuth } = useContext(Auth)
    const navigate = useNavigate()

    const api = process.env.REACT_APP_API_URL

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== cfpPassword) {
            setAlert(true)
            setTimeout(function () {
                setAlert(false)
            }, 3000)
        }

        let registerId = await fetch(`${api}/users/new`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                user_in: {
                    full_name: fullName,
                    email,
                    phone,
                    password,
                },
                pharmacy_in: {
                    name: pharmacyName,
                    trade_license: tradeLicense,
                    area: address,
                    sub_district: subDistrict,
                    district: district,
                },
            }),
        })

        // let register = await registerId.json()
        // // console.log(reg)

        // if (!registerId.ok) {
        //     let newMessage = register.context.message
        //     setAlert([...alert, newMessage])
        // }

        if (registerId.ok) {
            navigate('/login')
        }
    }

    // Redirect if login
    if (stateAuth.auth) {
        navigate('/')
    }
    return (
        <div>
            <div className={classes.wrapper}>
                <Link to="/" className={classes.logo}>
                    E-Pharmacy
                </Link>
                <div className={classes.container}>
                    <div className={`${classes.formContainer} ${classes.signUp}`}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <h2>Create Account</h2>
                            {/* <div className={classes.socialGroup}>
                                <Link to="#" class={classes.social}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                                <Link to="#" class={classes.social}>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </Link>
                                <Link to="#" class={classes.social}>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </Link>
                            </div>
                            <span>or use your email for registration</span> */}

                            <input
                                placeholder="Full Name"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />

                            <div className={classes.grid}>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <input
                                    placeholder="Phone"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <input
                                placeholder="Pharmacy Name"
                                type="text"
                                value={pharmacyName}
                                onChange={(e) => setPharmacyName(e.target.value)}
                                required
                            />

                            <input
                                placeholder="Trade License"
                                type="text"
                                value={tradeLicense}
                                onChange={(e) => setTradeLicense(e.target.value)}
                                required
                            />

                            <input
                                placeholder="Address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />

                            <div className={classes.grid}>
                                <input
                                    placeholder="City/District"
                                    type="text"
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                    required
                                />
                                <input
                                    placeholder="Area/Upazila "
                                    type="text"
                                    value={subDistrict}
                                    onChange={(e) => setSubDistrict(e.target.value)}
                                    required
                                />
                            </div>

                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <input
                                placeholder="Confirm Password"
                                type="password"
                                value={cfpPassword}
                                onChange={(e) => setCfpPassword(e.target.value)}
                                required
                            />

                            <button type="submit">Sign Up</button>
                        </form>
                    </div>

                    <div className={classes.overlayContainer}>
                        <div className={classes.overlay}>
                            <div className={`${classes.overlayPanel} ${classes.overlayLeft}`}>
                                <h2>Already a member!</h2>
                                <p>Click sign in to login</p>
                                <Link to="/login">
                                    <button className={classes.btn}>Sign In</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {alert && <AlertMessage data={{ text: "Password didn't match!" }} />}
            </div>
            {/* {alert && <AlertMessage data={{ text2: 'Gender Field Empty!' }} />} */}
        </div>
    )
}
