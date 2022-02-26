import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './StockList.module.css'

export default function StockList({ stocks, medicines }) {
    const get_matched_stock = (elements, id) => {
        const item = elements.find((element) => element.medicine_id === id)
        return item
    }

    const [searched, setSearched] = useState('')
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    const formattedDate = (e, id) => {
        let date = get_matched_stock(stocks, id)?.last_transacted_date
        console.log(date)
        return date.toLocaleDateString()
    }
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input
                        onChange={(e) => setSearched(e.target.value)}
                        value={searched}
                        className={classes.searchField}
                        type="text"
                        placeholder="Search medicine"
                        name="search"
                    />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>Stock Id</th>
                    <th>Brand Name</th>
                    <th>Generic Name</th>
                    <th>In Stock</th>
                    <th>Last Purchase Quantity</th>
                    <th>Last Purchase Date</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>

                {(stocks, medicines) &&
                    stocks.map((stock) =>
                        medicines
                            .filter(
                                (medicine) =>
                                    medicine.brand_name.toLowerCase().includes(searched) ||
                                    medicine.generic_name.toLowerCase().includes(searched)
                            )
                            .splice(startIdx, endIdx)
                            .map((medicine) =>
                                stock.medicine_id === medicine.id ? (
                                    <tr className={classes.tableRow} key={medicine.id}>
                                        <td data-title="stock_id">
                                            {/* {get_matched_stock(stocks, filteredMedicine.id)?.id} */}
                                            {stock.id}
                                        </td>
                                        <td data-title="brand_name">{medicine.brand_name}</td>
                                        <td data-title="generic_name">{medicine.generic_name}</td>
                                        <td data-title="in_stock">
                                            {/* {get_matched_stock(stocks, filteredMedicine.id)?.in_stock} */}
                                            {stock.in_stock}
                                        </td>
                                        <td data-title="last_transacted_quantity">
                                            {/* {get_matched_stock(stocks, filteredMedicine.id)?.last_purchased_quantity} */}
                                            {stock.last_purchased_quantity}
                                        </td>
                                        <td data-title="last_transacted_date">
                                            {/* {get_matched_stock(stocks, filteredMedicine.id)?.last_date_of_purchase} */}
                                            {stock.last_date_of_purchase.slice(0, 10)}
                                        </td>
                                        <td>{stock.last_date_of_purchase.slice(11, 16)}</td>
                                        <td className="select">
                                            <Link className={classes.icon} to="#">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                            <Link className={classes.icon} to="#">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Link>
                                        </td>
                                    </tr>
                                ) : null
                            )
                    )}
            </table>
            <Pagination
                setStartIdx={setStartIdx}
                setEndIdx={setEndIdx}
                page={
                    (medicines &&
                        medicines.filter((medicine) => medicine.brand_name.toLowerCase().includes(searched)).length) ||
                    medicines.filter((medicine) => medicine.generic_name.toLowerCase().includes(searched)).length
                }
            />
        </div>
    )
}
