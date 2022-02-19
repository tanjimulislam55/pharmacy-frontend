import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Pdf } from './Pdf'
import classes from './Print.module.css'

export const Print = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className={classes.body}>
            <button onClick={handlePrint} className={classes.button}>
                Print this out!
            </button>
            <Pdf ref={componentRef} />
        </div>
    )
}
