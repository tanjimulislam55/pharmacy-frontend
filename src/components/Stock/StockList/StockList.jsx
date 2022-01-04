import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classes from './StockList.module.css'

export default function StockList() {
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>+ Add Stock</button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>Sl</th>
                    <th>Medicinbe Name</th>
                    <th>Vendor</th>
                    <th>Sale Price</th>
                    <th>Parchase Price</th>
                    <th>In Qty</th>
                    <th>Out Qty</th>
                    <th>Stock</th>
                    <th>Stock Box</th>
                    <th>Stock Sale Price</th>
                    <th>Stock Purchase Price</th>
                </tr>
                <tr className={classes.tableRow}>
                    <td data-title="">1</td>
                    <td data-title="">Napa</td>
                    <td data-title="">Square</td>
                    <td data-title="">6</td>
                    <td data-title="">5</td>
                    <td data-title="">1000</td>
                    <td data-title="">100</td>
                    <td data-title="">900</td>
                    <td data-title="">9.0</td>
                    <td data-title="">500</td>
                    <td data-title="">600</td>
                </tr>
            </table>
        </div>
    )
}
