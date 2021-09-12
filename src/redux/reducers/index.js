import { combineReducers } from 'redux';
import FetchReducers from './FetchReducers';


const allReducers = combineReducers({
   booksData: FetchReducers
})

export default allReducers
