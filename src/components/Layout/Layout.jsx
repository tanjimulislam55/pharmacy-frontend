import { useContext } from 'react'
import { SidebarContext } from '../../contexts/sidebarContext'
import classes from './Layout.module.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({ children }) {
    const { isOpenSidebar } = useContext(SidebarContext)
    return (
        <div className={!isOpenSidebar ? classes.layout : classes.layoutWhenSidebarIsHidden}>
            <Sidebar />
            <div className={classes.container}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
