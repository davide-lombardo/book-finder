import React from 'react'
import styles from '../style/Searchbar.module.css'
import { useState } from 'react'
import BookList from './Booklist'
import Loading from './Loading'

import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks, setLoading } from '../redux/actions/bookActions'

const Searchbar = () => {

    const { books } = useSelector(state => ({...state.booksData}))
    const { loading } = useSelector(state => ({...state.booksData}))
    
    const dispatch = useDispatch()

    const [ query, setQuery ] = useState('')
    const [ search, setSearch ] = useState('')


    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setQuery(search)
        dispatch(setLoading())
        dispatch(fetchBooks(query))  
        setSearch('')    
    }


    return (
    <>
        <section>
            <form 
            onSubmit={handleSubmit} 
            className={styles.SearchForm}
            >
                <input 
                type='text'
                placeholder='What are you looking for?'
                value={search} 
                className={styles.SearchBar}
                onChange={handleChange}
                />
                <button 
                type='submit' 
                className={styles.SearchBtn}>
                    Search
                </button>
            </form>
        </section>
           {
            (loading) ? <Loading /> : <BookList books={books} />
           }
    </>
    )
}


export default Searchbar
