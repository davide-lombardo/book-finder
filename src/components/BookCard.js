import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from '../style/BookCard.module.css'
import cx from 'classnames'


const BookCard = ({ 
    thumbnail,
    title,
    authors,
    key
}) => {
    return (
        <article>
            <div className={styles.imgContainer}>
                <img src={thumbnail} alt={title}/>
                <div className={styles.bookInfo}> 
                    <h6>{title}</h6>
                    <p>{authors?.join(", ")}</p> 
                    <Link to={`/${key}`} target='_blank' className={cx(styles.DetailsBtn, styles.btnPrimary)}>
                        Details
                    </Link>
                </div> 
            </div>      
        </article>
    )
}


BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnail: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default BookCard
