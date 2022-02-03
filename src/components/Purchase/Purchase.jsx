import { useEffect, useState } from 'react'
import PurchaseList from './PurchaseList/PurchaseList'

export default function Purchase() {
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/purchases`)
            const data = await response.json()
            setPurchases(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [])
    return (
        <div>
            <PurchaseList purchases={purchases} />
        </div>
    )
}
