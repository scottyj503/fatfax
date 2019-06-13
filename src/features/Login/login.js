import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import {
  Button, FormGroup, FormControl, ControlLabel,
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';
import './login.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleChange = (event) => {
    const changeState = {
      email: setEmail,
      password: setPassword,
    };
    changeState[event.target.id](event.target.value);
  };

  const handleSubmit = (e) => {
    const { login } = props;
    e.preventDefault();

    const data = {
      email,
      password,
    };

    login(data);
  };

  const {
    authenticating,
    error,
  } = props;

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={handleChange}
            type="password"
          />
        </FormGroup>
        <Link to="/login/reset">Forgot password?</Link>
        <LoaderButton
          block
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
          isLoading={authenticating}
          text="Login"
          loadingText="Authenticating.."
        >
          Login
        </LoaderButton>
      </form>
    </div>
  );
};

export default Login;
