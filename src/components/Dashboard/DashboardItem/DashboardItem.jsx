import { faCapsules, faHandHoldingMedical, faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './DashboardItem.module.css'

const DashboardItem = () => {
    return (
        <div className={classes.dashContainer}>
            <div className={classes.dashBox}>
                <div className={classes.itemNumber}>10000</div>
                <div className={classes.itemName}>Medicines</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faCapsules} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    5000
                </div>
                <div className={classes.itemName}>Stock</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHandHoldingMedical} />
                </div>
            </div>
            <div className={classes.dashBox}>
                <div div className={classes.itemNumber}>
                    2000
                </div>
                <div className={classes.itemName}>Today's Sales</div>

                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                </div>
            </div>
        </div>
    )
}

export default DashboardItem
