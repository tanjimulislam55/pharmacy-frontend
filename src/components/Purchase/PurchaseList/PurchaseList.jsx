import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './PurchaseList.module.css'

export default function PurchaseList({ purchases }) {
    const [searched, setSearched] = useState('')
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)
    const [manufactures, setManufactures] = useState([])

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const api = process.env.REACT_APP_API_URL

    const getName = (elements, id) => {
        const items = elements.find((element) => element.id === id)
        return items
    }

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
                    <Link to="./purchaseform">+ New Order</Link>
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Manufacturer</th>
                    <th>Total Amount</th>
                    <th>Due Amount</th>
                    <th>Paid Amount</th>
                    <th>Note</th>
                    <th>Action</th>
                </tr>
                {/* {manufactures && manufactures.filter((m) => m.name.toLowerCase().includes(searched))} */}
                {purchases &&
                    purchases.map((purchase) => (
                        <tr className={classes.tableRow} key={purchase.id}>
                            <td>{purchase.id}</td>
                            {/* {manufactures &&
                                manufactures
                                    .filter((m) =>
                                        m.id === purchase.manufacturer_id ? m.name.toLowerCase().includes(searched) : ''
                                    )
                                    .map((manu, i) =>
                                        manu.id === purchase.manufacturer_id ? <td key={i}>{manu.name}</td> : ''
                                    )} */}
                            <td>{getName(manufactures, purchase.manufacturer_id)?.name}</td>
                            <td>{purchase.total_amount}</td>
                            <td>{purchase.due_amount}</td>
                            <td>{purchase.paid_amount}</td>
                            <td>{purchase.note}</td>
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
            <Pagination
                setStartIdx={setStartIdx}
                setEndIdx={setEndIdx}
                page={purchases.filter((purchase) => purchase.id).length}
            />
        </div>
    )
}
