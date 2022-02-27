import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import BillLines from '../BillLines/BillLines'
import classes from './BillForm.module.css'

// import Show from './Show/Show'
// import Add from './Add/Add'

const getDatafromLS = () => {
    const data = localStorage.getItem('pages')
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

export default function BillForm() {
    const [array, setArray] = useState()
    const [id, setId] = useState(1)
    const [user, setUser] = useState()
    const [note, setNote] = useState('')
    const [customer, setCustomer] = useState('Walking Customer')
    const [mobile, setMobile] = useState(`01XXX-XXXXXX`)
    const [address, setAddress] = useState('Dhaka')

    const [totalAmountPerMedicine, setTotalAmountPerMedicine] = useState()
    const [discount, setDiscount] = useState()
    const [total, setTotal] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()
    const [billLines, setBillLines] = useState([{}])

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    const [pages, setPages] = useState(getDatafromLS())
    const [openButton, setOpenButton] = useState(false)

    // const navigate = useNavigate()

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const details = {
            invoice_order_in: {
                comment: note,
                total_amount: total,
                discount: discount,
                vat: 0,
                paid_amount: paidAmount,
                due_amount: dueAmount,
                // customer_id: 1,
                user_id: user.id,
                customer,
                mobile,
                address,
            },
            invoice_order_line_in: billLines,
        }

        // fetch(`${process.env.REACT_APP_API_URL}/invoices/new`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${token}`,
        //     },
        //     body: JSON.stringify(details),
        // })
        setPages([...pages, details])
    }

    // saving data
    useEffect(() => {
        localStorage.setItem('pages', JSON.stringify(pages))
    }, [pages])

    const result = billLines.reduce((amount, currentValue) => (amount = amount + currentValue.total), 0)
    // console.log('res', result)

    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <p>Add Invoice</p>

                {/* <div className={classes.tableContainer}>
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
                </div> */}

                <form className={classes.item} onSubmit={handleSubmit}>
                    <div className={classes.gridThree}>
                        <div className={classes.inputbox}>
                            <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                            <label>Customer Name:</label>
                        </div>

                        <div className={classes.inputbox}>
                            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            <label>Customer Mobile:</label>
                        </div>

                        <div className={classes.inputbox}>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <label>Customer Address:</label>
                        </div>
                    </div>
                    <div className={classes.tableContainer}>
                        <table className={classes.tableMain}>
                            <thead>
                                <tr className={classes.tableRow}>
                                    <th>
                                        Medicines <span>*</span>
                                    </th>
                                    <th>
                                        Quantity <span>*</span>
                                    </th>
                                    <th>
                                        Unit Price <span>*</span>
                                    </th>
                                    <th>MRP (tk)</th>
                                    <th>Discount</th>
                                    <th>Total Cost</th>
                                </tr>
                            </thead>
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
                            placeholder="Note if any"
                        />
                    </div>
                    <div className={classes.gridSix}>
                        <div className={classes.inputbox}>
                            <input id="mrp" name="mrp" type="number" required min={0} value={result} />
                            <label htmlFor="subTotal">MRP</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input id="subTotal" name="subTotal" type="number" required min={0} value={result} />
                            <label htmlFor="subTotal">Subtotal</label>
                        </div>

                        <div className={classes.inputbox}>
                            <input
                                id="discount"
                                name="discount"
                                type="number"
                                onChange={(e) => setDiscount(parseInt(e.target.value))}
                                required
                                min={0}
                            />
                            <label htmlFor="subTotal">Discount</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                id="total"
                                name="total"
                                type="number"
                                onChange={(e) => setTotal(parseInt(e.target.value))}
                                required
                                min={0}
                            />
                            <label htmlFor="totalPrice">Total Price</label>
                        </div>

                        <div className={classes.inputbox}>
                            <input
                                id="paidAmount"
                                name="paidAmount"
                                type="number"
                                onChange={(e) => setPaidAmount(parseInt(e.target.value))}
                                required
                                min={0}
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
                                onChange={(e) => setDueAmount(parseInt(e.target.value))}
                                required
                                min={0}
                            />
                            <label htmlFor="paidAmount">Due amount</label>
                        </div>
                    </div>
                    <button type="submit" className={classes.button} onClick={() => setOpenButton(true)}>
                        Submit
                    </button>
                </form>
                {openButton && (
                    <Link to="/pdf" className={classes.btnPaid}>
                        Print
                    </Link>
                )}
            </div>
        </div>
    )
}
