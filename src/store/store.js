import { createStore, combineReducers } from 'redux';
import reducer from '../redusers/index';

const store = createStore(combineReducers(reducer), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
