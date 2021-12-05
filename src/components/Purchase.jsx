import { useEffect, useState } from 'react'
import { Sidebar, PurchaseLines } from '.'
import classes from '../App.module.css'


const purchaseLineObj = {
  "purchase_price": 0,
  "medicine_id": 0,
  "purchased_qty": 0,
  "received_qty": 0
}


export default function Purchase() {

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
      "purchase_in": {
        "total_amount": subTotal,
        "paid_amount": paidAmount,
        "due_amount": dueAmount,
        note,
        "purchase_date": date
      },
      "purchase_line_in": purchaseLines
    }
    console.log(details)
    // fetch(`${process.env.REACT_APP_API_URL}/add_purchase`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(details)
    // })
  }


  return (
    <>
      <Sidebar />
      <div className={classes.content}>
        <form className={classes.item} onSubmit={handleSubmit}>
          <h2>Add New Purchase</h2>
          <label htmlFor="date">Billing date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
          <label htmlFor="note">Note</label>
          <input 
            id="note"
            placeholder="Place a note (Optional)"
            name="note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)} 
          />
          {purchaseLines.map((purchaseLine, i) => (
            <PurchaseLines 
            purchaseLine={purchaseLine} 
            key={i}
            i={i}
            total={total} setTotal={setTotal}
            totalAmountPerMedicine={totalAmountPerMedicine} 
            />
          ))}
          <button 
            onClick={() => setPurchaseLines((prev) => prev.concat({}))} 
            type="button"
          >
            Add more
          </button>
          <label htmlFor="subTotal">Subtotal</label>
          <input 
            id="subTotal"
            name="subTotal"
            type="number"
            value={subTotal}
          />
          <label htmlFor="paidAmount">Paid amount</label>
          <input 
            id="paidAmount"
            name="paidAmount"
            type="number"
            value={paidAmount}
            onChange={(e) => setPaidAmount(e.target.value)}
          />
          <label htmlFor="paidAmount">Due amount</label>
          <input 
            id="dueAmount"
            name="dueAmount"
            type="number"
            value={dueAmount}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}