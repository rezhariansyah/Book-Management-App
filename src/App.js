import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Screens/Home/Home';
import BookDetail from './Screens/BookDetail/BookDetail';
import Loan from './Screens/LoanPage/Loan';

function App() {
  return (
    <div>
      <Header/>
        <Route path='/' component={Home} exact/>
        <Route path='/bookDetail/:id' component={BookDetail} exact/>
        <Route path='/loan' component={Loan} exact/>
    </div>
  );
}

export default App;
