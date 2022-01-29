import {
    faCapsules,
    faHandHoldingMedical,
    faLaptopMedical,
    faUserCog,
    faUserSecret,
    faUserShield,
    faUserTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Item.module.css'

export default function Item() {
    return (
        <div className={classes.itemContainer}>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Owner</div>
                <div className={classes.itemNumber}>1</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faUserSecret} />
                </div>
            </div>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Manager</div>
                <div className={classes.itemNumber}>2</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faUserCog} />
                </div>
            </div>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Accountant</div>
                <div className={classes.itemNumber}>5</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faUserShield} />
                </div>
            </div>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Employee</div>
                <div className={classes.itemNumber}>10</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faUserTag} />
                </div>
            </div>
        </div>
    )
}
