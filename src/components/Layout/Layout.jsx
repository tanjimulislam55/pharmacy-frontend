import classes from './Layout.module.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

export default function Layout() {
    return (
        <div className={classes.layout}>
            <Sidebar />
            <div className={classes.container}>
                <Navbar />
            </div>
        </div>
    )
}
