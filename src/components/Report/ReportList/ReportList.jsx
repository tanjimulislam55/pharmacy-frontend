import {
    faBalanceScale,
    faBook,
    faCartPlus,
    faEdit,
    faFileInvoice,
    faFileInvoiceDollar,
    faHandHoldingUsd,
    faPills,
    faReceipt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ReportList.module.css'

export default function ReportList() {
    return (
        <div className={classes.reportContainer}>
            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faFileInvoice} />
                <p>Invoice Report</p>
                <button>View</button>
            </div>

            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faCartPlus} />
                <p>Bill Report</p>
            </div>

            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faReceipt} />
                <p>Expense Report</p>
            </div>

            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faFileInvoiceDollar} />
                <p>Purchase Report</p>
            </div>

            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faPills} />
                <p>Inventory Report</p>
            </div>

            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faBalanceScale} />
                <p>Stock Report</p>
            </div>

            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faBook} />
                <p>Accounnt Report</p>
            </div>

            <div className={classes.item}>
                <FontAwesomeIcon className={classes.icon} icon={faHandHoldingUsd} />
                <p>Salary Report</p>
            </div>
        </div>
    )
}
