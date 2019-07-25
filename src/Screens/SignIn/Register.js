import React, { Component } from "react";
import '../../Support/Styles/register.css';

class Register extends Component {
  render() {
    return (
      <div>
        <div className="limiter">
          <div
            className="container-login100"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1495741545814-2d7f4d75ea09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80")'
            }}
          >
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41 mb-4">Create Account</span>
              <form className="login100-form validate-form p-b-33 p-t-5">
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter username"
                >
                  <input
                    className="input100"
                    type="text"
                    name="Email"
                    placeholder="Email"
                  />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                >
                  <input
                    className="input100"
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                  />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                >
                  <input
                    className="input100"
                    type="text"
                    name="pass"
                    placeholder="Password"
                  />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div className="row justify-content-center mt-3 baru">
                  <input type="button" style={{width:"100px"}} className="btn btn-outline-danger rounded-pill" value="Register"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
    );
  }
}

export default Register;
