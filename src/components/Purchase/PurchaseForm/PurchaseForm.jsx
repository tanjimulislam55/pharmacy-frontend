import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PurchaseLines from '../../PurchaseLines/PurchaseLines'
import classes from './PurchaseForm.module.css'

const purchaseLineObj = {
    purchase_price: 0,
    medicine_id: 0,
    purchased_qty: 0,
    received_qty: 0,
}

export default function PurchaseForm() {
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')
    const [totalAmountPerMedicine, setTotalAmountPerMedicine] = useState()
    const [subTotal, setSubTotal] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()

    const [total, setTotal] = useState([])
    const history = useNavigate()

    const [purchaseLines, setPurchaseLines] = useState([{}])

    const click = () => {
        console.log(purchaseLines)
        console.log(total)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        click()
        const details = {
            purchase_in: {
                total_amount: subTotal,
                paid_amount: paidAmount,
                due_amount: dueAmount,
                note,
                purchase_date: date,
            },
            purchase_line_in: purchaseLines,
        }
        console.log(details)
        let successPurchaseForm = fetch(`${process.env.REACT_APP_API_URL}/add_purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })

        if (successPurchaseForm.ok) {
            history('/purchase')
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <p>Add New Purchase</p>

                <form className={classes.item} onSubmit={handleSubmit}>
                    <div className={classes.gridTwo}>
                        <div className={classes.inputbox}>
                            <select>
                                <option value="">Select Vendors *</option>
                                <option value="">ACI</option>
                                <option value="">Beximco</option>
                                <option value="">Square</option>
                            </select>
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input
                                id="subTotal"
                                name="subTotal"
                                type="number"
                                value={subTotal}
                                onChange={(e) => setSubTotal(e.target.value)}
                                required
                            />
                            <label htmlFor="subTotal">Subtotal</label>
                        </div>

                        <div className={classes.inputbox}>
                            <input
                                id="dueAmount"
                                name="dueAmount"
                                type="number"
                                value={dueAmount}
                                onChange={(e) => setDueAmount(e.target.value)}
                                required
                            />
                            <label htmlFor="paidAmount">Due amount</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                id="paidAmount"
                                name="paidAmount"
                                type="number"
                                value={paidAmount}
                                onChange={(e) => setPaidAmount(e.target.value)}
                                required
                            />
                            <label htmlFor="paidAmount">
                                Paid amount <span>*</span>
                            </label>
                        </div>
                    </div>
                    <div className={classes.inputbox}>
                        <textarea
                            id="note"
                            name="note"
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            required
                            rows={2}
                        />
                        <label htmlFor="note">Note</label>
                    </div>
                    <div className={classes.tableContainer}>
                        <table className={classes.tableMain}>
                            <tr className={classes.tableRow}>
                                <th>Select Medicines</th>
                                <th>
                                    Purchase Price <span>*</span>
                                </th>
                                <th>
                                    Purchased Quantity <span>*</span>
                                </th>
                                <th>Received Quantity </th>
                                <th>Sale Price</th>
                                <th>
                                    Exp Date <span>*</span>
                                </th>
                            </tr>
                        </table>
                    </div>
                    {purchaseLines.map((purchaseLine, i) => (
                        <PurchaseLines
                            purchaseLine={purchaseLine}
                            key={i}
                            i={i}
                            total={total}
                            setTotal={setTotal}
                            totalAmountPerMedicine={totalAmountPerMedicine}
                        />
                    ))}
                    <button
                        onClick={() => setPurchaseLines((prev) => prev.concat({}))}
                        type="button"
                        className={classes.btn}>
                        Add More Item
                    </button>
                    <button type="submit" className={classes.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
