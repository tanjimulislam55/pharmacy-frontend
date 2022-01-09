import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classes from './MedicineList.module.css'

export default function MedicineList({ medicines, vendors, types, categories, units, setIsOpenForm }) {
    const getName = (elements, id) => {
        const item = elements.find((element) => element.id === id)
        return item.name
    }
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search medicine" name="search" />
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
                    <th>Action</th>
                </tr>
                {medicines &&
                    medicines.map((medicine) => (
                        <tr key={medicine.id} className={classes.tableRow}>
                            <td data-title="id">{medicine.id}</td>
                            <td data-title="name">{medicine.name}</td>
                            <td data-title="type">{getName(types, medicine.type_id)}</td>
                            <td data-title="unit">{getName(units, medicine.unit_id)}</td>
                            <td data-title="category">{getName(categories, medicine.category_id)}</td>
                            <td data-title="company">{getName(vendors, medicine.vendor_id)}</td>
                            <td data-title="stock">{medicine.medicine_detail.stock}</td>
                            <td data-title="price">{medicine.medicine_detail.retail_price}</td>
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
        </div>
    )
}
