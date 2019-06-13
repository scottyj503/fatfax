import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';
// import {} 'prop-types';

const ConfirmationForm = (props) => {
  const {
    confirmationCode,
    handleChange,
    handleConfirmationSubmit,
    isLoading,
    validateConfirmationForm,
  } = props;
  return (
    <form onSubmit={handleConfirmationSubmit}>
      <FormGroup controlId="confirmationCode" bsSize="large">
        <ControlLabel>Confirmation Code</ControlLabel>
        <FormControl
          autoFocus
          type="tel"
          value={confirmationCode}
          onChange={handleChange}
        />
        <HelpBlock>Please check your email for the code.</HelpBlock>
      </FormGroup>
      <LoaderButton
        block
        bsSize="large"
        disabled={!validateConfirmationForm()}
        type="submit"
        isLoading={isLoading}
        text="Verify"
        loadingText="Verifying…"
      />
    </form>
  );
};
//ConfirmationForm.propTypes = {};
export default ConfirmationForm;
