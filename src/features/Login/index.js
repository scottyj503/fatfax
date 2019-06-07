import { connect } from 'react-redux';
import {
  userIsAuthenticated,
  userIsAuthenticating,
  userAuthenticationError,
} from './selector';
import userLogin from './action';
import Login from './login';

// export default Login;

export default connect(store => ({
  error: userAuthenticationError(store),
  authenticated: userIsAuthenticated(store),
  authenticating: userIsAuthenticating(store),
}), {
  login: userLogin,
})(Login);

// const mapStateToProps = (store) => ({
//   error: userAuthenticationError(store),
//   authenticated: userIsAuthenticated(store),
//   authenticating: userIsAuthenticating(store),
// });

// const mapDispatchToProps = (dispatch) => ({
//   login: userLogin,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
