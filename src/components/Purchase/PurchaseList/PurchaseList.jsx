import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
                    <th>Suppiler Name</th>
                    <th>Total Amount</th>
                    <th>Due Amount</th>
                    <th>Paid Amount</th>
                    <th>Date</th>
                </tr>
                {purchases &&
                    purchases
                        // .filter((purchase) => purchase.name.toLowerCase().includes(searched))
                        .splice(startIdx, endIdx)
                        .map((purchase) => (
                            <tr className={classes.tableRow} key={purchase.id}>
                                <td data-title="">{purchase.id}</td>
                                <td data-title="">XYZ</td>
                                <td data-title="">{purchase.total_amount}</td>
                                <td data-title="">{purchase.due_amount}</td>
                                <td data-title="">{purchase.paid_amount}</td>
                                <td data-title="">{purchase.purchase_date}</td>
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
