import React from 'react'
import styles from '../style/Navbar.module.css';
import cx from 'classnames'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function Navbar() {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleToggle = () => {
       setIsOpen(prevState => !prevState)  
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <Link to='/'>
                        <img src={logo} alt='book finder'/>
                    </Link>
                    <button
                        type='button'
                        className={styles.navBtn}
                        onClick={handleToggle}
                        >
                    <FaAlignRight className={styles.navIcon}/>   
                    </button>
                </div>
                <ul className={isOpen ? cx(styles.showNav, styles.navLinks) : styles.navLinks}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
