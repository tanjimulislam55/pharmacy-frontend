import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link, useNavigate, useHistory } from 'react-router-dom'
import { Auth } from '../../../contexts/allContex'
import classes from './Login.module.css'

export default function Login({ setOpenRegistration, setOpenLogin }) {
    const { stateAuth, dispatchAuth } = useContext(Auth)

    const history = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const api = process.env.REACT_APP_API_URL

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            username,
            password,
        }
        let formBody = []
        for (let property in details) {
            let encodedKey = encodeURIComponent(property)
            let encodedValue = encodeURIComponent(details[property])
            formBody.push(encodedKey + '=' + encodedValue)
        }
        formBody = formBody.join('&')

        let logFetch = await fetch(`${api}/token`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            method: 'POST',
            body: formBody,
        })

        let log = await logFetch.json()

        if (logFetch.ok) {
            dispatchAuth({ type: 'token', payload: log.access_token })
        }
    }

    if (stateAuth.auth) {
        history('/')
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container} id="container">
                <div className={`${classes.formContainer} ${classes.signIn}`}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h2>Sign in</h2>
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
                        <span>or use your account</span>
                        <input
                            placeholder="Username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link to="#">Forgot your password?</Link>
                        <button type="submit">Sign In</button>
                    </form>
                </div>

                <div className={classes.overlayContainer}>
                    <div className={classes.overlay}>
                        <div className={`${classes.overlayPanel} ${classes.overlayRight}`}>
                            <h2>New here!</h2>
                            <p>Click sign up and your start journey</p>
                            <Link to="/registration">
                                <button className={classes.btn}>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
