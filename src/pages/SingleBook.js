import { useEffect } from 'react'
import defaultBcg from '../images/book-1.jfif'
import Loading from '../components/Loading'

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from '../redux/indexAC'
import { bindActionCreators } from 'redux'


const SingleBook = () => {

    const { book } = useSelector(state => state)
    const dispatch = useDispatch()

    const { fetchSingleBook, setLoading } = bindActionCreators(ActionCreators, dispatch)

    useEffect(() => {
        fetchSingleBook(this.props.match.params.id)
        setLoading()
    }, [])
       
    
        const {loading, book} = this.props
        
            return (
                <>
                    { loading ? <Loading/> :
                    <section className='singleBook'>
                        <div className='imgContainer'>
                            <img 
                            src={ book.imageLinks === undefined ? defaultBcg : book.imageLinks.thumbnail} 
                            alt=''/>
                        </div>
                        <div className='singleBookInfo'>
                            <article>
                                <h2>{book.title}</h2>
                            </article>
                            <article>
                                <h6>{book.authors}</h6>
                                <h6>{book.pageCount}</h6>
                                <h6>{book.publisher}</h6>
                                <p>{book.description}</p>
                            </article>
                            <Link to='/' className='btn-primary'>
                                Back Home
                            </Link>
                            <a
                            href={book.previewLink}
                            target='_blank'
                            rel="noreferrer"
                            className='btn-primary'
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
