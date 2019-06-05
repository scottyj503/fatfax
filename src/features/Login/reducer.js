import {
  USER_AUTHENTICATING,
  USER_AUTHENTICATED,
  USER_AUTHENTICATING_ERROR,
} from './types';


const INITIAL_STATE = {
  isAuthenticated: false,
  isAuthenticating: false,
  error: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_AUTHENTICATING:
      return { ...state, isAuthenticating: true };
    case USER_AUTHENTICATED:
      return { ...state, isAuthenticating: false, isAuthenticated: true };
    case USER_AUTHENTICATING_ERROR:
      return {
        ...state, isAuthenticating: false, isAuthenticated: false, error: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;
