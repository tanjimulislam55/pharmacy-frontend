import { Link } from 'react-router-dom'
import classes from '../App.module.css'

export default function Sidebar() {

  const sideBarItems = [
    {
      text: 'Add Vendor',
      endpoint: 'add_vendor',
    },
    {
      text: 'Add Type',
      endpoint: 'add_type'
    },
    {
      text: 'Add Unit',
      endpoint: 'add_unit'
    },
    {
      text: 'Add Category',
      endpoint: 'add_category'
    },
    {
      text: 'Add Medicine',
      endpoint: 'add_medicine'
    }
  ]

  return (
    <div className={classes.sidebar}>
      <header>Manage Inventory</header>
      <ul>
        {
          sideBarItems.map((item, i) => (
            <Link key={i} to={`/${item.endpoint}`}>
              <li><i>{item.text}</i></li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}