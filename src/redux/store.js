import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    )

export default store
