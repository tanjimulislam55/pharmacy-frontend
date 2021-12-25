import classes from './Layout.module.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { SidebarContext } from '../../contexts/sidebarContext'
import { useContext } from 'react'

export default function Layout({ children }) {
    const { isOpenSidebar } = useContext(SidebarContext)
    return (
        <div className={!isOpenSidebar ? classes.layout: classes.layoutWhenSidebarIsHidden}>
            <Sidebar />
            <div className={classes.container}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
