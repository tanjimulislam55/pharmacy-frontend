import { useEffect, useState } from 'react'
import classes from './BillLines.module.css'

export default function BillLines({ billLine, i, total, setTotal }) {
    const [medicines, setMedicines] = useState([])

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

    const handleBlur = (e) => {
        console.log(e)
        if (billLine.qty && billLine.price) {
            // total = totals
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
                                onChange={(e) => (billLine.medicine_id = e.target.value)}
                                id="medicines">
                                <option value="">Select</option>
                                {medicines &&
                                    medicines.map((medicine, i) => (
                                        <option key={i} value={medicine.id}>
                                            {medicine.name}
                                        </option>
                                    ))}
                            </select>
                        </td>
                        <td>
                            <input
                                id="billPrice"
                                name="billPrice"
                                type="number"
                                value={billLine.price}
                                onChange={(e) => (billLine.price = e.target.value)}
                                onBlur={(e) => handleBlur(e)}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="billQuantiy"
                                name="billQuantiy"
                                type="number"
                                value={billLine.qty}
                                onChange={(e) => (billLine.qty = e.target.value)}
                                onBlur={handleBlur}
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
