import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faCalendar, faCubes, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LandingPage.module.css'
import Logo from './img/main.png'

export default function LandingPage() {
    return (
        <div className={classes.main}>
            <div className={classes.nav}>
                <div className={classes.topNavbar}>
                    <div className={classes.logo}>E-Pharmacy</div>
                    <div className={classes.navList}>
                        <Link to="#">Features</Link>
                        <Link to="#">Pricing</Link>
                        <Link to="#">Demo</Link>
                        <Link to="/login">Get Started</Link>
                    </div>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.bodyBox}>
                    <h2>Welcome to Smart Pharmacy Manager</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque, ipsum dolor quod quasi
                        distinctio omnis? Natus vero officia molestias.
                    </p>
                    <button className={classes.button}>Demo</button>
                    <Link to="">Watch Video</Link>
                </div>
                <div className={classes.bodyBox}>
                    <img className={classes.img} src={Logo} alt="" />
                </div>
            </div>
            <div className={classes.title}>Our Features</div>
            <div className={classes.margin}></div>
            <div className={classes.feature}>
                <div className={classes.featureBox}>
                    <FontAwesomeIcon className={classes.icon} icon={faLaptopCode} />
                    <p>User Friendly Dashboard</p>
                </div>

                <div className={classes.featureBox}>
                    <FontAwesomeIcon className={classes.icon} icon={faCubes} />
                    <p>Stock Management</p>
                </div>

                <div className={classes.featureBox}>
                    <FontAwesomeIcon className={classes.icon} icon={faAddressBook} />
                    <p>Easy Customizable</p>
                </div>

                <div className={classes.featureBox}>
                    <FontAwesomeIcon className={classes.icon} icon={faLaptopCode} />
                    <p>Buying & Selling Report</p>
                </div>
            </div>
            <div className={classes.footer}>
                <p>E-Pharmacy</p>
                <div className={classes.socialGroup}>
                    <Link to="#" class={classes.social}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link to="#" class={classes.social}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                    <Link to="#" class={classes.social}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                </div>
                <div className={classes.dev}>Product by HEALTHx Ventures</div>
            </div>
        </div>
    )
}
