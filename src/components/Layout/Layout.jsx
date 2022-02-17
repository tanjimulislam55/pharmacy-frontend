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
import { SidebarContext } from '../../contexts/sidebarContext'
import classes from './Layout.module.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({ children }) {
    const { isOpenSidebar } = useContext(SidebarContext)
    return (
        <div className={!isOpenSidebar ? classes.layout : classes.layoutWhenSidebarIsHidden}>
            <div>
                <Sidebar
                    barItems={[
                        {
                            text: 'Dashboard',
                            endpoint: 'dashboard',
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
                    ]}
                />
            </div>
            <div className={classes.container}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
