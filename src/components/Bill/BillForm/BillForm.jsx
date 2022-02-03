import { useEffect, useState } from 'react'
import PurchaseLines from '../../PurchaseLines/PurchaseLines'
import classes from './BillForm.module.css'

export default function BillForm() {
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')
    const [totalAmountPerMedicine, setTotalAmountPerMedicine] = useState()
    const [subTotal, setSubTotal] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()

    const [total, setTotal] = useState([])

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
        fetch(`${process.env.REACT_APP_API_URL}/add_purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <p>Add New Bill</p>

                <form className={classes.item} onSubmit={handleSubmit}>
                    <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="text" required />
                            <label htmlFor="subTotal">
                                Customer Name <span>*</span>
                            </label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="text" required />
                            <label htmlFor="subTotal">Customer Email</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="number" required />
                            <label htmlFor="subTotal">
                                Customer Mobile <span>*</span>
                            </label>
                        </div>
                    </div>
                    <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="text" required />
                            <label htmlFor="subTotal">
                                Doctor Name <span>*</span>
                            </label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="date" name="date" type="date" required />
                        </div>
                        <div className={classes.inputbox}>
                            <select>
                                <option value="">Payment Method *</option>
                                <option value="">Bank</option>
                                <option value="">Cash</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.inputbox}>
                        <textarea
                            id="note"
                            name="note"
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            rows={2}
                            required
                        />
                        <label htmlFor="note">Note</label>
                    </div>
                    <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="number" required />
                            <label htmlFor="subTotal">Subtotal</label>
                        </div>

                        <div className={classes.inputbox}>
                            <input id="dueAmount" name="dueAmount" type="number" required />
                            <label htmlFor="paidAmount">Due amount</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="paidAmount" name="paidAmount" type="number" required />
                            <label htmlFor="paidAmount">
                                Paid amount <span>*</span>
                            </label>
                        </div>
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

                    <button className={classes.button}>Submit</button>
                </form>
            </div>
        </div>
    )
}
