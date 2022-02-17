import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './GrnForm.module.css'

export default function GrnForm() {
    const [quantity, setQuantity] = useState()
    const [depoPrice, setDepoPrice] = useState()
    const [discount, setDiscount] = useState()
    const [cost, setCost] = useState()
    const [date, setDate] = useState()

    const [note, setNote] = useState('')
    const [totalAmount, setTotalAmount] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            quantity: quantity,
            depo_price: depoPrice,
            vat: 0,
            discount: discount,
            cost: cost,
            expiry_date: date,

            medicine_id: 0,
            purchase_id: 0,
            manufacturer_id: 0,
        }
        fetch(`${process.env.REACT_APP_API_URL}/grns/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        // navigate('/grn')
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <p>Goods Received Note (GRN)</p>

                <form className={classes.item} onSubmit={handleSubmit}>
                    <div className={classes.tableContainer}>
                        <table className={classes.tableMain}>
                            <tr className={classes.tableRow}>
                                <th>
                                    Purchase ID<span>*</span>
                                </th>
                                <th>Manufacturer</th>
                                <th>Medicine</th>
                                <th>Order Quantity</th>
                                <th>
                                    Received Quantity<span>*</span>
                                </th>
                                <th>
                                    Price<span>*</span>
                                </th>
                                <th>Total Price</th>
                            </tr>
                            <tr className={classes.tableRow}>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <label></label>
                                </td>
                                <td>
                                    <label></label>
                                </td>
                                <td>
                                    <label></label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={depoPrice}
                                        onChange={(e) => setDepoPrice(parseInt(e.target.value))}
                                        required
                                    />
                                </td>
                                <td>
                                    <label></label>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className={classes.inputbox}>
                        <textarea
                            id="note"
                            name="note"
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Note if any"
                            rows={2}
                        />
                    </div>
                    <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input
                                id="totalAmount"
                                name="totalAmount"
                                type="number"
                                value={totalAmount}
                                onChange={(e) => setTotalAmount(parseInt(e.target.value))}
                                placeholder="Total Amount"
                                required
                            />
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                id="paidAmount"
                                name="paidAmount"
                                type="number"
                                value={paidAmount}
                                onChange={(e) => setPaidAmount(parseInt(e.target.value))}
                                placeholder="Paid Amount"
                                required
                            />
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                id="due"
                                name="Due"
                                type="number"
                                value={dueAmount}
                                onChange={(e) => setDueAmount(parseInt(e.target.value))}
                                placeholder="Due Amount"
                            />
                        </div>
                    </div>
                    <Link to="#" className={classes.btnPaid}>
                        Full Paid
                    </Link>
                    <button type="submit" className={classes.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
