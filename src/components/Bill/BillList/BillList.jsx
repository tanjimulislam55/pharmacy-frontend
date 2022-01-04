import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classes from './BillList.module.css'

export default function BillList() {
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search invoice" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>+ Add Invoice</button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>Sl</th>
                    <th>Invoice ID</th>
                    <th>Invoice No</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Total Amount</th>
                    <th>Action</th>
                </tr>
                <tr className={classes.tableRow}>
                    <td data-title="">1</td>
                    <td data-title="">1001</td>
                    <td data-title="">0012356</td>
                    <td data-title="">Morshedul Antor</td>
                    <td data-title="">2022-01-02</td>
                    <td data-title="">1000</td>

                    <td className="select">
                        <Link className={classes.icon} to="#">
                            <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        <Link className={classes.icon} to="#">
                            <FontAwesomeIcon icon={faTrash} />
                        </Link>
                    </td>
                </tr>
                <tr className={classes.tableRow}>
                    <td data-title="">2</td>
                    <td data-title="">1002</td>
                    <td data-title="">0012357</td>
                    <td data-title="">Rishad Islam</td>
                    <td data-title="">2022-01-02</td>
                    <td data-title="">1200</td>

                    <td className="select">
                        <Link className={classes.icon} to="#">
                            <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        <Link className={classes.icon} to="#">
                            <FontAwesomeIcon icon={faTrash} />
                        </Link>
                    </td>
                </tr>
            </table>
        </div>
    )
}
