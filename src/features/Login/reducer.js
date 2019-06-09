import {
  USER_AUTHENTICATING,
  USER_AUTHENTICATED,
  USER_AUTHENTICATING_ERROR,
  USER_LOGOUT_SUCCESS,
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
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        error: '',
      };
    default:
      return state;
  }
}
export default reducer;
