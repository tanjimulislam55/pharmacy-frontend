import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MedicineForm from './MedicineForm/MedicineForm'
import MedicineList from './MedicineList/MedicineList'

export default function Medicine() {
    const [medicines, setMedicines] = useState([])
    const [manufacturers, setManufacturers] = useState([])
    const [brandName, setBrandName] = useState('')
    const [genericName, setGenericName] = useState('')
    const [dosageForm, setDosageForm] = useState('')
    const [strength, setStrength] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [manufacturerId, setManufacturerId] = useState()

    const [isOpenForm, setIsOpenForm] = useState(false)

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const api = process.env.REACT_APP_API_URL

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/manufacturers`, {
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
    }, [token, api])

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${api}/medicines`, {
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
    }, [token, api])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            brand_name: brandName,
            generic_name: genericName,
            dosage_form: dosageForm,
            strength: strength,
            unit_price: unitPrice,
            manufacturer_id: manufacturerId,
        }

        fetch(`${process.env.REACT_APP_API_URL}/medicines/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        navigate('/medicine')
    }

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
                    stength={strength}
                    setStrength={setStrength}
                    unitPrice={unitPrice}
                    setUnitPrice={setUnitPrice}
                    manufacturers={manufacturers}
                    setManufacturerId={setManufacturerId}
                    setIsOpenForm={setIsOpenForm}
                    handleSubmit={handleSubmit}
                />
            )}
            {medicines && manufacturers && (
                <MedicineList setIsOpenForm={setIsOpenForm} medicines={medicines} manufacturers={manufacturers} />
            )}
        </div>
    )
}
