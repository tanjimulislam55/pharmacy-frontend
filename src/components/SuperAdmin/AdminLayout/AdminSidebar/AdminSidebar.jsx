import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarContext } from '../../../../contexts/sidebarContext'
import Logo from '../Logo/logo.png'
import classes from './AdminSidebar.module.css'

export default function AdminSidebar({ barItems }) {
    const { isOpenSidebar } = useContext(SidebarContext)
    const location = useLocation()

    const sideBarItems = barItems

    return (
        <div>
            <div className={!isOpenSidebar ? classes.sidebar : classes.sidebarHide}>
                <div className={classes.logo}>
                    <Link to="/super_admin">{!isOpenSidebar ? <img src={Logo} alt="" /> : 'HX'}</Link>
                </div>
                <ul>
                    <li>
                        {sideBarItems.map((item, i) => (
                            <Link
                                key={i}
                                to={`/${item.endpoint}`}
                                className={location.pathname === '/' + item.endpoint ? classes.active : ''}>
                                <i className={classes.icon}>{item.icon}</i>
                                {!isOpenSidebar && <span className={classes.text}>{item.text}</span>}
                            </Link>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}
