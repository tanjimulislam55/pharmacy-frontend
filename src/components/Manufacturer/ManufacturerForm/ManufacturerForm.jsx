import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ManufacturerForm.module.css'

export default function ManufacturerForm({ setOpenForm }) {
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [generic, setGeneric] = useState('')
    const [headquarter, setHeadquater] = useState('')
    const [contact, setContact] = useState([])
    const [establish, setEstablish] = useState('')
    const [share, setShare] = useState('')
    const [growth, setGrowth] = useState('')

    const navigate = useNavigate()
    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            name: name,
            total_brands: brand,
            total_generics: generic,
            headquarter: headquarter,
            contact_list: null,
            established_in: establish,
            market_share: share,
            growth: growth,
        }
        fetch(`${process.env.REACT_APP_API_URL}/manufacturers/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        navigate('/manufacturer')
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
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setBrand(e.target.value)}
                            value={brand}
                            type="text"
                            name="brand"
                            required
                        />
                        <label htmlFor="">Total Brands</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setGeneric(e.target.value)}
                            value={generic}
                            type="text"
                            name="generic"
                            required
                        />
                        <label htmlFor="">Total Generics</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setHeadquater(e.target.value)}
                            value={headquarter}
                            type="text"
                            name="headquater"
                            required
                        />
                        <label htmlFor="">Headquater</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                            type="text"
                            name="contact"
                            required
                        />
                        <label htmlFor="">Contact</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setEstablish(e.target.value)}
                            value={establish}
                            type="text"
                            name="establish"
                            required
                        />
                        <label htmlFor="">Established</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setShare(e.target.value)}
                            value={share}
                            type="text"
                            name="share"
                            required
                        />
                        <label htmlFor="">Market Share</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setGrowth(e.target.value)}
                            value={growth}
                            type="text"
                            name="growth"
                            required
                        />
                        <label htmlFor="">Growth</label>
                    </div>

                    <button type="submit" className={classes.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
