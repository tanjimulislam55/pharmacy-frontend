import { useEffect, useState } from 'react'
import classes from './PurchaseLines.module.css'

export default function PurchaseLines({ purchaseLines, setPurchaseLines, index }) {
    const [medicines, setMedicines] = useState([])
    const [unitPrice, setUnitPrice] = useState()
    const [medicineId, setMedicineId] = useState()

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

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

    const quantityUpdate = (val) => {
        let mainData = purchaseLines
        mainData[index].quantity = val
        mainData[index].unit_price = unitPrice
        mainData[index].cost = mainData[index].quantity * mainData[index].unit_price
        mainData[index].medicine_id = medicineId
        setPurchaseLines([...mainData])
    }

    const handler = (search) => {
        let matches = []
        if (search.length > 0) {
            matches = medicines.filter((med) => med.brand_name.toLowerCase().includes(search))
        }
        setSearch(search)
        setSearchResults(matches)
    }

    const setHandle = (search) => {
        setMedicineId(search.id)
        setUnitPrice(search.unit_price)
        setSearch(search)
        setSearchResults([])
    }

    return (
        <div className={classes.tableContainer}>
            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    {/* <td>
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
                        </td> */}
                    <td>
                        <input
                            type="text"
                            placeholder="Search medicine"
                            value={search.brand_name}
                            onChange={(e) => handler(e.target.value)}
                            required
                        />
                    </td>
                    <td>
                        {/* <input id="lastMonthSales" name="lastMonthSales" type="text" /> */} <label></label>
                    </td>
                    <td>
                        {/* <input id="currentStock" name="currentStock" type="text" /> */} <label></label>
                    </td>
                    <td>
                        {/* <input id="suggestedStock" name="sugegestedStock" type="text" /> */} <label></label>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={purchaseLines[index].quantity}
                            onChange={(e) => quantityUpdate(parseInt(e.target.value))}
                            required
                            min={1}
                        />
                    </td>
                    <td>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            value={unitPrice}
                            onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
                            required
                            step={'any'}
                        />
                    </td>
                    <td>
                        <label htmlFor="billLines[index].cost" value={purchaseLines[index].cost}>
                            {purchaseLines[index].cost}
                        </label>
                    </td>
                </tr>
            </table>
            {searchResults &&
                searchResults.map((medicine, i) => (
                    <div key={i} onClick={() => setHandle(medicine)} className={classes.options} value={medicine.id}>
                        {medicine.brand_name}
                    </div>
                ))}
        </div>
    )
}
