import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home/Home";
import BookDetail from "./Screens/BookDetail/BookDetail";
import Loan from "./Screens/LoanPage/Loan";
import Login from "./Screens/SignIn/Login";
import Register from "./Screens/SignIn/Register";
import Axios from "axios";

function App() {
  Axios.defaults.headers.common["authorization"] = "welcometoapp";
  // axios.defaults.headers.common["x-access-token"] = tokenya;
  // axios.defaults.headers.common["x-control-user"] = iduser;
  return (
    <div>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/bookDetail/:id" component={BookDetail} exact />
      <Route path="/loan" component={Loan} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
    </div>
  );
}

export default App;
