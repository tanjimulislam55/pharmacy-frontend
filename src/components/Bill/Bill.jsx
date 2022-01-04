import { useEffect, useState } from 'react'
import BillForm from './BillForm/BillForm'
import BillList from './BillList/BillList'

export default function Bill() {
    const [bills, setBills] = useState([])
    const [isOpenForm, setIsOpenForm] = useState(false)

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
            {isOpenForm && <BillForm />}
            <BillList bills={bills} setIsOpenForm={setIsOpenForm} />
        </div>
    )
}
