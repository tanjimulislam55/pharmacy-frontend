import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import MedicineForm from '../MedicineForm/MedicineForm'
import classes from './MedicineList.module.css'

export default function MedicineList({ medicine }) {
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search medicine" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>
                    <Link to="#popup">Add Medicine</Link>
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Medicine</th>
                    <th>Type</th>
                    <th>Company</th>
                    <th>Stock</th>
                    <th></th>
                </tr>

                <tr className={classes.tableRow}>
                    <td data-title="id">001</td>
                    <td data-title="name">Napa Extra</td>
                    <td data-title="type">Tablet</td>
                    <td data-title="company">Beximco</td>
                    <td data-title="stock">500</td>
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
                    <td data-title="id">002</td>
                    <td data-title="name">Ace Plus</td>
                    <td data-title="type">Tablet</td>
                    <td data-title="company">Square</td>
                    <td data-title="stock">400</td>
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
