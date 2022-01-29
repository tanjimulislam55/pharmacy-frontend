import { useState } from 'react'
import classes from './Login.module.css'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // encoding form values before post request
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
        // API post request
        fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: JSON.stringify(formBody),
        })
    }

    return (
        <div className={classes.body}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    placeholder="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}
