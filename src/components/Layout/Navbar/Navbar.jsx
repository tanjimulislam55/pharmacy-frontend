import { faBars, faBell, faLayerGroup, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../../../contexts/sidebarContext'
import classes from './Navbar.module.css'

const Navbar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext)
    return (
        <div className={classes.nav}>
            <div className={classes.topNavbar}>
                <div className={classes.hamburger} onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                    <FontAwesomeIcon icon={faBars} title="Toggle" />
                </div>
                <div className={classes.navList}>
                    <Link to="#">
                        <FontAwesomeIcon icon={faBell} title="Notification" />
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faLayerGroup} title="Stock Info" />
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faUserCircle} title="Profile" />
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faSignOutAlt} title="Logout" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
