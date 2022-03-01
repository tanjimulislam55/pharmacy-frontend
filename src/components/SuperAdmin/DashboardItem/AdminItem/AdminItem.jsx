import {
    faCapsules,
    faHandHoldingMedical,
    faHospitalUser,
    faLaptopMedical,
    faUserAltSlash,
    faUserCog,
    faUserPlus,
    faUserSecret,
    faUserShield,
    faUserTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './AdminItem.module.css'

export default function AdminItem() {
    return (
        <div className={classes.itemContainer}>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Total Medicines</div>
                <div className={classes.itemNumber}>0</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faCapsules} />
                </div>
            </div>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Total Pharmacies</div>
                <div className={classes.itemNumber}>2</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faHospitalUser} />
                </div>
            </div>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Waiting Pharmacies</div>
                <div className={classes.itemNumber}>5</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faUserAltSlash} />
                </div>
            </div>
            <div className={classes.itemBox}>
                <div className={classes.itemName}>Moderators</div>
                <div className={classes.itemNumber}>10</div>
                <div className={classes.itemIcon}>
                    <FontAwesomeIcon icon={faUserShield} />
                </div>
            </div>
        </div>
    )
}
