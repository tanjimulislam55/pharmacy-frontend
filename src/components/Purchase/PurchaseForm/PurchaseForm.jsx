import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PurchaseLines from '../PurchaseLines/PurchaseLines'
import classes from './PurchaseForm.module.css'

const getDatafromLS = () => {
    const data = localStorage.getItem('purchase')
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

export default function PurchaseForm() {
    const [user, setUser] = useState()
    const [note, setNote] = useState('')

    let [subTotal, setSubTotal] = useState(0.0)
    let [discount, setDiscount] = useState()
    let [totalAmount, setTotalAmount] = useState([])
    let [paidAmount, setPaidAmount] = useState()
    let [dueAmount, setDueAmount] = useState()
    const [manufacturers, setManufacturers] = useState([])
    const [manufacturerId, setManufacturerId] = useState()
    const [render, setRender] = useState()

    const [purchaseLines, setPurchaseLines] = useState([{}])
    const [purchasePdf, setPurchasePdf] = useState(getDatafromLS())
    const [openButton, setOpenButton] = useState(false)

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

    useEffect(() => {
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
        return fetchData()
    }, [token])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            purchase_order_in: {
                sub_total: subTotal,
                discount: discount,
                total_amount: totalAmount,
                paid_amount: paidAmount,
                due_amount: dueAmount,
                note: note,
                user_id: user.id,
                manufacturer_id: manufacturerId,
            },
            purchase_order_line_in: purchaseLines,
        }
        // fetch(`${process.env.REACT_APP_API_URL}/purchases/new`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${token}`,
        //     },
        //     body: JSON.stringify(details),
        // })
        setPurchasePdf([...purchasePdf, details])

        // navigate('/purchase')
    }

    useEffect(() => {
        localStorage.setItem('purchase', JSON.stringify(purchasePdf))
    }, [purchasePdf])

    purchaseLines.forEach((item) => (subTotal = subTotal + item.cost))

    const handleBlur = (e) => {
        totalAmount = subTotal
        totalAmount = totalAmount - totalAmount * (discount / 100)
        setRender((prev) => !prev)
        setTotalAmount(totalAmount)

        dueAmount = totalAmount - paidAmount
        setRender((prev) => !prev)
        setDueAmount(dueAmount)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <p>Purchase Order (PO)</p>

                <form className={classes.item} onSubmit={handleSubmit}>
                    <div className={classes.select}>
                        <select
                            className={classes.option}
                            onChange={(e) => setManufacturerId(parseInt(e.target.value))}
                            id="vendors">
                            <option value="">Select Manufacturer</option>
                            {manufacturers &&
                                manufacturers.map((manufacturer, i) => (
                                    <option key={i} value={manufacturer.id}>
                                        {manufacturer.name}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div className={classes.tableContainer}>
                        <table className={classes.tableMain}>
                            <tr className={classes.tableRow}>
                                <th>
                                    Medicine<span>*</span>
                                </th>
                                <th>Current Stock</th>
                                <th>Last 30days Sales</th>
                                <th>Suggested Quantity</th>
                                <th>
                                    Final Quantity<span>*</span>
                                </th>
                                <th>Depo Price</th>
                                <th>Total Price</th>
                            </tr>
                        </table>
                    </div>
                    {purchaseLines.map((billLine, i) => (
                        <PurchaseLines
                            purchaseLines={purchaseLines}
                            setPurchaseLines={setPurchaseLines}
                            key={i}
                            index={i}
                        />
                    ))}
                    <button
                        onClick={() => setPurchaseLines((prev) => prev.concat({}))}
                        type="button"
                        className={classes.btn}>
                        Add More Item
                    </button>
                    <br />

                    <div className={classes.inputbox}>
                        <textarea
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Note if any"
                            rows={2}
                        />
                        {/* <label htmlFor="note">Note</label> */}
                    </div>
                    <div className={classes.gridFive}>
                        <div className={classes.inputbox}>
                            <input
                                type="number"
                                value={subTotal}
                                onChange={(e) => setSubTotal(parseInt(e.target.value))}
                                placeholder="SubTotal"
                                required
                            />
                            {/* <label htmlFor="paidAmount">Total Price</label> */}
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                type="number"
                                value={discount}
                                onChange={(e) => setDiscount(parseInt(e.target.value))}
                                onBlur={(e) => handleBlur(e)}
                                placeholder="Discont (%)"
                                required
                            />
                            {/* <label htmlFor="paidAmount">Total Price</label> */}
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                type="number"
                                value={totalAmount}
                                onChange={(e) => setTotalAmount(parseInt(e.target.value))}
                                onBlur={(e) => handleBlur(e)}
                                placeholder="Total Amount"
                                required
                            />
                            {/* <label htmlFor="paidAmount">Total Price</label> */}
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                type="number"
                                value={paidAmount}
                                onChange={(e) => setPaidAmount(parseInt(e.target.value))}
                                onBlur={(e) => handleBlur(e)}
                                placeholder="Paid Amount"
                                required
                            />
                            {/* <label htmlFor="paidAmount">
                                Paid amount <span>*</span>
                            </label> */}
                        </div>
                        <div className={classes.inputbox}>
                            <input
                                type="number"
                                value={dueAmount}
                                onChange={(e) => setDueAmount(parseInt(e.target.value))}
                                onBlur={(e) => handleBlur(e)}
                                placeholder="Due Amount"
                            />
                            {/* <label htmlFor="dueAmount">Due amount</label> */}
                        </div>
                    </div>
                    <Link to="#" className={classes.btnPaid}>
                        Full Paid
                    </Link>
                    <button type="submit" className={classes.button} onClick={() => setOpenButton(true)}>
                        Submit
                    </button>
                </form>
                {openButton && (
                    <Link to="/purchase_pdf" className={classes.btnPdf}>
                        Print
                    </Link>
                )}
            </div>
        </div>
    )
}
