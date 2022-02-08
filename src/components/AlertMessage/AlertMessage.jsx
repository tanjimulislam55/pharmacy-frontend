import React from 'react'
import FlashMessage from 'react-flash-message'
import classes from './AlertMessage.module.css'

export default function AlertMessage({ data }) {
    return (
        <FlashMessage duration={3000} persistOnHover={false}>
            <div className={classes.text}>
                <p>{data.text}</p>
                <p>{data.text2}</p>
            </div>
        </FlashMessage>
    )
}
