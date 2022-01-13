import { useContext } from 'react'
import { SidebarContext } from '../../contexts/sidebarContext'
import classes from './Layout.module.css'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'

export default function Layout({ children }) {
    const { isOpenSidebar } = useContext(SidebarContext)
    return (
        <div className={!isOpenSidebar ? classes.layout : classes.layoutWhenSidebarIsHidden}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.container}>
                <Topbar />
                {children}
            </div>
        </div>
    )
}
