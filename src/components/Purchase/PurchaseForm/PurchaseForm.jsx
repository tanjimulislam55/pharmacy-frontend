import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PurchaseLines from '../PurchaseLines/PurchaseLines'
import classes from './PurchaseForm.module.css'

export default function PurchaseForm() {
    const [user, setUser] = useState()
    const [note, setNote] = useState('')
    const [totalAmountPerMedicine, setTotalAmountPerMedicine] = useState()
    const [totalAmount, setTotalAmount] = useState()
    const [paidAmount, setPaidAmount] = useState()
    const [dueAmount, setDueAmount] = useState()
    const [total, setTotal] = useState([])
    const [manufacturers, setManufacturers] = useState([])
    const [manufacturerId, setManufacturerId] = useState()

    const [purchaseLines, setPurchaseLines] = useState([{}])

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

    // const handleBlur = (e) =>{
    //     if (totalAmount && paidAmount) {
    //         let due = totalAmount - pai
    //     }
    // }

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
                total_amount: totalAmount,
                paid_amount: paidAmount,
                due_amount: dueAmount,
                note: note,
                user_id: user.id,
                manufacturer_id: manufacturerId,
            },
            purchase_order_line_in: purchaseLines,
        }
        fetch(`${process.env.REACT_APP_API_URL}/purchases/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        navigate('/purchase')
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
                    {purchaseLines.map((purchaseLine, idx) => (
                        <PurchaseLines
                            purchaseLine={purchaseLine}
                            key={idx}
                            lineIndex={idx}
                            total={total}
                            setTotal={setTotal}
                            totalAmountPerMedicine={totalAmountPerMedicine}
                            // manufacturerId={manufacturerId}
                            // setManufacturerId={setManufacturerId}
                        />
                    ))}
                    <button
                        onClick={() => setPurchaseLines((prev) => prev.concat({}))}
                        type="button"
                        className={classes.btn}>
                        Add More Item
                    </button>

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
                        {/* <label htmlFor="note">Note</label> */}
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
                            {/* <label htmlFor="paidAmount">Total Price</label> */}
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
                            {/* <label htmlFor="paidAmount">
                                Paid amount <span>*</span>
                            </label> */}
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
                            {/* <label htmlFor="dueAmount">Due amount</label> */}
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
