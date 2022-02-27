import React, { useState, useEffect } from 'react'
import ManufacturerForm from './ManufacturerForm/ManufacturerForm'
import ManufacturerList from './ManufacturerList/ManufacturerList'

export default function Manufacturer() {
    const [manufacturers, setManufacturers] = useState([])
    const [trades, setTrades] = useState([])
    const [tradeHistories, setTradeHistories] = useState([])
    const [openForm, setOpenForm] = useState(false)

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/manufacturers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setManufacturers(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token])

    return (
        <div>
            {openForm && <ManufacturerForm setOpenForm={setOpenForm} />}
            <ManufacturerList
                setOpenForm={setOpenForm}
                manufacturers={manufacturers}
                // trades={trades}
                // tradeHistories={tradeHistories}
            />
        </div>
    )
}
