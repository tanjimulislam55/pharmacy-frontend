import { faBars, faBell, faLayerGroup, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../../../../contexts/allContex'
import { SidebarContext } from '../../../../contexts/sidebarContext'
import classes from './AdminNavbar.module.css'

const AdminNavbar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext)
    const { stateAuth, dispatchAuth } = useContext(Auth)

    return (
        <div className={classes.nav}>
            <div className={classes.topNavbar}>
                <div className={classes.hamburger} onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                    <FontAwesomeIcon icon={faBars} title="Toggle" />
                </div>
                <div className={classes.navList}>
                    <Link to="#">
                        <FontAwesomeIcon icon={faBell} title="Notifications" />
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faUserCircle} title="Profile" />
                    </Link>
                    <Link to="/" onClick={() => dispatchAuth({ type: 'remove' })}>
                        <FontAwesomeIcon icon={faSignOutAlt} title="Logout" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar
