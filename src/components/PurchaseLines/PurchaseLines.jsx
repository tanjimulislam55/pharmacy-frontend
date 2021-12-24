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
        <div key={i} className={classes.purchase_lines}>
            <label htmlFor="categories">Select Medicine</label>
            <select onChange={(e) => (purchaseLine.medicine_id = e.target.value)} id="medicines">
                <option value="">select</option>
                {medicines &&
                    medicines.map((medicine, i) => (
                        <option key={i} value={medicine.id}>
                            {medicine.name}
                        </option>
                    ))}
            </select>
            <label htmlFor="purchasePrice">Purchase price</label>
            <input
                id="purchasePrice"
                name="purchasePrice"
                type="number"
                value={purchaseLine.purchase_price}
                onChange={(e) => (purchaseLine.purchase_price = e.target.value)}
                onBlur={(e) => handleBlur(e)}
            />
            <label htmlFor="purchasedQuantiy">Purchased quantity</label>
            <input
                id="purchaseQuantiy"
                name="purchaseQuantiy"
                type="number"
                value={purchaseLine.purchased_qty}
                onChange={(e) => (purchaseLine.purchased_qty = e.target.value)}
                onBlur={handleBlur}
            />
            <label htmlFor="receivedQuantity">Received quantity</label>
            <input
                id="receivedQuantity"
                name="receivedQuantity"
                type="number"
                value={purchaseLine.received_qty}
                onChange={(e) => (purchaseLine.received_qty = e.target.value)}
            />
            <div>Total: {total}</div>
        </div>
    )
}
