import classes from './Pagination.module.css'

export default function Pagination({ page, setStartIdx, setEndIdx }) {
    const handlePage = (value) => {
        setEndIdx(value * 10)
        setStartIdx(value * 10 - 10)
    }

    return (
        <div class={classes.pagination}>
            <div>&laquo;</div>
            {page &&
                Array(Math.ceil(page / 10))
                    .fill(0)
                    .map((x, i) => (
                        <div key={i} onClick={() => handlePage(i + 1)} className={classes.active}>
                            {i + 1}
                        </div>
                    ))}
            <div>&raquo;</div>
        </div>
    )
}
