import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../../../contexts/allContex'
import AlertMessage from '../../AlertMessage/AlertMessage'
import classes from './Registration.module.css'

export default function Registration({ setOpenRegistration, setOpenLogin }) {
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [cfpPassword, setCfpPassword] = useState('')

    const [alert, setAlert] = useState(false)

    const { stateAuth } = useContext(Auth)
    const history = useNavigate()

    const api = process.env.REACT_APP_API_URL

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== cfpPassword) {
            setAlert(true)
            setTimeout(function () {
                setAlert(false)
            }, 3000)
        }

        // if (gender === '') {
        //     setAlert(true)
        //     setTimeout(function () {
        //         setAlert(false)
        //     }, 5000)
        // }

        let registerId = await fetch(`${api}/users/new`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                first_name: fName,
                last_name: lName,
                email,
                phone,
                gender,
                password,
            }),
        })

        // let register = await registerId.json()
        // // console.log(reg)

        // if (!registerId.ok) {
        //     let newMessage = register.context.message
        //     setAlert([...alert, newMessage])
        // }

        if (registerId.ok) {
            history('/login')
        }
    }

    // Redirect if login
    if (stateAuth.auth) {
        history('/')
    }
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={`${classes.formContainer} ${classes.signUp}`}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <h2>Create Account</h2>
                            <div className={classes.socialGroup}>
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
                            <span>or use your email for registration</span>
                            <div className={classes.grid}>
                                <input
                                    placeholder="First Name"
                                    type="text"
                                    value={fName}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                                <input
                                    placeholder="Last Name"
                                    type="text"
                                    value={lName}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>
                            <input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className={classes.grid}>
                                <input
                                    placeholder="Phone"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <input
                                    placeholder="Gender"
                                    type="text"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </div>
                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                placeholder="Confirm Password"
                                type="password"
                                value={cfpPassword}
                                onChange={(e) => setCfpPassword(e.target.value)}
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
            </div>
            {alert && <AlertMessage data={{ text: "Password didn't match!" }} />}
            {/* {alert && <AlertMessage data={{ text2: 'Gender Field Empty!' }} />} */}
        </div>
    )
}
