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
              <NavItem style={{ color: "white" }} className="mt-2">
                guest
              </NavItem>
              <div className="vl mt-2 ml-2 mr-2" />
              <Link to="/loan">
                <NavItem>
                  <NavLink className="headers">
                    <i class="fa fa-leanpub headers" aria-hidden="true" />
                  </NavLink>
                </NavItem>
              </Link>
              <div className="vl mt-2 ml-2 mr-2" />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="headers">
                  Sign in
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/login">
                    <DropdownItem>Login</DropdownItem>
                  </Link>
                  <Link to="/register">
                    <DropdownItem>Register</DropdownItem>
                  </Link>
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
