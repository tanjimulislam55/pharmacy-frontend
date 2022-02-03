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
                    1,000
                </div>
                <div className={classes.itemName}>Today's Stock</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingMedical} />
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
                <div div className={classes.itemNumber}>
                    30,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Total Sale</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    10,000
                </div>
                <div className={classes.itemName}>Total Medicine</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faCapsules} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    20,000
                </div>
                <div className={classes.itemName}>Total Stock</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faCubes} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    50,000 <span>৳</span>
                </div>
                <div className={classes.itemName}>Stock Value</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    500
                </div>
                <div className={classes.itemName}>Expired Stock</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
            </div>
        </div>
    )
}

export default DashboardItem
