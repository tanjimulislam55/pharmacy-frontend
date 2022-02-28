import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Pdf } from './PurchasePdf'
import classes from './PurchasePrint.module.css'

export const PurchasePrint = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    function clearPage() {
        localStorage.removeItem('invoice')
    }

    return (
        <div className={classes.body}>
            <button onClick={handlePrint} className={classes.button}>
                Print this out!
            </button>
            <Pdf ref={componentRef} />
        </div>
    )
}
