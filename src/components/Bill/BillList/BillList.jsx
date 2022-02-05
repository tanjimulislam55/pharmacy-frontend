import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '../../../components'
import CollapseList from '../../Collapse/CollapseList/CollapseList'
import classes from './BillList.module.css'

export default function BillList({ bills }) {
    const [popup, setPopup] = useState(false)
    const [billLines, setBillLines] = useState([])
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    console.log(billLines)
    function handlePopup(bill_lines) {
        setBillLines([...bill_lines])
        setPopup((prev) => !prev)
    }

    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input className={classes.searchField} type="text" placeholder="Search invoice" name="search" />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button}>
                    <Link to="./billform"> + Add Bill</Link>
                </button>
            </div>

            <div className={classes.tableMain}>
                <div className={classes.container}>
                    <div className={classes.head}>ID</div>
                    <div className={classes.head}>Total Amount</div>
                    <div className={classes.head}>Paid Amount</div>
                    <div className={classes.head}>Due Amount</div>
                    <div className={classes.head}>Action</div>
                </div>

                {bills &&
                    bills.map((bill) => (
                        <>
                            <div
                                onClick={() => handlePopup(bill.bill_lines)}
                                key={bill.id}
                                className={classes.containerItem}>
                                <div className={classes.item}>{bill.id}</div>
                                <div className={classes.item}>{bill.total_amount}</div>
                                <div className={classes.item}>{bill.paid_amount}</div>
                                <div className={classes.item}>{bill.due_amount}</div>
                                <div className={classes.item}>
                                    <Link className={classes.icon} to="#">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <Link className={classes.icon} to="#">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Link>
                                </div>
                                {popup & (billLines[0]?.bill_id === bill.id) ? (
                                    <CollapseList billLines={billLines} />
                                ) : null}
                            </div>
                        </>
                    ))}
                <Pagination
                    setStartIdx={setStartIdx}
                    setEndIdx={setEndIdx}
                    page={bills.filter((bill) => bill.id).length}
                />
            </div>
        </div>
    )
}
