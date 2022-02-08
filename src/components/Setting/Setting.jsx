import React from 'react'
import classes from './Setting.module.css'

export default function Setting() {
    return (
        <div className={classes.main}>
            <div className={classes.grid}>
                <label htmlFor="">Name :</label>
                <input type="text" />
            </div>
            <div className={classes.grid}>
                <label htmlFor="">Phone :</label>
                <input type="text" />
            </div>
            <div className={classes.grid}>
                <label htmlFor="">Email :</label>
                <input type="text" />
            </div>
        </div>
    )
}
