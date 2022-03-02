import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './PharmacyList.module.css'

export default function PharmacyList({ pharmacyLists, headerList, activeStatus }) {
    const [isOpen, setIsOpen] = useState(false)

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const api = process.env.REACT_APP_API_URL

    function activeId(id) {
        fetch(`${api}/users/active/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
    }

    function removeId(id) {
        fetch(`${api}/users/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
    }

    const navigate = useNavigate()

    return (
        <div>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>{headerList.name}</th>
                        <th>{headerList.mobile}</th>
                        <th>{headerList.email}</th>
                        <th>{headerList.status}</th>
                        <th>{headerList.action}</th>
                    </tr>
                </thead>
                <tbody>
                    {pharmacyLists &&
                        pharmacyLists.map((list) =>
                            list.is_active === activeStatus.status && list.pharmacy !== null ? (
                                <tr className={classes.alert} key={list.id}>
                                    <td>{list.id}</td>
                                    <td>{list.full_name}</td>
                                    <td>{list.phone}</td>
                                    <td>{list.email}</td>
                                    <td className={classes.status}>
                                        <span className={list.is_active === false ? classes.waiting : classes.active}>
                                            {activeStatus.action}
                                        </span>
                                    </td>

                                    <td>
                                        <button className={classes.icon} onClick={() => setIsOpen(true)}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        <button className={classes.icon}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className={classes.icon}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                    {isOpen && (
                                        <div key={() => list.id} className={classes.wrapper}>
                                            <div className={classes.formWrapper}>
                                                <div className={classes.close} onClick={() => setIsOpen(false)}>
                                                    &times;
                                                </div>

                                                <table className={classes.table}>
                                                    <thead className={classes.formHead}>
                                                        <tr>
                                                            <th>Pharmacy Name</th>
                                                            <th>Trade License</th>
                                                            <th>Address</th>
                                                            <th>Area/Upazila</th>
                                                            <th>City/District</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className={classes.alert}>
                                                            <td>{list.pharmacy.name}</td>
                                                            <td>{list.pharmacy.trade_license}</td>
                                                            <td>{list.pharmacy.area}</td>
                                                            <td>{list.pharmacy.sub_district}</td>
                                                            <td>{list.pharmacy.district}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className={classes.buttonContainer}>
                                                    {list.is_active === false ? (
                                                        <button
                                                            className={classes.button}
                                                            onClick={() => {
                                                                activeId(list.id)
                                                                navigate('/super_admin')
                                                            }}>
                                                            Activate
                                                        </button>
                                                    ) : (
                                                        ''
                                                    )}
                                                    <button
                                                        className={classes.button}
                                                        onClick={() => {
                                                            removeId(list.id)
                                                            navigate('/super_admin')
                                                        }}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </tr>
                            ) : null
                        )}
                </tbody>
            </table>
        </div>
    )
}
