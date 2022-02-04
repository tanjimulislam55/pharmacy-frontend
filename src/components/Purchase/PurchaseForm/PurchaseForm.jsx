import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PurchaseLines from '../../PurchaseLines/PurchaseLines'
import classes from './PurchaseForm.module.css'

export default function PurchaseForm() {
    const [user, setUser] = useState()
    const [note, setNote] = useState('')
    const [totalAmountPerMedicine, setTotalAmountPerMedicine] = useState()
    const [totalAmount, setTotalAmount] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()

    const [total, setTotal] = useState([])
    const history = useNavigate()

    const [purchaseLines, setPurchaseLines] = useState([{}])
    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setUser(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            purchase_in: {
                total_amount: totalAmount,
                paid_amount: paidAmount,
                due_amount: dueAmount,
                note,
                user_id: user.id,
            },
            purchase_line_in: purchaseLines,
        }
        let successPurchaseForm = fetch(`${process.env.REACT_APP_API_URL}/purchases/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
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
                    <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input
                                id="total"
                                name="Total"
                                type="number"
                                value={totalAmount}
                                onChange={(e) => setTotalAmount(e.target.value)}
                                required
                            />
                            <label htmlFor="totalAmount">
                                Subtotal <span>*</span>
                            </label>
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
                        <div className={classes.inputbox}>
                            <input
                                id="due"
                                name="Due"
                                type="number"
                                value={dueAmount}
                                onChange={(e) => setDueAmount(e.target.value)}
                                required
                            />
                            <label htmlFor="dueAmount">Due amount</label>
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
                                <th>
                                    Select Medicines<span>*</span>
                                </th>
                                <th>
                                    Quantity <span>*</span>
                                </th>
                                <th>
                                    Bying Price <span>*</span>
                                </th>
                                <th>
                                    Selling Price <span>*</span>
                                </th>
                                <th>Expiry Date</th>
                                <th>Cost</th>
                            </tr>
                        </table>
                    </div>
                    {purchaseLines.map((purchaseLine, idx) => (
                        <PurchaseLines
                            purchaseLine={purchaseLine}
                            key={idx}
                            lineIndex={idx}
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
