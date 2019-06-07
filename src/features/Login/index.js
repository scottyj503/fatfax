import { connect } from 'react-redux';
import {
  userIsAuthenticated,
  userIsAuthenticating,
  userAuthenticationError,
} from './selector';
import userLogin from './action';
import Login from './login';

export default connect(store => ({
  error: userAuthenticationError(store),
  authenticated: userIsAuthenticated(store),
  authenticating: userIsAuthenticating(store),
}), {
  login: userLogin,
})(Login);
