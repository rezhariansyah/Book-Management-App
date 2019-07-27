import { combineReducers } from 'redux';

// import all reducers
import Book from './Book';
import Borrow from './Borrow';
import User from './user';
import Login from './login';

const appReducer = combineReducers({
  Book,
  Borrow,
  User,
  Login
});

export default appReducer;