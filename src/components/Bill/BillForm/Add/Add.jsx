import React, { useState } from 'react'
import classes from './Add.module.css'

export default function Add({ array, setArray, id, setId }) {
    const [line, setLine] = useState({ quantity: 0, price: 0, cost: 0, target_id: 0 })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLine({ ...line, target_id: id })
        console.log(line)
        let newArray = [...array, line]
        setArray(newArray)
        let newId = id + 1
        setId(newId)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.tableContainer}>
                <table className={classes.tableMain}>
                    <tr className={classes.tableRow}>
                        <td>
                            <input type="number" onChange={(e) => setLine({ ...line, quantity: e.target.value })} />
                        </td>
                        <td>
                            <input type="number" onChange={(e) => setLine({ ...line, price: e.target.value })} />
                        </td>
                        <td>
                            <input type="number" onChange={(e) => setLine({ ...line, cost: e.target.value })} />
                        </td>

                        <button className={classes.button} type="submit">
                            Add More
                        </button>
                    </tr>
                </table>
            </div>
        </form>
    )
}
