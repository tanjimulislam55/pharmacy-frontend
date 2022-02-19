import { useEffect, useState } from 'react'
import classes from './BillLines.module.css'

export default function BillLines({ billLine, i, total, setTotal }) {
    const [medicines, setMedicines] = useState([])
    const [render, setRender] = useState(false)
    const [searched, setSearched] = useState('')
    // console.log(medicines)
    console.log(searched)

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/medicines/search/brand_name/?skip=0&limit=10&name_str=${searched}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.json()
            // setMedicines((prev) => [...prev, data])
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token, searched])

    // const handleBlur = (e) => {
    //     e.preventDefault()
    //     if (billLine.quantity && billLine.price) {
    //         let cost = billLine.quantity * billLine.price
    //         setTotal((total) => (total = cost))
    //         setRender((prev) => !prev)
    //         // console.log('TotalBlur', cost)
    //     }
    // }

    // const handleFocus = (e) => {
    //     console.log(e)
    //     if (billLine.quantity && billLine.price) {
    //         let cost = billLine.quantity * billLine.price
    //         setTotal((total) => (total = cost))
    //         setRender((prev) => !prev)
    //         console.log('TotalFocus', cost)
    //     }
    // }
    // console.log('Total-----------------', total)
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
                        {/* <td>
                            {medicines && medicines.filter((medicine) => medicine.brand_name)}
                            
                            <input onChange={(e) => setSearched(e.target.value)} value={searched} />
                        </td> */}
                        <td>
                            <input
                                id="billQuantiy"
                                name="billQuantiy"
                                type="number"
                                placeholder={billLine.quantity}
                                onChange={(e) => (billLine.quantity = parseInt(e.target.value))}
                                // onBlur={(e) => handleBlur(e)}
                                // onFocus={(e) => handleFocus(e)}
                                required
                            />
                        </td>
                        <td>
                            <input
                                id="billPrice"
                                name="billPrice"
                                type="number"
                                placeholder={billLine.unit_price}
                                onChange={(e) => (billLine.unit_price = parseInt(e.target.value))}
                                // onBlur={(e) => handleBlur(e)}
                                // onFocus={(e) => handleFocus(e)}
                                required
                            />
                        </td>

                        <td>
                            <input
                                id="discount"
                                name="discount"
                                type="number"
                                placeholder={billLine.discount}
                                onChange={(e) => (billLine.discount = parseInt(e.target.value))}
                            />
                        </td>
                        <td>
                            <input
                                id="billCost"
                                name="billCost"
                                type="number"
                                // placeholder={total}
                                // value={total}
                                onChange={(e) => (billLine.cost = parseInt(e.target.value))}
                                // onBlur={(e) => handleBlur(e)}
                                // onFocus={(e) => handleFocus(e)}
                                required
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
