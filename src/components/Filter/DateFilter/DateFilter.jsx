import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './DateFilter.module.css'

export default function DateFilter() {
    return (
        <form className={classes.dateFilter} action="">
            <label>Start:</label>
            <input type="date" />

            <label>End:</label>
            <input type="date" />

            <button className={classes.searchButton} type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}
