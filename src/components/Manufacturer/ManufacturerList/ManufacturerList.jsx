import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import classes from './ManufacturerList.module.css'

export default function ManufacturerList({ manufacturers, setOpenForm }) {
    const [searched, setSearched] = useState('')
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search" name="search" />
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
                    <th>Established</th>
                    <th>Total Brands</th>
                    <th>Total Generics</th>
                    <th>Market Share</th>
                    <th>Growth</th>
                    <th>Action</th>
                </tr>
                {manufacturers &&
                    manufacturers.map((manufacturer) => (
                        <tr className={classes.tableRow} key={manufacturer.id}>
                            <td data-title="">{manufacturer.id}</td>
                            <td data-title="">{manufacturer.name}</td>
                            <td data-title="">{manufacturer.established_in}</td>
                            <td data-title="">{manufacturer.total_brands}</td>
                            <td data-title="">{manufacturer.total_generics}</td>
                            <td data-title="">{manufacturer.market_share}</td>
                            <td data-title="">{manufacturer.growth}</td>
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
                page={manufacturers.filter((manufacturer) => manufacturer.id).length}
            />
        </div>
    )
}
