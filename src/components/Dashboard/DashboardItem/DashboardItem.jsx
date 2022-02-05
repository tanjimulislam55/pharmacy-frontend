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

const DashboardItem = () => {
    return (
        <div className={classes.dashContainer}>
            <div className={classes.dashBox}>
                <div className={classes.itemNumber}>
                    10,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Sales</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    9,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Collection</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingMedical} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    1,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Due</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    5,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Today's Purchase</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div className={classes.itemNumber}>
                    2,50,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Sales</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    2,00,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Collection</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingMedical} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    50,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Due</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    1,50,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Monthly Purchase</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                </div>
            </div>

            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    10,000
                </div>
                <div className={classes.itemName}>Number of Medicine</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faCapsules} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    5,00,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Stock Value</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faCubes} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    50,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Expired Stock Value</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    500
                </div>
                <div className={classes.itemName}>Expired Stock Quantity</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
        </div>
    )
}

export default DashboardItem
