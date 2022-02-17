import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './GrnList.module.css'

export default function Grn({ grns }) {
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
                    <Link to="./grnform">+ Add New GRN</Link>
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Order ID</th>
                    <th>Manufacturer</th>
                    <th>Medicine</th>
                    <th>Order Quantity</th>
                    <th>Received Quantity</th>
                    <th>Total Amount</th>
                    <th>Paid Amount</th>
                    <th>Action</th>
                </tr>
                {grns &&
                    grns.map((grn) => (
                        <tr className={classes.tableRow} key={grn.id}>
                            <td>{grn.id}</td>
                            <td>1</td>
                            <td>Square</td>
                            <td>Paricel</td>
                            <td>20</td>
                            <td>20</td>
                            <td>100</td>
                            <td>90</td>
                            {/* <td>{grn.note}</td> */}

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
