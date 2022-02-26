import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import CollapseList from '../../Collapse/CollapseList/CollapseList'
import classes from './BillList.module.css'

export default function BillList({ bills }) {
    const [popup, setPopup] = useState(false)
    const [billLines, setBillLines] = useState([])
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    console.log(billLines)
    function handlePopup(bill_lines) {
        setBillLines([...bill_lines])
        setPopup((prev) => !prev)
    }

    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search invoice" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>
                    <Link to="./billform"> + Add Bill</Link>
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Total Amount</th>
                    <th>Paid Amount</th>
                    <th>Due Amount</th>
                    <th>Discount</th>
                    <th>Billing Date</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>

                {bills &&
                    bills.map((bill) => (
                        <tr className={classes.tableRow} key={bill.id} onClick={() => handlePopup(bill.bill_lines)}>
                            <td>{bill.id}</td>
                            <td>{bill.total_amount}</td>
                            <td>{bill.paid_amount}</td>
                            <td>{bill.due_amount}</td>
                            <td>{bill.discount}</td>
                            <td>{bill.created_at.slice(0, 10)}</td>
                            <td>{bill.created_at.slice(11, 16)}</td>
                            <td>
                                <Link className={classes.icon} to="#">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                                <Link className={classes.icon} to="#">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Link>
                            </td>
                            {popup & (billLines[0]?.bill_id === bill.id) ? (
                                <CollapseList billLines={billLines} />
                            ) : null}
                        </tr>
                    ))}
            </table>
            <Pagination setStartIdx={setStartIdx} setEndIdx={setEndIdx} page={bills.filter((bill) => bill.id).length} />
        </div>
    )
}
