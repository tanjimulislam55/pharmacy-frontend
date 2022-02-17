import { useEffect, useState } from 'react'
import classes from './PurchaseLines.module.css'

export default function PurchaseLines({ purchaseLine, lineIndex, total, setTotal, manufacturerId, setManufacturerId }) {
    const [manufacturers, setManufacturers] = useState([])
    const [medicines, setMedicines] = useState([])

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
        <div className={classes.tableContainer}>
            <div key={lineIndex}>
                <table className={classes.tableMain}>
                    <tr className={classes.tableRow}>
                        <td>
                            <select
                                className={classes.option}
                                onChange={(e) => setManufacturerId(parseInt(e.target.value))}
                                id="medicines">
                                <option value="">Select</option>
                                {manufacturers &&
                                    manufacturers.map((manufacturer, i) => (
                                        <option key={i} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    ))}
                            </select>
                        </td>
                        <td>
                            <select
                                className={classes.option}
                                onChange={(e) => (purchaseLine.medicine_id = parseInt(e.target.value))}
                                id="medicines">
                                <option value="">Select</option>
                                {medicines &&
                                    medicines.map((medicine, i) => (
                                        <option key={i} value={medicine.id}>
                                            {medicine.brand_name}
                                        </option>
                                    ))}
                            </select>
                        </td>
                        <td>
                            <input id="lastMonthSales" name="lastMonthSales" type="text" />
                        </td>
                        <td>
                            <input id="currentStock" name="currentStock" type="text" />
                        </td>
                        <td>
                            <input id="suggestedStock" name="sugegestedStock" type="text" />
                        </td>
                        <td>
                            <input
                                id="quantity"
                                name="quantity"
                                type="text"
                                value={purchaseLine.quantity}
                                onChange={(e) => (purchaseLine.quantity = parseInt(e.target.value))}
                                required
                            />
                        </td>
                        <td>
                            <input id="price" name="price" type="text" />
                        </td>
                        <td>
                            <input id="totalPrice" name="totalPrice" type="text" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
