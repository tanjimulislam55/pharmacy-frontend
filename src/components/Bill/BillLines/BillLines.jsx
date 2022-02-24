import { useEffect, useState } from 'react'
import classes from './BillLines.module.css'

export default function BillLines({ billLine, i, total, setTotal }) {
    const [medicines, setMedicines] = useState([])
    const [render, setRender] = useState()
    const [reRender, setReRender] = useState()
    const [discount, setDiscount] = useState(0)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/medicines/search/brand_name/?skip=0&limit=10&name_str=${search}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.json()
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token, search])

    const handler = (search) => {
        let matches = []
        if (search.length > 0) {
            matches = medicines.filter((med) => {
                const regex = new RegExp(`${search}`, 'gi')
                return med.brand_name.match(regex)
            })
        }
        setSearch(search)
        setSearchResults(matches)
        console.log('matches', matches)
    }

    const setHandle = (search) => {
        setSearch(search)
        setSearchResults([])
    }

    const handleBlur = (e) => {
        e.preventDefault()
        if (billLine.quantity && search.unit_price) {
            let cost = billLine.quantity * search.unit_price
            setTotal((total) => (total = cost))
            setRender((prev) => !prev)

            let costFinal = cost - discount
            setTotal((total) => (total = costFinal))
            setReRender((prev) => !prev)
            console.log('TotalBlur', cost)
        }
    }

    return (
        <div className={classes.tableContainer}>
            <div key={i}>
                <table className={classes.tableMain}>
                    <tbody>
                        <tr className={classes.tableRow}>
                            {/* <td>
                            <select
                                className={classes.option}
                                onChange={(e) => (billLine.medicine_id = parseInt(e.target.value))}
                                id="medicines"
                                required>
                                <option value="">Select</option>
                                {medicines &&
                                    medicines.map((medicine, i) => (
                                        <option key={i} value={medicine.id}>
                                            {medicine.brand_name}
                                        </option>
                                    ))}
                            </select>
                        </td> */}
                            <td>
                                <input
                                    type="text"
                                    placeholder="Search medicine"
                                    value={search.brand_name}
                                    onChange={(e) => handler(e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    id="billQuantiy"
                                    name="billQuantiy"
                                    type="number"
                                    placeholder={billLine.quantity}
                                    onChange={(e) => (billLine.quantity = parseInt(e.target.value))}
                                    onBlur={(e) => handleBlur(e)}
                                    // onFocus={(e) => handleFocus(e)}
                                    required
                                    min={1}
                                />
                            </td>
                            <td className={classes.lightTd}>
                                <input
                                    id="billPrice"
                                    name="billPrice"
                                    type="number"
                                    // placeholder={billLine.unit_price}
                                    value={search.unit_price}
                                    onChange={(e) => (billLine.unit_price = parseInt(e.target.value))}
                                    onBlur={(e) => handleBlur(e)}
                                    // onFocus={(e) => handleFocus(e)}
                                    required
                                    min={0}
                                />
                            </td>

                            <td>
                                <input
                                    id="discount"
                                    name="discount"
                                    type="number"
                                    value={discount}
                                    onChange={(e) => setDiscount((billLine.discount = parseInt(e.target.value)))}
                                    onBlur={(e) => handleBlur(e)}
                                    min={0}
                                />
                            </td>
                            <td className={classes.lightTd}>
                                <input
                                    id="billCost"
                                    name="billCost"
                                    type="number"
                                    // placeholder={total}
                                    value={total}
                                    onChange={(e) => (billLine.total = parseInt(e.target.value))}
                                    onBlur={(e) => handleBlur(e)}
                                    // onFocus={(e) => handleFocus(e)}
                                    required
                                    min={0}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {searchResults &&
                    searchResults.map((medicine, i) => (
                        <div key={i} onClick={() => setHandle(medicine)} className={classes.options}>
                            {medicine.brand_name}
                        </div>
                    ))}
            </div>
        </div>
    )
}
