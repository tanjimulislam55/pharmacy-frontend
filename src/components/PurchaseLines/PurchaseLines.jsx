import { useEffect, useState } from 'react'
import classes from './PurchaseLines.module.css'

export default function PurchaseLines({ purchaseLine, i, total, setTotal }) {
    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/medicines`)
            const data = await response.json()
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [])

    const handleBlur = (e) => {
        console.log(e)
        if (purchaseLine.purchased_qty && purchaseLine.purchase_price) {
            // total = total
            total = purchaseLine.purchased_qty * purchaseLine.purchase_price
            setTotal((total) => (total[i] = total))
        }
    }

    return (
        <div className={classes.formWrapper}>
            <div key={i}>
                {/* <label htmlFor="categories">Select Medicine</label> */}
                <div className={classes.selectBox}>
                    <select
                        className={classes.option}
                        onChange={(e) => (purchaseLine.medicine_id = e.target.value)}
                        id="medicines">
                        <option value="">Select Medicine</option>
                        {medicines &&
                            medicines.map((medicine, i) => (
                                <option key={i} value={medicine.id}>
                                    {medicine.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div className={classes.inputbox}>
                    <input
                        id="purchasePrice"
                        name="purchasePrice"
                        type="number"
                        value={purchaseLine.purchase_price}
                        onChange={(e) => (purchaseLine.purchase_price = e.target.value)}
                        onBlur={(e) => handleBlur(e)}
                        required
                    />
                    <label htmlFor="purchasePrice">Purchase Price</label>
                </div>

                <div className={classes.inputbox}>
                    <input
                        id="purchaseQuantiy"
                        name="purchaseQuantiy"
                        type="number"
                        value={purchaseLine.purchased_qty}
                        onChange={(e) => (purchaseLine.purchased_qty = e.target.value)}
                        onBlur={handleBlur}
                        required
                    />
                    <label htmlFor="purchasedQuantiy">Purchased quantity</label>
                </div>
                <div className={classes.inputbox}>
                    <input
                        id="receivedQuantity"
                        name="receivedQuantity"
                        type="number"
                        value={purchaseLine.received_qty}
                        onChange={(e) => (purchaseLine.received_qty = e.target.value)}
                        required
                    />
                    <label htmlFor="receivedQuantity">Received Quantity</label>
                </div>
                <div>Total: {total}</div>
            </div>
        </div>
    )
}
