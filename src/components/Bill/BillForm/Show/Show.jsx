import React from 'react'
import classes from './Show.module.css'

export default function Show({ array, setArray }) {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const updateChange = (updateId, newObj) => {
        let arrPos
        if (array.length !== 0) {
            array.forEach((elm, index) => {
                if (elm.target_id === updateId) {
                    arrPos = index
                }
            })
        }
        // let targetObj = array[arrPos]
        let newA = newObj
        let a = array
        a[arrPos] = newA
        console.log(newA)
        setArray(a)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={classes.tableContainer}>
                    <table className={classes.tableMain}>
                        {array &&
                            array.map((item, index) => (
                                <tr key={item.id} className={classes.tableRow}>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder={item.quantity}
                                            onChange={(e) =>
                                                updateChange(item.target_id, { ...item, quantity: e.target.value })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder={item.price}
                                            onChange={(e) =>
                                                updateChange(item.target_id, { ...item, price: e.target.value })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder={item.cost}
                                            onChange={(e) =>
                                                updateChange(item.target_id, { ...item, cost: e.target.value })
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                    </table>
                </div>
            </form>
        </div>
    )
}
