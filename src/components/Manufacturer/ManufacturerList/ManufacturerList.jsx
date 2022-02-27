import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './ManufacturerList.module.css'

export default function ManufacturerList({ manufacturers, trades, tradeHistories, setOpenForm }) {
    const [searched, setSearched] = useState('')
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input
                        className={classes.searchField}
                        type="text"
                        placeholder="Search manufacturer"
                        name="search"
                        value={searched}
                        onChange={(e) => setSearched(e.target.value)}
                    />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button} onClick={() => setOpenForm(true)}>
                    + New Manufacturer
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Manufacturer Name</th>
                    <th>Purchase Amount</th>
                    <th>Closing Balance</th>
                    <th>Outstanding Amount</th>
                    <th>Overdue Amount</th>
                </tr>
                {manufacturers &&
                    manufacturers
                        .filter((manu) => manu.name.toLowerCase().includes(searched))
                        .map((manufacturer) => (
                            <tr className={classes.tableRow} key={manufacturer.id}>
                                <td>{manufacturer.id}</td>
                                <td>{manufacturer.name}</td>
                                <td>{manufacturer.growth}</td>
                            </tr>
                        ))}
            </table>
            <Pagination
                setStartIdx={setStartIdx}
                setEndIdx={setEndIdx}
                page={manufacturers.filter((manufacturer) => manufacturer.id).length}
            />
        </div>
    )
}
