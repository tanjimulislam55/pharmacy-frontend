import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Pdf } from './InvoicePdf'
import classes from './InvoicePrint.module.css'

export const InvoicePrint = () => {
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
