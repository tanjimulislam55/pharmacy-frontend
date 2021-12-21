import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navigation}>
            <div className={classes.navcontainer}>
                <div className={classes.logo}>
                    <Link to="#">Logo</Link>
                </div>
                <div className={classes.login}>
                    <Link to="#">Login</Link>
                </div>
                <nav>
                    <ul className={classes.navlist}>
                        <li>
                            <Link to="#">Home</Link>
                        </li>
                        <li>
                            <Link to="#">Services</Link>
                        </li>
                        <li>
                            <Link to="#">Pricing</Link>
                        </li>
                        <li>
                            <Link to="#">Contact</Link>
                        </li>
                        <li>
                            <Link to="#">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
