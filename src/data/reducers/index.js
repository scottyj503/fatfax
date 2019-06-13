import { combineReducers } from 'redux';
import user from '../../features/Login/reducer';
import resetPassword from '../../features/ResetPassword/reducer';
import userSignup from '../../features/Signup/reducer';

export default combineReducers({
  resetPassword,
  user,
  userSignup,
});
