import { connect } from 'react-redux';
import {
  isCodeSent,
  isSendingCode,
  isConfirmed,
  isConfirming,
  error,
} from './selector';
import {
  sendCode,
  sendConfirmation,
} from './action';
import ResetPassword from './resetPassword';

export default connect(store => ({
  isCodeSent: isCodeSent(store),
  isSendingCode: isSendingCode(store),
  isConfirmed: isConfirmed(store),
  isConfirming: isConfirming(store),
  error: error(store),
}), {
  sendCode,
  sendConfirmation,
})(ResetPassword);
