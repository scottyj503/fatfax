import { connect } from 'react-redux';
import { userIsAuthenticated } from '../Login/selector';
import FeatureNav from './featureNav';
import { userLogout, getCurrentUserSession } from '../Login/action';

export default connect(store => ({
  userIsAuthenticated: userIsAuthenticated(store),
}), {
  getSession: getCurrentUserSession,
  userLogout,
})(FeatureNav);
