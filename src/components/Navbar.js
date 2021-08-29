import React from 'react'
import NavbarCss from '../style/Navbar.module.css';
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
        <nav className={NavbarCss.navbar}>
            <div className={NavbarCss.navCenter}>
                <div className={NavbarCss.navHeader}>
                    <Link to='/'>
                        <img src={logo} alt='book finder'/>
                    </Link>
                    <button
                        type='button'
                        className={NavbarCss.navBtn}
                        onClick={handleToggle}
                        >
                    <FaAlignRight className={NavbarCss.navIcon}/>   
                    </button>
                </div>
                <ul className={isOpen ? cx(NavbarCss.showNav, NavbarCss.navLinks) : NavbarCss.navLinks}>
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
