import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/logo.png'
import classes from './Pdf.module.css'

export const Pdf = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={classes.body}>
            <div className={classes.page}>
                <header className={classes.clear}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={classes.company}>
                        <div className={classes.name}>HEALTHx Pharmacy</div>
                        <div>House 26, Road 2, Banani</div>
                        <div>(+88) 0123-456-789</div>
                        <div>
                            <Link to="#">healthx@example.com</Link>
                        </div>
                    </div>
                </header>

                <main>
                    <div className={`${classes.details} ${classes.clear}`}>
                        <div className={classes.client}>
                            <div className={classes.to}>INVOICE TO:</div>
                            <div className={classes.name}>Antor Pharma</div>
                            <div className={classes.address}>Bashundhara R/A, Dhaka</div>
                            <div className={classes.email}>
                                <Link to="#">antor@example.com</Link>
                            </div>
                        </div>
                        <div className={classes.invoice}>
                            <div className={classes.name}>INVOICE: hx-0001</div>
                            <div className={classes.date}>Date of Invoice: 19/02/2022</div>
                            <div className={classes.date}>Due Date: 19/03/2022</div>
                        </div>
                    </div>
                    <table className={classes.tableMain}>
                        <thead>
                            <tr>
                                <th className={classes.no}>Serial No.</th>
                                <th className={classes.desc}>Medicine Description</th>
                                <th className={classes.unit}>Unit Price</th>
                                <th className={classes.qty}>Quantity</th>
                                <th className={classes.total}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.no}>1</td>
                                <td className={classes.desc}>Napa Extra - 500mg</td>
                                <td className={classes.unit}>
                                    3 <span>tk</span>
                                </td>
                                <td className={classes.qty}>
                                    30 <span>pcs</span>
                                </td>
                                <td className={classes.total}>
                                    90 <span>tk</span>
                                </td>
                            </tr>
                            <tr>
                                <td className={classes.no}>2</td>
                                <td className={classes.desc}>Pericel - 20mg</td>
                                <td className={classes.unit}>
                                    6 <span>tk</span>
                                </td>
                                <td className={classes.qty}>
                                    20 <span>pcs</span>
                                </td>
                                <td className={classes.total}>
                                    120 <span>tk</span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"></td>
                                <td colspan="2">Subtotal:</td>
                                <td>
                                    210 <span>tk</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"></td>
                                <td colspan="2">Discount:</td>
                                <td>
                                    10 <span>tk</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"></td>
                                <td colspan="2">Grand Total:</td>
                                <td>
                                    200 <span>tk</span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <div className={classes.text}>Thank you!</div>
                    <div className={classes.notices}>
                        <div>Payment:</div>
                        <div className={classes.notice}>Cash on delivary</div>
                    </div>
                </main>
            </div>
        </div>
    )
})
