import { useEffect, useState } from 'react'
import classes from './Medicine.module.css'
import MedicineForm from './MedicineForm/MedicineForm'
import MedicineList from './MedicineList/MedicineList'

export default function Medicine() {
    const [name, setName] = useState('')
    const [vendors, setVendors] = useState([])
    const [types, setTypes] = useState([])
    const [units, setUnits] = useState([])
    const [categories, setCategories] = useState([])
    const [vendorId, setVendorId] = useState()
    const [typeId, setTypeId] = useState()
    const [unitId, setUnitId] = useState()
    const [categorieId, setCategorieId] = useState()
    const [medicines, setMedicines] = useState([])
    const [isOpenForm, setIsOpenForm] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/types`)
            const data = await response.json()
            setTypes(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [])

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/units`)
            const data = await response.json()
            setUnits(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [])

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`)
            const data = await response.json()
            setCategories(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/units`)
            const data = await response.json()
            setUnits(data)
        }
        return fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            name,
            vendor_id: vendorId,
            unit_id: unitId,
            type_id: typeId,
            category_id: categorieId,
        }
        if (vendorId === undefined || unitId === undefined || typeId === undefined || categorieId === undefined) {
            return console.log('select all')
        }
        fetch(`${process.env.REACT_APP_API_URL}/add_medicine`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
    }

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/medicines`)
            const data = await response.json()
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [])

    return (
        <>
            <div className={classes.content}>
                <div></div>
                <div onClick={() => setIsOpenForm(!isOpenForm)}>Add Medicine</div>
            </div>
            {isOpenForm && <MedicineForm setIsOpenForm={setIsOpenForm} />}
            <div className={classes.content}>
                {medicines &&
                    medicines.map((medicine) => (
                        <div key={medicine.id}>
                            <MedicineList medicine={medicine} />
                        </div>
                    ))}
            </div>
        </>
    )
}
