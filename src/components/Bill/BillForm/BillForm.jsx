import { useEffect, useState } from 'react'
import BillLines from '../../BillLines/BillLines'
import classes from './BillForm.module.css'

export default function BillForm() {
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')
    const [totalAmountPerMedicine, setTotalAmountPerMedicine] = useState()
    const [subTotal, setSubTotal] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()

    const [total, setTotal] = useState([])

    const [billLines, setBillLines] = useState([{}])

    const click = () => {
        console.log(billLines)
        console.log(total)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        click()
        const details = {
            bill_in: {
                total_amount: subTotal,
                paid_amount: paidAmount,
                due_amount: dueAmount,
                note,
                billing_date: date,
            },
            bill_line_in: billLines,
        }
        console.log(details)
        fetch(`${process.env.REACT_APP_API_URL}/add_bill`, {
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
                            <input
                                id="date"
                                name="date"
                                type="date"
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
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
                            <input
                                id="subTotal"
                                name="subTotal"
                                type="number"
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
                                onChange={(e) => setPaidAmount(e.target.value)}
                                required
                            />
                            <label htmlFor="paidAmount">
                                Paid amount <span>*</span>
                            </label>
                        </div>
                    </div>
                    <div className={classes.tableContainer}>
                        <table className={classes.tableMain}>
                            <tr className={classes.tableRow}>
                                <th>Select Medicines</th>
                                <th>
                                    Price <span>*</span>
                                </th>
                                <th>
                                    Quantity <span>*</span>
                                </th>
                            </tr>
                        </table>
                    </div>
                    {billLines.map((billLine, i) => (
                        <BillLines
                            billLine={billLine}
                            key={i}
                            i={i}
                            total={total}
                            setTotal={setTotal}
                            totalAmountPerMedicine={totalAmountPerMedicine}
                        />
                    ))}
                    <button
                        onClick={() => setBillLines((prev) => prev.concat({}))}
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
