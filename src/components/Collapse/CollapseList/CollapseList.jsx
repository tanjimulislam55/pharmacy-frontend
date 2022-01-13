import classes from './CollapseList.module.css'

export default function CollapseList() {
    return (
        <>
            <div class={classes.container}>
                <div class={classes.head}>Name</div>
                <div class={classes.head}>Unit</div>
                <div class={classes.head}>Price</div>
                <div class={classes.head}>Qty</div>
            </div>
            <div class={classes.containerItem}>
                <div class={classes.item}>Napa</div>
                <div class={classes.item}>3</div>
                <div class={classes.item}>10</div>
                <div class={classes.item}>3</div>
            </div>
        </>
    )
}
