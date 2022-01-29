import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useContext } from 'react'
import { Link, useNavigate, useHistory } from 'react-router-dom'
import { Auth } from '../../../contexts/allContex'
import classes from './Registration.module.css'

export default function Registration({ setOpenRegistration, setOpenLogin }) {
    // const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cfpPassword, setCfpPassword] = useState('')
    const [alert, setAlert] = useState([])

    const { stateAuth } = useContext(Auth)
    const history = useNavigate()

    const api = process.env.REACT_APP_API_URL

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== cfpPassword) {
            setAlert([...alert, 'Password not matched!'])
            return
        }

        let registerId = await fetch(`${api}/add_user`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
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
                            {/* <input
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /> */}
                            <input
                                placeholder="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                placeholder="Password"
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
        </div>
    )
}
