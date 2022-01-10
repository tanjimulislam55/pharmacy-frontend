import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './PurchaseList.module.css'

export default function PurchaseList() {
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>+ New Purchase</button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>Sl</th>
                    <th>Suppiler Name</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Date</th>
                </tr>
                <tr className={classes.tableRow}>
                    <td data-title="">1</td>
                    <td data-title="">Beximco</td>
                    <td data-title="">1000</td>
                    <td data-title="">Cash Payment</td>
                    <td data-title="">01-01-2022</td>
                </tr>
            </table>
        </div>
    )
}
