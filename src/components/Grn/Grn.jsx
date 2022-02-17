import React, { useState, useEffect } from 'react'
import GrnList from './GrnList/GrnList'

export default function Grn() {
    const [grns, setGrns] = useState([])

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const api = process.env.REACT_APP_API_URL

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${api}/grns/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setGrns(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token, api])

    return (
        <div>
            <GrnList grns={grns} />
        </div>
    )
}
