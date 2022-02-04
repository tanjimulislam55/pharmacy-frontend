import { useContext, useEffect } from 'react'
import { Route, Navigate, Redirect } from 'react-router-dom'
import { Auth, UserInfo } from '../contexts/allContex'

export default function ProtectedRoute({ component: Component }) {
    const { stateAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const api = process.env.REACT_APP_API_URL

    useEffect(() => {
        let funFetch = async () => {
            let logFetch = await fetch(`${api}/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${stateAuth.token}`,
                },
                dataType: 'json',
                method: 'GET',
            })

            let log = await logFetch.json()
            console.log(log)
            dispatchUser({ type: 'set', payload: log })
        }
        if (stateAuth.auth === true) {
            funFetch()
        }
    }, [stateAuth, dispatchUser, api])

    return stateAuth.auth === true ? <Component /> : <Navigate to="/login" />
}
