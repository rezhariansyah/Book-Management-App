import { combineReducers } from 'redux';

// import all reducers
import Book from './Book';

const appReducer = combineReducers({
  Book
});

export default appReducer;