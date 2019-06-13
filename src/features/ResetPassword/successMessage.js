import React from 'react';
// import {} from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Glyphicon,
} from 'react-bootstrap';

const SuccessMessage = props => (
  <div className="success">
    <Glyphicon glyph="ok" />
    <p>Your password has been reset.</p>
    <p>
      <Link to="/login">
          Click here to login with your new credentials.
      </Link>
    </p>
  </div>
);
// SuccessMessage.propTypes = {};
export default SuccessMessage;
