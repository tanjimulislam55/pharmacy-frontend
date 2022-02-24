import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './GrnList.module.css'

export default function Grn({ grns }) {
    const [searched, setSearched] = useState('')
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    const [medicines, setMedicines] = useState([])
    const [manufactures, setManufactures] = useState([])
    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const api = process.env.REACT_APP_API_URL

    const getName = (elements, id) => {
        const items = elements.find((element) => element.id === id)
        return items
    }

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
            setManufactures(data)
        }
        return fetchData()
    }, [token, api])

    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input
                        className={classes.searchField}
                        type="text"
                        placeholder="Search"
                        name="search"
                        value={searched}
                        onChange={(e) => setSearched(e.target.value)}
                    />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>
                    <Link to="./grnform">+ Add New GRN</Link>
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>Purchase ID</th>
                    <th>Medicine</th>
                    <th>Manufacturer</th>
                    <th>Received Quantity</th>
                    <th>Depo Price</th>
                    <th>Total Price</th>
                    <th>Expiry Date</th>
                    <th>Action</th>
                </tr>

                {(manufactures, medicines, grns) &&
                    grns.map((grn) => (
                        <tr className={classes.tableRow} key={grn.id}>
                            <td>{grn.purchase_id}</td>
                            {/* {medicines &&
                                medicines.map((med) => (med.id === grn.medicine_id ? <td>{med.brand_name}</td> : ''))} */}
                            <td>{getName(medicines, grn.medicine_id)?.brand_name}</td>
                            <td>{getName(manufactures, grn.manufacturer_id)?.name}</td>
                            <td>{grn.quantity}</td>
                            <td>{grn.depo_price}</td>
                            <td>{grn.cost}</td>
                            <td>{grn.expiry_date}</td>

                            <td className="select">
                                <Link className={classes.icon} to="#">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                                <Link className={classes.icon} to="#">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Link>
                            </td>
                        </tr>
                    ))}
            </table>
            <Pagination setStartIdx={setStartIdx} setEndIdx={setEndIdx} page={grns.filter((grn) => grn.id).length} />
        </div>
    )
}
