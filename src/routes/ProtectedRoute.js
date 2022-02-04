import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Auth, UserInfo } from '../contexts/allContex'

export default function ProtectedRoute() {
    const { stateAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const api = process.env.REACT_APP_API_URL

    useEffect(() => {
        let funFetch = async () => {
            let logFetch = await fetch(`${api}/users/me`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${stateAuth.token}`,
                },
                dataType: 'json',
                method: 'GET',
            })

            let log = await logFetch.json()
            dispatchUser({ type: 'set', payload: log })
        }
        if (stateAuth.auth === true) {
            funFetch()
        }
    }, [stateAuth, dispatchUser, api])

    return stateAuth.auth === true ? <Outlet /> : <Navigate to="/login" />
}
