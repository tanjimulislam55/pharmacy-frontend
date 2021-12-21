import { useEffect, useState } from 'react'
import classes from '../../App.module.css'
import Layout from '../Layout/Layout'

export default function Vendor() {
    const [vendors, setVendors] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/vendors`)
            const data = await response.json()
            setVendors(data)
        }
        return fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            name,
            email,
            mobile,
        }
        fetch(`${process.env.REACT_APP_API_URL}/add_vendor`, {
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
                    <h2>Add New Vendor</h2>
                    <input
                        placeholder="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="mobile"
                        name="mobile"
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className={classes.content}>
                {vendors &&
                    vendors.map((vendor) => (
                        <div className={classes.item} key={vendor.id}>
                            <h4>{vendor.name}</h4>
                            <p>{vendor.email}</p>
                            <p>{vendor.mobile}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}
