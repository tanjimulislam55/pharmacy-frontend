import { useEffect, useState } from 'react'
import MedicineForm from './MedicineForm/MedicineForm'
import MedicineList from './MedicineList/MedicineList'

export default function Medicine() {
    const [medicines, setMedicines] = useState([])
    const [manufacturers, setManufacturers] = useState([])
    const [brandName, setBrandName] = useState('')
    const [genericName, setGenericName] = useState('')
    const [dosageForm, setDosageForm] = useState('')
    const [stength, setStrength] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [, setManufacturerId] = useState()

    const [isOpenForm, setIsOpenForm] = useState(false)
    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    useEffect(() => {
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
        return fetchData()
    }, [token])

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const details = {
    //         name,
    //         vendor_id: vendorId,
    //         unit_id: unitId,
    //         type_id: typeId,
    //         category_id: categorieId,
    //     }
    //     if (vendorId === undefined || unitId === undefined || typeId === undefined || categorieId === undefined) {
    //         return console.log('select all')
    //     }
    //     fetch(`${process.env.REACT_APP_API_URL}/add_medicine`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(details),
    //     })
    // }

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/medicines`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token])

    return (
        <div>
            {isOpenForm && (
                <MedicineForm
                    brandName={brandName}
                    setBrandName={setBrandName}
                    genericName={genericName}
                    setGenericName={setGenericName}
                    dosageForm={dosageForm}
                    setDosageForm={setDosageForm}
                    stength={stength}
                    setStrength={setStrength}
                    unitPrice={unitPrice}
                    setUnitPrice={setUnitPrice}
                    manufacturers={manufacturers}
                    setManufacturerId={setManufacturerId}
                    setIsOpenForm={setIsOpenForm}
                />
            )}
            {medicines && manufacturers && (
                <MedicineList setIsOpenForm={setIsOpenForm} medicines={medicines} manufacturers={manufacturers} />
            )}
        </div>
    )
}
