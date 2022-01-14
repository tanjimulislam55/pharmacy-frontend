import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './MedicineList.module.css'

export default function MedicineList({ medicines, vendors, types, categories, units, setIsOpenForm }) {
    const getName = (elements, id) => {
        const item = elements.find((element) => element.id === id)
        return item.name
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
                <button className={classes.button} onClick={() => setIsOpenForm(true)}>
                    + Add Medicine
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Medicine</th>
                    <th>Type</th>
                    <th>Unit</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Last Sale Date</th>
                    <th>Last Sold Quantity</th>
                    <th>Action</th>
                </tr>
                {medicines &&
                    medicines
                        .filter((medicine) => medicine.name.toLowerCase().includes(searched))
                        .splice(startIdx, endIdx)
                        .map((filteredMedicine) => (
                            <tr key={filteredMedicine.id} className={classes.tableRow}>
                                <td data-title="id">{filteredMedicine.id}</td>
                                <td data-title="name">{filteredMedicine.name}</td>
                                <td data-title="type">{getName(types, filteredMedicine.type_id)}</td>
                                <td data-title="unit">{getName(units, filteredMedicine.unit_id)}</td>
                                <td data-title="category">{getName(categories, filteredMedicine.category_id)}</td>
                                <td data-title="company">{getName(vendors, filteredMedicine.vendor_id)}</td>
                                <td data-title="stock">{filteredMedicine.medicine_detail.stock}</td>
                                <td data-title="price">{filteredMedicine.medicine_detail.retail_price}</td>
                                <td data-title="last-sale-date">{filteredMedicine.medicine_detail.last_sale_date}</td>
                                <td data-title="last-sold-qty">{filteredMedicine.medicine_detail.last_slold_qty}</td>
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
                page={medicines.filter((medicine) => medicine.name.toLowerCase().includes(searched)).length}
            />
        </div>
    )
}
