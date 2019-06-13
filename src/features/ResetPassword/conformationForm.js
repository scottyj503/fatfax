import React from 'react';
// import {} from 'prop-types';
import {
  ControlLabel,
  FormGroup,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';

const ConformationForm = (props) => {
  const validateResetForm = () => {
    const {
      code,
      password,
      confirmPassword,
    } = props;

    return (
      code.length > 0
        && password.length > 0
        && password === confirmPassword
    );
  };

  const {
    code,
    confirmPassword,
    email,
    handleConfirmClick,
    handleChange,
    isConfirming,
    password,
    // validateResetForm,
  } = props;

  return (
    <form onSubmit={handleConfirmClick}>
      <FormGroup bsSize="large" controlId="code">
        <ControlLabel>Confirmation Code</ControlLabel>
        <FormControl
          autoFocus
          type="tel"
          value={code}
          onChange={handleChange}
        />
        <HelpBlock>
          Please check your email (
          {email}
) for the confirmation
          code.
        </HelpBlock>
      </FormGroup>
      <hr />
      <FormGroup bsSize="large" controlId="password">
        <ControlLabel>New Password</ControlLabel>
        <FormControl
          type="password"
          value={password}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup bsSize="large" controlId="confirmPassword">
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />
      </FormGroup>
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        text="Confirm"
        loadingText="Confirm…"
        isLoading={isConfirming}
        disabled={!validateResetForm()}
      />
    </form>
  );
};
// ConformationForm.propTypes = {};
export default ConformationForm;
