import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PharmacyList.module.css'

export default function PharmacyList() {
    return (
        <div>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={classes.alert}>
                        <td>ABC Pharmacy</td>
                        <td>01757000011</td>
                        <td>abc@gmail.com</td>
                        <td>Bashundhara</td>
                        <td className={classes.status}>
                            <span className={classes.active}>Active</span>
                        </td>
                        <td>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faEye} />
                            </Link>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faEdit} />
                            </Link>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faTrash} />
                            </Link>
                        </td>
                    </tr>
                    <tr className={classes.alert}>
                        <td>EFG Pharmacy</td>
                        <td>01757000022</td>
                        <td>efg@gmail.com</td>
                        <td>Banani</td>
                        <td className={classes.status}>
                            <span className={classes.waiting}>Waiting</span>
                        </td>
                        <td>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faEye} />
                            </Link>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faEdit} />
                            </Link>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faTrash} />
                            </Link>
                        </td>
                    </tr>
                    <tr className={classes.alert}>
                        <td>XYZ Pharmacy</td>
                        <td>01757000033</td>
                        <td>xyz@gmail.com</td>
                        <td>Mirpur</td>
                        <td className={classes.status}>
                            <span className={classes.delete}>Delete</span>
                        </td>
                        <td>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faEye} />
                            </Link>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faEdit} />
                            </Link>
                            <Link className={classes.icon} to="#">
                                <FontAwesomeIcon icon={faTrash} />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
