import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Collapse from '../../Collapse/Collapse'
import classes from './BillList.module.css'

export default function BillList({ bills, setIsOpenForm }) {
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search invoice" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button} onClick={() => setIsOpenForm(true)}>
                    Add Bill
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Total Amount</th>
                    <th>Due Amount</th>
                    <th>Paid Amount</th>
                    <th>Billing Date</th>
                    <th>Action</th>
                </tr>
                {bills &&
                    bills.map((bill) => (
                        <>
                            <tr className={classes.tableRow}>
                                <td data-title="">{bill.id}</td>
                                <td data-title="">{bill.total_amount}</td>
                                <td data-title="">{bill.due_amount}</td>
                                <td data-title="">{bill.paid_amount}</td>
                                <td data-title="">{bill.billing_date}</td>
                                <td className="select">
                                    <Link className={classes.icon} to="#">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <Link className={classes.icon} to="#">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Link>
                                </td>
                            </tr>
                            <Collapse />
                        </>
                    ))}
            </table>
        </div>
    )
}
