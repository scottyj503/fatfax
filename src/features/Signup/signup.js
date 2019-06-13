import React, { useState } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';
import SignupForm from './signupForm';
import ConfirmationForm from './confirmationForm';
import './signup.css';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  const validateForm = () => {
    return (
      email.length > 0
      && password.length > 0
      && password === confirmPassword
    );
  };

  const validateConfirmationForm = () => {
    return confirmationCode.length > 0;
  };

  const handleChange = (e) => {
    const changeState = {
      email: setEmail,
      password: setPassword,
      confirmPassword: setConfirmPassword,
      confirmationCode: setConfirmationCode,
    };
    changeState[e.target.id](e.target.value);
  };

  const userSignup = async (event) => {
    event.preventDefault();
    const { signUp } = props;
    const data = {
      email,
      password,
    };

    signUp(data);
  };

  const confirmationSubmit = async (event) => {
    event.preventDefault();
    const { confirmSignUp } = props;
    const data = {
      email,
      confirmationCode,
      password,
    };

    confirmSignUp(data);
  };

  const renderConfirmationForm = () => {
    const { isConfirmationInProgress } = props;
    return (
      <ConfirmationForm
        confirmationCode={confirmationCode}
        handleChange={handleChange}
        handleConfirmationSubmit={confirmationSubmit}
        isLoading={isConfirmationInProgress}
        validateConfirmationForm={validateConfirmationForm}
      />
    );
  };

  const renderForm = () => {
    const { isSignupInProgress } = props;
    return (
      <SignupForm
        confirmPassword={confirmPassword}
        email={email}
        handleChange={handleChange}
        handleSubmit={userSignup}
        isLoading={isSignupInProgress}
        password={password}
        validateForm={validateForm}
      />
    );
  };

  const genContent = () => {
    const { newUser } = props;
    return newUser === null ? renderForm() : renderConfirmationForm();
  };

  return (
    <div className="Signup">
      {genContent()}
    </div>
  );
}

export default Signup;
