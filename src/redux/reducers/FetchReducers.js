import { FETCH_BOOKS, FETCH_SINGLE_BOOK, LOADING } from '../actions/actionTypes'

const initialState = {
    books: [],
    loading: false,
    book: []
};

export default function FetchReducers (state = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false,
            };
        case FETCH_SINGLE_BOOK:
            return {
                ...state,
                book: action.payload,
                loading: false,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };    
        default: 
            return state;
    }
}