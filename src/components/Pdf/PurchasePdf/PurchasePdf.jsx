import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Logo from '../Logo/logo.png'
import classes from './PurchasePdf.module.css'

let date = new Date()
let day = ('0' + date.getDate()).slice(-2)
let month = ('0' + (date.getMonth() + 1)).slice(-2)
let year = date.getFullYear()
const today = `${day}-${month}-${year}`
const invoiceNo = Math.floor(1000 + Math.random() * 9000)

export const Pdf = React.forwardRef((props, ref) => {
    const [medicines, setMedicines] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const data = JSON.parse(localStorage.getItem('purchase'))

    const index = data.length - 1
    const page = data[index].purchase_order_in
    const pages = data[index].purchase_order_line_in

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    let sl = 0

    const getName = (elements, id) => {
        const items = elements.find((element) => element.id === id)
        return items
    }

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/medicines/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token])
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/manufacturers/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setManufacturers(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token])

    return (
        <div ref={ref} className={classes.body}>
            <div className={classes.page}>
                <header className={classes.clear}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={classes.company}>
                        <div className={classes.name}>HEALTHx BD Ltd.</div>
                        <div>House 26, Road 2, Banani</div>
                        <div>(+88) 0123-456-789</div>
                        <div>
                            <Link to="#">healthx@example.com</Link>
                        </div>
                    </div>
                </header>

                <main>
                    <div className={`${classes.details} ${classes.clear}`}>
                        <div className={classes.client}>
                            <div className={classes.to}>Purchase Order To:</div>
                            <div className={classes.name}>{getName(manufacturers, page.manufacturer_id)?.name}</div>
                            <div className={classes.address}>Dhaka</div>
                        </div>

                        <div className={classes.invoice}>
                            <div className={classes.name}>Purchase No: hx-{invoiceNo}</div>
                            <div className={classes.date}>Date: {today}</div>
                        </div>
                    </div>
                    <table className={classes.tableMain}>
                        <thead>
                            <tr>
                                <th className={classes.no}>Sl No.</th>
                                <th className={classes.desc}>Description</th>
                                <th className={classes.unit}>Depo Price (tk)</th>
                                <th className={classes.qty}>Box</th>
                                <th className={classes.qty}>Quantity (pcs)</th>
                                <th className={classes.desc}>Discount</th>
                                <th className={classes.total}>Amount (tk)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicines &&
                                medicines.map((med) =>
                                    pages.map((page) => (
                                        <tr key={page.id}>
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {(sl = sl + 1)} </td>
                                            ) : (
                                                ''
                                            )}
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {med.brand_name} </td>
                                            ) : (
                                                ''
                                            )}
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {med.unit_price} </td>
                                            ) : (
                                                ''
                                            )}
                                            {med.id === page.medicine_id ? <td className={classes.desc}> 10</td> : ''}
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {page.quantity} </td>
                                            ) : (
                                                ''
                                            )}
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}>
                                                    0 <span>%</span>
                                                </td>
                                            ) : (
                                                ''
                                            )}
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {page.cost} </td>
                                            ) : (
                                                ''
                                            )}
                                        </tr>
                                    ))
                                )}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colSpan="3"></td>
                                <td colSpan="3">Subtotal:</td>
                                <td>
                                    {page.sub_total} <span>tk</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td colSpan="3">Discount:</td>
                                <td>
                                    {page.discount} <span>%</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td colSpan="3">Total Amount:</td>
                                <td>
                                    {page.total_amount} <span>tk</span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className={classes.note}>Note : {page.comment}</div>
                    {/* <div className={classes.text}>Thank you!</div> */}
                    <br />
                    <br />
                    <div className={classes.notices}>
                        <div>Memo:</div>
                        <div className={classes.notice}>Term and Conditions: As per agreement</div>
                    </div>
                </main>
            </div>
        </div>
    )
})
