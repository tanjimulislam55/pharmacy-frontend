import { useEffect, useState } from 'react'
import classes from '../../App.module.css'
import Layout from '../Layout/Layout'

export default function Unit() {
    const [name, setName] = useState('')
    const [units, setUnits] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/units`)
            const data = await response.json()
            setUnits(data)
        }
        return fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            name,
        }
        fetch(`${process.env.REACT_APP_API_URL}/add_unit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
    }

    return (
        <>
            <Layout />
            <div className={classes.content}>
                <form className={classes.item} onSubmit={handleSubmit}>
                    <h2>Add Medicine Unit</h2>
                    <input
                        placeholder="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className={classes.content}>
                {units &&
                    units.map((unit) => (
                        <div className={classes.item} key={unit.id}>
                            <h4>{unit.name}</h4>
                        </div>
                    ))}
            </div>
        </>
    )
}
