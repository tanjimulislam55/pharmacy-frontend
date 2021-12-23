import { SidebarProvider } from '../../contexts/sidebarContext'
import classes from './Layout.module.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <div className={classes.layout}>
                <Sidebar />
                <div className={classes.container}>
                    <Navbar />
                    {children}
                </div>
            </div>
        </SidebarProvider>
    )
}
