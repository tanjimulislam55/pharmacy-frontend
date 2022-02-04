import { useEffect, useState } from 'react'
import classes from './PurchaseLines.module.css'

export default function PurchaseLines({ purchaseLine, lineIndex, total, setTotal }) {
    const [medicines, setMedicines] = useState([])

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

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
                                onChange={(e) => (purchaseLine.medicine_id = e.target.value)}
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
                            <input
                                id="quantity"
                                name="quantity"
                                type="text"
                                value={purchaseLine.quantity}
                                onChange={(e) => (purchaseLine.quantity = e.target.value)}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="buyingPrice"
                                name="buyingPrice"
                                type="text"
                                value={purchaseLine.buying_price}
                                onChange={(e) => (purchaseLine.buying_price = e.target.value)}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="sellingPrice"
                                name="sellingPrice"
                                type="text"
                                value={purchaseLine.selling_price}
                                onChange={(e) => (purchaseLine.selling_price = e.target.value)}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="expiryDate"
                                name="expiryDate"
                                type="date"
                                value={purchaseLine.expiry_date}
                                onChange={(date) => (purchaseLine.expiry_date = date)}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="cost"
                                name="cost"
                                type="text"
                                value={purchaseLine.cost}
                                onChange={(e) => (purchaseLine.cost = e.target.value)}
                                required
                            />
                        </td>
                    </tr>

                    {/* <div className={classes.text}>Total: {total}</div> */}
                </table>
            </div>
        </div>
    )
}
