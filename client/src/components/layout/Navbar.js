import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

onLogoutClick = e => {
  e.preventDefault();
  this.props.logoutUser();
};

render() {
  const { user } = this.props.auth;
  const { isAuthenticated } = this.props.auth;
  return (
    
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">PC Review</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/blog">Blog</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact" onClick={this.onLogoutClick}>Contact</MDBNavLink>
            </MDBNavItem>           
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              {!isAuthenticated && <MDBNavLink to="/login">Login</MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {!isAuthenticated && <MDBNavLink to="/register">Register</MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {isAuthenticated && <MDBNavLink to="/"><MDBIcon icon="user" />  Hey there, {user.name}</MDBNavLink>}              
              </MDBNavItem>
            <MDBNavItem>
              {isAuthenticated && <MDBNavLink to="/logout" onClick={this.onLogoutClick}>Logout</MDBNavLink>}
            </MDBNavItem>                    
            
          </MDBNavbarNav>
        </MDBCollapse>
        
      </MDBNavbar>
    
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
