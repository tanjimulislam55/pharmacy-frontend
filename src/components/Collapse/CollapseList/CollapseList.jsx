import { useState, useEffect } from 'react'
import classes from './CollapseList.module.css'

export default function CollapseList({ billLines }) {
    const [medicines, setMedicines] = useState()

    const getName = (elements, id) => {
        const item = elements.find((element) => element.id === id)
        return item.name
    }
    console.log(billLines)
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
    return (
        <>
            <div className={classes.container}>
                <div className={classes.head}>Id</div>
                <div className={classes.head}>Medicine</div>
                <div className={classes.head}>Price</div>
                <div className={classes.head}>Quantity</div>
            </div>
            {billLines &&
                billLines.map((billLine) => (
                    <div key={billLine.id} className={classes.containerItem}>
                        <div className={classes.item}>{billLine.id}</div>
                        {medicines && <div className={classes.item}>{getName(medicines, billLine?.medicine_id)}</div>}
                        <div className={classes.item}>{billLine.price}</div>
                        <div className={classes.item}>{billLine.qty}</div>
                    </div>
                ))}
        </>
    )
}
