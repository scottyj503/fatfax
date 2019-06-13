import React, { useEffect } from 'react';
// import {} from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './featureNav.css';

const FeatureNav = (props) => {
  useEffect(() => {
    const { getSession } = props;
    getSession();
  });

  useEffect(() => {
    const { history, userIsAuthenticated } = props;
    if (userIsAuthenticated) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [props.userIsAuthenticated]);

  const logout = () => {
    const { userLogout } = props;
    userLogout();
  };

  const genNavigation = () => {
    const { userIsAuthenticated } = props;

    return userIsAuthenticated
      ? <NavItem onClick={logout}>Logout</NavItem>
      : (
        <React.Fragment>
          <LinkContainer to="/signup">
            <NavItem>Signup</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        </React.Fragment>
      );
  };

  const genNavBar = () => (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">fatfax</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {genNavigation()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
  return genNavBar();
};


// Nav.propTypes = {};

export default FeatureNav;
