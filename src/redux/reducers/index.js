import { combineReducers } from 'redux';
import FetchReducer from './FetchReducer';


const allReducers = combineReducers({
   booksData: FetchReducer
})

export default allReducers
