import { useEffect, useState } from 'react'
import classes from './BillLines.module.css'

export default function BillLines({ billLines, setBillLines, index }) {
    const [medicines, setMedicines] = useState([])
    const [render, setRender] = useState()
    const [reRender, setReRender] = useState()
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

    const changeData1 = (v) => {
        let mainData = billLines
        mainData[index].quantity = v
        mainData[index].mrp = mainData[index].quantity * mainData[index].unit_price
        mainData[index].total = mainData[index].mrp - mainData[index].mrp * 0.05
        setBillLines([...mainData])
    }

    const changeData2 = (v) => {
        let mainData = billLines
        mainData[index].unit_price = v
        mainData[index].mrp = mainData[index].quantity * mainData[index].unit_price
        mainData[index].total = mainData[index].mrp - mainData[index].mrp * 0.05
        setBillLines([...mainData])
    }

    const handler = (search) => {
        let matches = []
        if (search.length > 0) {
            matches = medicines.filter((med) =>
                // const regex = new RegExp(`${search}`, 'gi')
                // return med.brand_name.match(regex)
                med.brand_name.toLowerCase().includes(search)
            )
        }
        setSearch(search)
        setSearchResults(matches)
    }

    const setHandle = (search) => {
        setSearch(search)
        setSearchResults([])
    }

    return (
        <div className={classes.tableContainer}>
            <div>
                <table className={classes.tableMain}>
                    <tbody>
                        <tr className={classes.tableRow}>
                            {/* <td>
                                <select
                                    className={classes.option}
                                    // onChange={(e) => (billLine.medicine_id = parseInt(e.target.value))}
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
                                    type="number"
                                    value={billLines[index].quantity}
                                    onChange={(e) => changeData1(parseInt(e.target.value))}
                                    // onBlur={(e) => handleBlur(e)}
                                    required
                                    min={1}
                                />
                            </td>
                            <td className={classes.lightTd}>
                                <input
                                    type="number"
                                    // value={search.unit_price}
                                    // onChange={(e) => (billLine.unit_price = parseInt(e.target.value))}
                                    // onBlur={(e) => handleBlur(e)}
                                    value={billLines[index].unit_price}
                                    onChange={(e) => changeData2(parseInt(e.target.value))}
                                    required
                                    min={0}
                                />
                            </td>

                            <td className={classes.lightTd}>
                                <input
                                    type="number"
                                    value={billLines[index].mrp}
                                    onChange={(e) => (billLines.mrp = parseInt(e.target.value))}
                                />
                                {/* <label htmlFor="billLines[index].total">{billLines[index].total}</label> */}
                            </td>

                            <td>
                                <input
                                    id="discount"
                                    name="discount"
                                    type="number"
                                    placeholder={'5%'}
                                    // value={billLines[index].discount}
                                    onChange={(e) => (billLines.discount = parseInt(e.target.value))}
                                    // onBlur={(e) => handleBlur(e)}
                                    min={0}
                                />
                            </td>
                            <td className={classes.lightTd}>
                                <input
                                    id="billCost"
                                    name="billCost"
                                    type="number"
                                    value={billLines[index].total}
                                    onChange={(e) => (billLines.total = parseInt(e.target.value))}
                                    // value={total}
                                    // onChange={(e) => (billLine.total = parseInt(e.target.value))}
                                    // onBlur={(e) => handleBlur(e)}
                                    required
                                    min={0}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {searchResults &&
                    searchResults.map((medicine, i) => (
                        <div
                            key={i}
                            onClick={() => setHandle(medicine)}
                            className={classes.options}
                            value={medicine.id}>
                            {medicine.brand_name}
                        </div>
                    ))}
            </div>
        </div>
    )
}
