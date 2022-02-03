import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classes from './UserList.module.css'

export default function UserList() {
    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>+ Add User</button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>Info</th>
                    <th>User Role</th>
                    <th>User Name</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
                <tr className={classes.tableRow}>
                    <td>Sajid</td>
                    <td>Owner</td>
                    <td>owner</td>
                    <td>Active</td>
                    <td>14-01-2022</td>
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
                    <td>Rishad</td>
                    <td>Manager</td>
                    <td>manager1</td>
                    <td>Active</td>
                    <td>15-01-2022</td>
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
                    <td>Antor</td>
                    <td>Manager</td>
                    <td>manager2</td>
                    <td>Active</td>
                    <td>16-01-2022</td>
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
