import { useEffect, useState } from 'react'
import classes from './BillLines.module.css'

export default function BillLines({ billLine, i, total, setTotal }) {
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

    const handleBlur = (e) => {
        console.log(e)
        if (billLine.quantity && billLine.price) {
            total = billLine.qty * billLine.price
            setTotal((total) => (total[i] = total))
        }
    }

    return (
        <div className={classes.tableContainer}>
            <div key={i}>
                <table className={classes.tableMain}>
                    <tr className={classes.tableRow}>
                        <td>
                            <select
                                className={classes.option}
                                onChange={(e) => (billLine.medicine_id = parseInt(e.target.value))}
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
                                id="billQuantiy"
                                name="billQuantiy"
                                type="number"
                                value={billLine.quantity}
                                onChange={(e) => (billLine.quantity = parseInt(e.target.value))}
                                onBlur={handleBlur}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="billPrice"
                                name="billPrice"
                                type="number"
                                value={billLine.price}
                                onChange={(e) => (billLine.price = parseInt(e.target.value))}
                                onBlur={(e) => handleBlur(e)}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="billCost"
                                name="billCost"
                                type="number"
                                value={billLine.cost}
                                onChange={(e) => (billLine.cost = parseInt(e.target.value))}
                                onBlur={(e) => handleBlur(e)}
                                required
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
