import { useEffect, useState } from 'react'
import { Sidebar } from '.'
import classes from '../App.module.css'

export default function Type() {
    const [name, setName] = useState('')
    const [types, setTypes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/types`)
            const data = await response.json()
            setTypes(data)
        }
        return fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            name,
        }
        fetch(`${process.env.REACT_APP_API_URL}/add_type`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
    }

    return (
        <>
            <Sidebar />
            <div className={classes.content}>
                <form className={classes.item} onSubmit={handleSubmit}>
                    <h2>Add Medicine Type</h2>
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
                {types &&
                    types.map((type) => (
                        <div className={classes.item} key={type.id}>
                            <h4>{type.name}</h4>
                        </div>
                    ))}
            </div>
        </>
    )
}
