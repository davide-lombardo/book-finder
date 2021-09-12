import React from 'react'
import Loading from '../components/Loading'
import styles from '../style/SingleBook.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import defaultBcg from '../images/book-1.jfif'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleBook, setLoading } from '../redux/actions/bookActions'


const SingleBook = () => {

    const { book } = useSelector(state => ({...state.booksData}))
    const { loading } = useSelector(state => ({...state.booksData}))
    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading())
        dispatch(fetchSingleBook(id))
    }, [id, dispatch])
          
            return (
                <>
                   {
                    (loading) ? <Loading /> : 
                    <section className={styles.singleBook}>
                        <div className={styles.imgContainer}>
                            <img 
                                src={ book.imageLinks === undefined ? defaultBcg : book.imageLinks.thumbnail} 
                                alt=''
                            />
                        </div>
                        <div className={styles.singleBookInfo}>
                            <article className={styles.info}>
                                <h2>{book.title}</h2>
                                <h6>author: {book.authors}</h6>
                                <h6>publisher: {book.publisher}</h6> 
                                <h6>language: {book.language}</h6> 
                                <h6>pages: {book.pageCount}</h6> 
                            </article>
                            <article className={styles.desc}>
                              <p>{book.description}</p>
                            </article>
                            <Link to='/' className={styles.btnPrimary}>
                                Back Home
                            </Link>
                            <a
                            href={book.previewLink}
                            target='_blank'
                            rel="noreferrer"
                            className={styles.btnPrimary}
                            >
                             View on Google Books
                            </a>
                        </div>
                    </section>
                    } 
                </>
            )
        }
    
   

      export default SingleBook
