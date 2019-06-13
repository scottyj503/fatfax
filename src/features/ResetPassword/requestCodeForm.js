import React from 'react';
// import {} from 'prop-types';
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';

const RequestCodeForm = (props) => {
  const validateCodeForm = () => email.length > 0;

  const {
    email,
    handleChange,
    handleSendCodeClick,
    isSendingCode,
    // validateCodeForm,

  } = props;

  return (
    <form onSubmit={handleSendCodeClick}>
      <FormGroup bsSize="large" controlId="email">
        <ControlLabel>Email</ControlLabel>
        <FormControl
          autoFocus
          type="email"
          value={email}
          onChange={handleChange}
        />
      </FormGroup>
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        loadingText="Sending…"
        text="Send Confirmation"
        isLoading={isSendingCode}
        disabled={!validateCodeForm()}
      />
    </form>
  );
};

// RequestCodeForm.propTypes = {};
export default RequestCodeForm;
