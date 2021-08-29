import React from 'react'

import styles from '../style/Searchbar.module.css'
import { useState } from 'react'
import BookList from './Booklist'

import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from '../redux/indexAC'
import { bindActionCreators } from 'redux'


const Searchbar = () => {

    const { books } = useSelector(state => state)
    const dispatch = useDispatch()

    const { fetchBooks, setLoading } = bindActionCreators(ActionCreators, dispatch)

    const [ query, setQuery ] = useState('')
    const [ search, setSearch ] = useState('')


    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setQuery(search)
        setSearch('') 
        setLoading()
        fetchBooks(query)
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
        <BookList books={books}/>
    </>
    )
}

export default Searchbar
