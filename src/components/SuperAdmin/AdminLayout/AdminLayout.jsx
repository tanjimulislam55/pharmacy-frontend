import {
    faBriefcaseMedical,
    faChartLine,
    faClipboard,
    faCog,
    faDatabase,
    faHandHoldingUsd,
    faHospitalUser,
    faLayerGroup,
    faShoppingBag,
    faTachometerAlt,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { SidebarContext } from '../../../contexts/sidebarContext'
import classes from './AdminLayout.module.css'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import AdminSidebar from './AdminSidebar/AdminSidebar'

export default function AdminLayout({ children }) {
    const { isOpenSidebar } = useContext(SidebarContext)
    return (
        <div className={!isOpenSidebar ? classes.layout : classes.layoutWhenSidebarIsHidden}>
            <div>
                <AdminSidebar
                    barItems={[
                        {
                            text: 'Dashboard',
                            endpoint: 'super_admin',
                            icon: <FontAwesomeIcon icon={faTachometerAlt} title="Dashboard" />,
                        },
                        {
                            text: 'Pharmacies',
                            endpoint: 'super_pharmacies',
                            icon: <FontAwesomeIcon icon={faHospitalUser} title="Pharmacies" />,
                        },
                        {
                            text: 'Medicines',
                            endpoint: 'super_medicine',
                            icon: <FontAwesomeIcon icon={faBriefcaseMedical} title="Medicines" />,
                        },
                        {
                            text: 'Manufacturers',
                            endpoint: 'super_manufacturer',
                            icon: <FontAwesomeIcon icon={faDatabase} title="Manufacturers" />,
                        },
                        {
                            text: 'Settings',
                            endpoint: 'super_settings',
                            icon: <FontAwesomeIcon icon={faCog} title="Settings" />,
                        },
                    ]}
                />
            </div>
            <div className={classes.container}>
                <AdminNavbar />
                {children}
            </div>
        </div>
    )
}
