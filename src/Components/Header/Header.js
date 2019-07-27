import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import "../../Support/Styles/header.css";
import { connect } from "react-redux";
import swal from "sweetalert";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = async () => {
    localStorage.clear();
    await swal({
      title: `Logout Success`,
      icon: "success"
    }).then(function() {
      window.location = "/";
    });
  };

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "black" }} dark expand="md">
          <Link to="/">
            <NavbarBrand className="headers">Library</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{ color: "white" }} className="mt-2 mr-2">
                {localStorage.fullname ? localStorage.fullname : "Guest"}
              </NavItem>

              {localStorage.id_user ? (
                <Link to="/loan">
                  <NavItem>
                    <NavLink className="headers ml-2 mr-2">
                      <i class="fa fa-leanpub headers" aria-hidden="true" />
                    </NavLink>
                  </NavItem>
                </Link>
              ) : (
                ""
              )}
              <UncontrolledDropdown nav inNavbar>
                {localStorage.id_user ? (
                  <NavItem onClick={this.logout} style={{cursor:"pointer", color:"white"}} className="mt-2 mr-2 ml-2" >Log out</NavItem>
                ) : (
                  <DropdownToggle nav caret className="headers">
                    Sign In
                  </DropdownToggle>
                )}

                <DropdownMenu right>
                  <div>
                    <Link to="/login">
                      <DropdownItem>Login</DropdownItem>
                    </Link>
                    <Link to="/register">
                      <DropdownItem>Register</DropdownItem>
                    </Link>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.User
  };
};

export default connect(mapStateToProps)(Header);
