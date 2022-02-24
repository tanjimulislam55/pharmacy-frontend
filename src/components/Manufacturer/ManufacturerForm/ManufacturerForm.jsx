import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ManufacturerForm.module.css'

export default function ManufacturerForm({ setOpenForm }) {
    const [name, setName] = useState('')

    const navigate = useNavigate()
    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            name: name,
        }
        let submit = fetch(`${process.env.REACT_APP_API_URL}/manufacturers/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        if (submit.ok) {
            navigate('/manufacturer')
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <h2>Add New Medicine</h2>
                <div className={classes.close} onClick={() => setOpenForm(false)}>
                    &times;
                </div>

                <form onSubmit={(e) => handleSubmit(e)} classNameName={classes.item}>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            name="name"
                            required
                        />
                        <label htmlFor="">Manufacturer Name</label>
                    </div>

                    <button type="submit" className={classes.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
