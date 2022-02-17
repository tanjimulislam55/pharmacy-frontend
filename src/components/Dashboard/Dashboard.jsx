import { useState, useEffect } from 'react'
import { today, firstDay, lastDay } from '../../utils/date'
import Chart from '../Chart/Chart'
import DashboardItem from './DashboardItem/DashboardItem'

export default function Dashboard() {
    const [stockQuantity, setStockQuantity] = useState({})
    const [invoiceInfo, setInvoiceInfo] = useState({})
    const [invoiceInfoMonthly, setInvoiceInfoMonthly] = useState({})
    const [purchaseInfo, setPurchaseInfo] = useState({})
    const [purchaseInfoMonthly, setPurchaseInfoMonthly] = useState({})
    const [stockValue, setStockValue] = useState({})
    const [expiredInfo, setExpiredInfo] = useState({})

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const api = process.env.REACT_APP_API_URL

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${api}/invoices/get_sum_filtered_by_datetime/?from_datetime=${today}T00%3A00%3A01&till_datetime=${today}%2023%3A59%3A59`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.json()
            setInvoiceInfo(data)
        }
        fetchData()
        return () => {
            fetchData()
        }
    }, [token, api])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${api}/invoices/get_sum_filtered_by_datetime/?from_datetime=${firstDay}T00%3A00%3A01&till_datetime=${lastDay}%2023%3A59%3A59`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.json()
            setInvoiceInfoMonthly(data)
        }
        fetchData()
        return () => {
            fetchData()
        }
    }, [token, api])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${api}/grns/get_sum_filtered_by_datetime/?from_datetime=${today}T00%3A00%3A01&till_datetime=${today}%2023%3A59%3A59`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.json()
            setPurchaseInfo(data)
        }
        fetchData()
        return () => {
            fetchData()
        }
    }, [token, api])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${api}/grns/get_sum_filtered_by_datetime/?from_datetime=${firstDay}T00%3A00%3A01&till_datetime=${lastDay}%2023%3A59%3A59`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.json()
            setPurchaseInfoMonthly(data)
        }
        fetchData()
        return () => {
            fetchData()
        }
    }, [token, api])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/stocks/get_total_stock`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setStockQuantity(data)
        }
        fetchData()
        return () => {
            fetchData()
        }
    }, [token, api])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/medicines/get_medicine_costs_of_stock`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setStockValue(data)
        }
        fetchData()
        return () => {
            fetchData()
        }
    }, [token, api])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/grns/get_sum_filtered_by_expiry_date/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setExpiredInfo(data)
        }
        fetchData()
        return () => {
            fetchData()
        }
    }, [token, api])

    return (
        <div>
            <DashboardItem
                stockQuantity={stockQuantity}
                stockValue={stockValue}
                invoiceInfo={invoiceInfo}
                invoiceInfoMonthly={invoiceInfoMonthly}
                purchaseInfo={purchaseInfo}
                purchaseInfoMonthly={purchaseInfoMonthly}
                expiredInfo={expiredInfo}
            />
            <Chart />
        </div>
    )
}
