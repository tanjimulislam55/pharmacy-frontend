import { useEffect, useState } from 'react'
import BillList from './BillList/BillList'

export default function Bill() {
    const [bills, setBills] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/bills`)
            const data = await response.json()
            setBills(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [])

    return (
        <div>
            <BillList bills={bills} />
        </div>
    )
}
