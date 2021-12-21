import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../../../contexts/sidebarContext'
import classes from './Sidebar.module.css'

export default function Sidebar() {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext)
    console.log(isOpenSidebar)
    const sideBarItems = [
        {
            text: 'Add Vendor',
            endpoint: 'add_vendor',
        },
        {
            text: 'Add Type',
            endpoint: 'add_type',
        },
        {
            text: 'Add Unit',
            endpoint: 'add_unit',
        },
        {
            text: 'Add Category',
            endpoint: 'add_category',
        },
        {
            text: 'Add Medicine',
            endpoint: 'add_medicine',
        },
        {
            text: 'Add Purchase',
            endpoint: 'add_purchase',
        },
        {
            text: 'Add Customer',
            endpoint: 'add_customer',
        },
        {
            text: 'Add Bill',
            endpoint: 'add_bill',
        },
    ]

    return (
        <div className={!isOpenSidebar ? classes.sidebar : classes.sidebar_hide}>
            <header>Manage Inventory</header>
            <button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>toggle</button>
            <ul>
                {sideBarItems.map((item, i) => (
                    <Link key={i} to={`/${item.endpoint}`}>
                        <li>
                            <i>{item.text}</i>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
