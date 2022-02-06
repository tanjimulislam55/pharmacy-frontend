import React, { useState } from 'react'
import classes from './Add.module.css'

export default function Add({ array, setArray, id, setId }) {
    const [line, setLine] = useState({ quantity: 0, price: 0, cost: 0, medicine_id: 0 })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLine({ ...line, medicine_id: id })
        console.log(line)
        let newArray = [...array, line]
        setArray(newArray)
        let newId = id + 1
        setId(newId)
    }

    return (
        <div className={classes.tableContainer}>
            <form onSubmit={handleSubmit}>
                <input name="quantity" type="number" onChange={(e) => setLine({ ...line, quantity: e.target.value })} />

                <input name="quantity" type="number" onChange={(e) => setLine({ ...line, price: e.target.value })} />

                <input name="quantity" type="number" onChange={(e) => setLine({ ...line, cost: e.target.value })} />

                <button className={classes.button} type="submit">
                    Add More
                </button>
            </form>
        </div>
    )
}
