import {
    faBriefcaseMedical,
    faChartLine,
    faClipboard,
    faCog,
    faDatabase,
    faHandHoldingUsd,
    faLayerGroup,
    faShoppingBag,
    faTachometerAlt,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarContext } from '../../../contexts/sidebarContext'
import classes from './Sidebar.module.css'

export default function Sidebar() {
    const { isOpenSidebar } = useContext(SidebarContext)
    const location = useLocation()

    const sideBarItems = [
        {
            text: 'Dashboard',
            endpoint: '',
            icon: <FontAwesomeIcon icon={faTachometerAlt} title="Dashboard" />,
        },
        {
            text: 'Medicine',
            endpoint: 'medicine',
            icon: <FontAwesomeIcon icon={faBriefcaseMedical} title="Medicine" />,
        },
        {
            text: 'Bill',
            endpoint: 'bill',
            icon: <FontAwesomeIcon icon={faHandHoldingUsd} title="Bill" />,
        },
        {
            text: 'Stock',
            endpoint: 'stock',
            icon: <FontAwesomeIcon icon={faLayerGroup} title="Stock" />,
        },
        {
            text: 'Purchase',
            endpoint: 'purchase',
            icon: <FontAwesomeIcon icon={faShoppingBag} title="Purchase" />,
        },
        {
            text: 'Grn',
            endpoint: 'grn',
            icon: <FontAwesomeIcon icon={faClipboard} title="Purchase" />,
        },
        {
            text: 'Manufacturer',
            endpoint: 'manufacturer',
            icon: <FontAwesomeIcon icon={faDatabase} title="Manufacturer" />,
        },
        {
            text: 'Report',
            endpoint: 'reports',
            icon: <FontAwesomeIcon icon={faChartLine} title="Report" />,
        },
        {
            text: 'Accounts',
            endpoint: 'accounts',
            icon: <FontAwesomeIcon icon={faUserShield} title="Accounts" />,
        },
        {
            text: 'Settings',
            endpoint: 'settings',
            icon: <FontAwesomeIcon icon={faCog} title="Settings" />,
        },
    ]

    return (
        <div>
            <div className={!isOpenSidebar ? classes.sidebar : classes.sidebarHide}>
                <div className={classes.logo}>
                    <Link to="/">
                        <h2>{!isOpenSidebar ? 'E-Pharmacy' : 'EP'}</h2>
                    </Link>
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
