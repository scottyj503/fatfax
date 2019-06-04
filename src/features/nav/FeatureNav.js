import React from 'react';
// import {} from 'prop-types';
import { Link } from 'react-router-dom';
import  { Navbar } from 'react-bootstrap';
import './FeatureNav.css';

const FeatureNav = (props) => {
  return (
    <div className="Nav container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">fatfax</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </div>
  );
};

//Nav.propTypes = {};

export default FeatureNav;
