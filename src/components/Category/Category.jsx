import { useEffect, useState } from 'react'
import classes from '../../App.module.css'
import Sidebar from '../Sidebar/Sidebar'

export default function Category() {
    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`)
            const data = await response.json()
            setCategories(data)
        }
        return fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            name,
        }
        fetch(`${process.env.REACT_APP_API_URL}/add_category`, {
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
                    <h2>Add Category Type</h2>
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
                {categories &&
                    categories.map((category) => (
                        <div className={classes.item} key={category.id}>
                            <h4>{category.name}</h4>
                        </div>
                    ))}
            </div>
        </>
    )
}
