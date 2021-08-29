import { FETCH_BOOKS, FETCH_SINGLE_BOOK, LOADING } from './actionTypes';
import axios from 'axios'

export const fetchBooks = (query) => (dispatch) => {
     axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response =>
                dispatch({
                    type: FETCH_BOOKS,
                    payload: response.data.items,
                })
            ) 
            .catch(err => console.log(err))  
}

export const fetchSingleBook = (id) => (dispatch) => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response =>
            dispatch({
                type: FETCH_SINGLE_BOOK,
                payload: response.data.volumeInfo
            })
        )
        .catch(err => console.log(err));
};


export const setLoading = () => {
    return {
        type: LOADING,
    }      
}

