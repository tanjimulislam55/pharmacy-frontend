import { Link } from 'react-router-dom'
import classes from './Pagination.module.css'

export default function Pagination() {
    return (
        <div class={classes.pagination}>
            <Link to="#">&laquo;</Link>
            <Link to="#" class={classes.active}>
                1
            </Link>
            <Link to="#">2</Link>
            <Link to="#">3</Link>
            <Link to="#">4</Link>
            <Link to="#">5</Link>
            <Link to="#">...</Link>
            <Link to="#">10</Link>
            <Link to="#">&raquo;</Link>
        </div>
    )
}
