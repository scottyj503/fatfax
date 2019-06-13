import React, { useState } from 'react';
// import {} from 'prop-types';
import RequestCodeForm from './requestCodeForm';
import ConformationForm from './conformationForm';
import SuccessMessage from './successMessage';
import './resetPassword.css';

const ResetPassword = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    const changeState = {
      email: setEmail,
      password: setPassword,
      confirmPassword: setConfirmPassword,
      code: setCode,
    };

    changeState[e.target.id](e.target.value);
  };

  const handleSendCodeClick = (e) => {
    e.preventDefault();

    const { sendCode } = props;
    const data = { email };

    sendCode(data);
  };

  const handleConfirmClick = (e) => {
    e.preventDefault();

    const { sendConfirmation } = props;
    const data = {
      email,
      code,
      password,
    };

    sendConfirmation(data);
  };

  const renderRequestCodeForm = () => {
    const { isSendingCode } = props;

    return (
      <RequestCodeForm
        email={email}
        handleChange={handleChange}
        handleSendCodeClick={handleSendCodeClick}
        isSendingCode={isSendingCode}
      />
    );
  };

  const renderConfirmationForm = () => {
    const { isConfirming } = props;

    return (
      <ConformationForm
        code={code}
        confirmPassword={confirmPassword}
        email={email}
        handleConfirmClick={handleConfirmClick}
        handleChange={handleChange}
        isConfirming={isConfirming}
        password={password}
      />
    );
  };

  const genContent = () => {
    const {
      isCodeSent,
      isConfirmed,
    } = props;

    if (!isCodeSent) {
      return renderRequestCodeForm();
    }
    if (!isConfirmed) {
      return renderConfirmationForm();
    }
    return <SuccessMessage />;
  };

  return <div className="ResetPassword">{genContent()}</div>;
};

// ResetPassword.propTypes = {};
export default ResetPassword;
