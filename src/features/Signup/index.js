import { connect } from 'react-redux';
import {
  isSignupInProgress,
  isSignupComplete,
  isConfirmationInProgress,
  isConfirmationComplete,
  newUser,
  error,
} from './selector';
import {
  signUp,
  confirmSignUp,
} from './action';
import Signup from './signup';

export default connect(store => ({
  isSignupInProgress: isSignupInProgress(store),
  isSignupComplete: isSignupComplete(store),
  isConfirmationInProgress: isConfirmationInProgress(store),
  isConfirmationComplete: isConfirmationComplete(store),
  newUser: newUser(store),
  error: error(store),
}), {
  signUp: signUp,
  confirmSignUp: confirmSignUp,
})(Signup);
