import { combineReducers } from 'redux';

// import all reducers
import Book from './Book';
import Borrow from './Borrow';

const appReducer = combineReducers({
  Book,
  Borrow
});

export default appReducer;