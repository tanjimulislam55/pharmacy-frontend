import {
    faCapsules,
    faCube,
    faCubes,
    faDollarSign,
    faHandHoldingMedical,
    faHandHoldingUsd,
    faLaptopMedical,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './DashboardItem.module.css'

const DashboardItem = ({
    stockQuantity,
    stockValue,
    expiredInfo,
    invoiceInfo,
    invoiceInfoMonthly,
    purchaseInfo,
    purchaseInfoMonthly,
}) => {
    return (
        <div className={classes.dashContainer}>
            <div className={classes.dashBox}>
                <div className={classes.itemNumber}>
                    {invoiceInfo.sum_of_total_amount} <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Sales</div>
                <div className={classes.itemNumber}>
                    {invoiceInfoMonthly.sum_of_total_amount} <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Sales</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    {invoiceInfo.sum_of_paid_amount} <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Collection</div>
                <div div className={classes.itemNumber}>
                    {invoiceInfoMonthly.sum_of_paid_amount} <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Collection</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingMedical} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    {invoiceInfo.sum_of_due_amount} <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Due</div>
                <div div className={classes.itemNumber}>
                    {invoiceInfoMonthly.sum_of_due_amount} <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Due</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    0 <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Discount</div>
                <div div className={classes.itemNumber}>
                    0 <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Discount</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    {stockQuantity.value}
                </div>
                <div className={classes.itemName}>Number of Medicine</div>
                <div div className={classes.itemNumber}>
                    {stockValue.value} <span>৳</span>
                </div>
                <div className={classes.itemName}>Stock Value</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faCapsules} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    {purchaseInfo.sum_of_cost} <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Purchase</div>
                <div div className={classes.itemNumber}>
                    {purchaseInfoMonthly.sum_of_cost} <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Purchase</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    {expiredInfo.sum_of_quantity}
                </div>
                <div className={classes.itemName}>Expired Stock Quantity</div>
                <div div className={classes.itemNumber}>
                    {expiredInfo.sum_of_cost}
                    <span>৳</span>
                </div>
                <div className={classes.itemName}>Expired Stock Value</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
        </div>
    )
}
export default DashboardItem
