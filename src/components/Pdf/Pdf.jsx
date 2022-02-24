import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Logo from './Logo/logo.png'
import classes from './Pdf.module.css'

let date = new Date()
let day = ('0' + date.getDate()).slice(-2)
let month = ('0' + (date.getMonth() + 1)).slice(-2)
let year = date.getFullYear()
const today = `${day}-${month}-${year}`
const invoiceNo = Math.floor(1000 + Math.random() * 9000)

export const Pdf = React.forwardRef((props, ref) => {
    const [medicines, setMedicines] = useState([])

    const data = JSON.parse(localStorage.getItem('pages'))
    const page = data[0].invoice_order_in
    const pages = data[0].invoice_order_line_in

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

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
                            <div className={classes.to}>INVOICE TO:</div>
                            <div className={classes.name}>{page.customer}</div>
                            <div className={classes.mobile}>{page.mobile}</div>
                            <div className={classes.address}>{page.address}</div>
                        </div>
                        <div className={classes.invoice}>
                            <div className={classes.name}>INVOICE: hx-{invoiceNo}</div>
                            <div className={classes.date}>Date: {today}</div>
                        </div>
                    </div>
                    <table className={classes.tableMain}>
                        <thead>
                            <tr>
                                <th className={classes.no}>No.</th>
                                <th className={classes.desc}>Medicine</th>
                                <th className={classes.desc}>Strength</th>
                                <th className={classes.desc}>Dosage Form</th>
                                <th className={classes.unit}>Unit Price (tk)</th>
                                <th className={classes.qty}>Quantity (pcs)</th>
                                <th className={classes.total}>Total (tk)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicines &&
                                medicines.map((med) =>
                                    pages.map((page) => (
                                        <tr key={page.id}>
                                            {med.id === page.medicine_id ? <td className={classes.desc}> 1 </td> : ''}

                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {med.brand_name} </td>
                                            ) : (
                                                ''
                                            )}

                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {med.strength} </td>
                                            ) : (
                                                ''
                                            )}

                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {med.dosage_form} </td>
                                            ) : (
                                                ''
                                            )}
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {page.unit_price} </td>
                                            ) : (
                                                ''
                                            )}
                                            {med.id === page.medicine_id ? (
                                                <td className={classes.desc}> {page.quantity} </td>
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
                                    {page.total_amount + page.discount} <span>tk</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td colSpan="3">Discount:</td>
                                <td>
                                    {page.discount} <span>tk</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td colSpan="3">Grand Total:</td>
                                <td>
                                    {page.total_amount} <span>tk</span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className={classes.note}>Note : {page.comment}</div>
                    <div className={classes.text}>Thank you!</div>
                    <div className={classes.notices}>
                        <div>Payment:</div>
                        <div className={classes.notice}>Cash on delivary</div>
                    </div>
                </main>
            </div>
        </div>
    )
})
