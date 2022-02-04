import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './PurchaseList.module.css'

export default function PurchaseList({ purchases }) {
    const [searched, setSearched] = useState('')
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>
                    <Link to="./purchaseform">+ New Purchase</Link>
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Total Amount</th>
                    <th>Due Amount</th>
                    <th>Paid Amount</th>
                    <th>Note</th>
                    <th>User Id</th>
                    <th>Action</th>
                </tr>
                {purchases &&
                    purchases.map((purchase) => (
                        <tr className={classes.tableRow} key={purchase.id}>
                            <td data-title="">{purchase.id}</td>
                            <td data-title="">{purchase.total_amount}</td>
                            <td data-title="">{purchase.due_amount}</td>
                            <td data-title="">{purchase.paid_amount}</td>
                            <td data-title="">{purchase.note}</td>
                            <td data-title="">{purchase.user_id}</td>
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
