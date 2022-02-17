import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BillLines from '../BillLines/BillLines'
import Add from './Add/Add'
import classes from './BillForm.module.css'
import Show from './Show/Show'

export default function BillForm() {
    const [array, setArray] = useState([])
    const [id, setId] = useState(1)

    const [user, setUser] = useState()
    // const [date, setDate] = useState('')
    const [note, setNote] = useState('')

    const [discount, setDiscount] = useState()
    const [vat, setVat] = useState()
    const [totalAmountPerMedicine, setTotalAmountPerMedicine] = useState()
    const [subTotal, setSubTotal] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()
    const [total, setTotal] = useState([])

    const [billLines, setBillLines] = useState([{}])
    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    const navigate = useNavigate()

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

    const click = () => {
        console.log(billLines)
        console.log(total)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        click()
        const details = {
            invoice_order_in: {
                total_amount: subTotal,
                paid_amount: paidAmount,
                due_amount: dueAmount,
                comment: note,
                discount: discount,
                vat: vat,
                customer_id: null,
                user_id: user.id,
                // billing_date: date,
            },
            invoice_order_line_in: billLines,
        }
        console.log('details')
        console.log(details)
        // fetch(`${process.env.REACT_APP_API_URL}/invoices/new`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${token}`,
        //     },
        //     body: JSON.stringify(details),
        // })
        // navigate('/bill')
    }
    console.log(array)
    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <p>Add Invoice</p>

                <div className={classes.tableContainer}>
                    <table className={classes.tableMain}>
                        <tr className={classes.tableRow}>
                            <th>
                                Select Medicines <span>*</span>
                            </th>
                            <th>
                                Quantity <span>*</span>
                            </th>
                            <th>
                                Unit Price <span>*</span>
                            </th>
                            <th>Discount</th>
                            <th>Total Cost</th>
                        </tr>
                    </table>
                </div>
                <Add id={id} setId={setId} array={array} setArray={setArray} />

                <br />
                <h5>Order List:</h5>
                <div className={classes.boxBorder}>
                    <Show array={array} setArray={setArray} />
                </div>

                <form className={classes.item} onSubmit={handleSubmit}>
                    {/* <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="text" required />
                            <label htmlFor="subTotal">
                                Customer Name <span>*</span>
                            </label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="text" required />
                            <label htmlFor="subTotal">
                                Customer Email <span>*</span>
                            </label>
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
                                <option value="">Cash</option>
                            </select>
                        </div>
                    </div> */}

                    <div className={classes.tableContainer}>
                        <table className={classes.tableMain}>
                            <tr className={classes.tableRow}>
                                <th>
                                    Select Medicines <span>*</span>
                                </th>
                                <th>
                                    Quantity <span>*</span>
                                </th>
                                <th>
                                    Unit Price <span>*</span>
                                </th>
                                <th>Discount</th>
                                <th>Total Cost</th>
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
                    <br />
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
                    <div className={classes.gridFour}>
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
                                id="discount"
                                name="discount"
                                type="number"
                                onChange={(e) => setDiscount(e.target.value)}
                                required
                            />
                            <label htmlFor="subTotal">Discount</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="discount" name="discount" type="number" required />
                            <label htmlFor="totalPrice">Total Price</label>
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
                    </div>

                    <button type="submit" className={classes.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
