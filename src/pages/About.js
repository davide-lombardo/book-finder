import React from 'react'
import styles from '../style/About.module.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutDesc}>
            <h4>created by <a href='https://github.com/davide-lombardo' target='_blank' rel="noreferrer">Davide Lombardo</a>, using <a href='https://developers.google.com/books/docs/overview' target='_blank' rel="noreferrer">Google Books</a> API </h4> 
            </div>
            <Link to='/' className={styles.btnPrimary}>
                   back home 
            </Link>
        </div>
    )
}

export default About
