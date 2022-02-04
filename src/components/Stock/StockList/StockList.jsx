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
                    <th>Last transacted quantity</th>
                    <th>Last transacted date</th>
                    <th>Unit Price</th>
                    <th>Action</th>
                </tr>
                {(stocks, medicines) &&
                    medicines
                        .filter((medicine) => medicine.brand_name.toLowerCase().includes(searched))
                        .splice(startIdx, endIdx)
                        .map((filteredMedicine) => (
                            <tr className={classes.tableRow}>
                                <td data-title="stock_id">{get_matched_stock(stocks, filteredMedicine.id)?.id}</td>
                                <td data-title="brand_name">{filteredMedicine.brand_name}</td>
                                <td data-title="generic_name">{filteredMedicine.generic_name}</td>
                                <td data-title="in_stock">
                                    {get_matched_stock(stocks, filteredMedicine.id)?.in_stock}
                                </td>
                                <td data-title="last_transacted_quantity">
                                    {get_matched_stock(stocks, filteredMedicine.id)?.last_transacted_quantity}
                                </td>
                                <td data-title="last_transacted_date">
                                    {get_matched_stock(stocks, filteredMedicine.id)?.last_transacted_date}
                                </td>
                                <td data-title="unit_price">{filteredMedicine.unit_price}</td>
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
                page={
                    medicines &&
                    medicines.filter((medicine) => medicine.brand_name.toLowerCase().includes(searched)).length
                }
            />
        </div>
    )
}
