import React, { Component } from "react";
import "../../Support/Styles/register.css";
import { connect } from "react-redux";
import { registerUser } from "../../Publics/Actions/user";
import swal from 'sweetalert'

class Register extends Component {
  register = async () => {
    let data = {
      email: this.state.email,
      fullname: this.state.fullname,
      password: this.state.password,
      ktp : this.state.ktp
    }
    console.log(data)
    await this.props.dispatch(registerUser(data))
    swal({
      title: 'Register Success, please Login first',
      icon: 'success'
    })
    this.props.history.push("/login");
    console.log(this.state.userList);
    
  }

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
              <span className="login100-form-title p-b-41 mb-4">
                Create Account
              </span>
              <form className="login100-form validate-form p-b-33 p-t-5">
                <div
                  className="wrap-input100 validate-input"
                >
                  <input
                    className="input100"
                    type="text"
                    name="Email"
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <span className="focus-input100" data-placeholder="📧" />
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    onChange={e => this.setState({ fullname: e.target.value })}
                  />
                  <span className="focus-input100" data-placeholder="🙈" />
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="ktp"
                    placeholder="ID Card"
                    onChange={e => this.setState({ ktp: e.target.value })}
                  />
                  <span className="focus-input100" data-placeholder="💳" />
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <span className="focus-input100" data-placeholder="🔑" />
                </div>
                <div className="row justify-content-center mt-3 baru">
                  <input
                    type="button"
                    style={{ width: "100px" }}
                    className="btn btn-outline-danger rounded-pill"
                    onClick={this.register}
                    value="Register"
                  />
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

const mapStateToProps = state => {
  return {
    userList: state.userList
  };
};
export default connect(mapStateToProps)(Register);
