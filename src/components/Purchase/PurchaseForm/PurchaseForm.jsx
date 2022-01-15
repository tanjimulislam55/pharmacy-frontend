import { useEffect, useState } from 'react'
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
        <>
            <div className={classes.wrapper}>
                <div className={classes.formWrapper}>
                    <h2>Add New Purchase</h2>

                    <form className={classes.item} onSubmit={handleSubmit}>
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
                            {/* <label htmlFor="date">Billing date</label> */}
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                id="note"
                                // placeholder="Place a note (Optional)"
                                name="note"
                                type="text"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                required
                            />
                            <label htmlFor="note">Note</label>
                        </div>

                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="number" value={subTotal} required />
                            <label htmlFor="subTotal">Subtotal</label>
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
                            <label htmlFor="paidAmount">Paid amount</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="dueAmount" name="dueAmount" type="number" value={dueAmount} required />
                            <label htmlFor="paidAmount">Due amount</label>
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
                        <button onClick={() => setPurchaseLines((prev) => prev.concat({}))} type="button">
                            Add more
                        </button>
                        <button className={classes.button}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
