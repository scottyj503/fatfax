import React from 'react';
// import {} from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';

const SignupForm = (props) => {
  const {
    confirmPassword,
    email,
    handleChange,
    handleSubmit,
    isLoading,
    password,
    validateForm,
  } = props;
  return (
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
      <FormGroup controlId="confirmPassword" bsSize="large">
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl
          value={confirmPassword}
          onChange={handleChange}
          type="password"
        />
      </FormGroup>
      <LoaderButton
        block
        bsSize="large"
        disabled={!validateForm()}
        type="submit"
        isLoading={isLoading}
        text="Signup"
        loadingText="Signing up…"
      />
    </form>
  );
};
// SignupForm.propTypes = {};
export default SignupForm;
