import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './MedicineForm.module.css'

export default function MedicineForm({
    setIsOpenForm,
    name,
    setName,
    vendors,
    types,
    units,
    categories,
    setVendorId,
    setTypeId,
    setUnitId,
    setCategorieId,
}) {
    return (
        <div className={classes.formWrapper}>
            <h2>Add New Medicine</h2>
            <div className={classes.close} onClick={() => setIsOpenForm(false)}>
                &times;
            </div>

            <form classNameName={classes.item}>
                <div className={classes.inputbox}>
                    <input type="text" name="" required="" />
                    <label htmlFor="medicines">Medicine Name</label>
                </div>

                <div className={classes.selectBox}>
                    {/* <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}
                    {/* <label htmlFor="types">Select Type</label> */}
                    <select className={classes.option} onChange={(e) => setTypeId(e.target.value)} id="types">
                        <option value="">Select Type</option>
                        {types.map((type, i) => (
                            <option key={i} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={classes.selectBox}>
                    {/* <label htmlFor="categories">Select Category</label> */}
                    <select className={classes.option} onChange={(e) => setCategorieId(e.target.value)} id="categories">
                        <option value="">Select Category</option>
                        {categories.map((category, i) => (
                            <option key={i} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={classes.selectBox}>
                    {/* <label htmlFor="units">Select Unit</label> */}
                    <select className={classes.option} onChange={(e) => setUnitId(e.target.value)} id="units">
                        <option value="">Select Unit</option>
                        {units.map((unit, i) => (
                            <option key={i} value={unit.id}>
                                {unit.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={classes.selectBox}>
                    {/* <label htmlFor="vendors">Select Vendor</label> */}
                    <select className={classes.option} onChange={(e) => setVendorId(e.target.value)} id="vendors">
                        <option value="">Select Vendor</option>
                        {vendors.map((vendor, i) => (
                            <option key={i} value={vendor.id}>
                                {vendor.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button className={classes.button}>Submit</button>
            </form>
        </div>
    )
}
