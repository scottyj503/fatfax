import {
  USER_SIGNUP,
  USER_SIGNUP_FULFILLED,
  USER_SIGNUP_ERROR,
  USER_CONFIRMATION,
  USER_CONFIRMATION_FULFILLED,
  USER_CONFIRMATION_ERROR,
} from './types';

const INITIAL_STATE = {
  isSignupInProgress: false,
  isSignupComplete: false,
  isConfirmationInProgress: false,
  isConfirmationComplete: false,
  newUser: null,
  error: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_SIGNUP:
    return { ...state, isSignupInProgress: true };
  case USER_SIGNUP_FULFILLED:
    return {
      ...state,
      isSignupInProgress: false,
      isSignupComplete: true,
      newUser: action.payload,
    };
  case USER_SIGNUP_ERROR:
    return {
      ...state,
      isSignupInProgress: false,
      isSignupComplete: false,
      newUser: null,
      error: action.payload
    };
  case USER_CONFIRMATION:
    return {
      ...state,
      isConfirmationInProgress: true,
    };
  case USER_CONFIRMATION_FULFILLED:
    return {
      ...state,
      isConfirmationInProgress: false,
      isConfirmationComplete: true,
    };
  case USER_CONFIRMATION_ERROR:
    return {
      ...state,
      isConfirmationInProgress: false,
      isConfirmationComplete: false,
      error: action.payload,
    };

  default:
    return state;
  }
}

export default reducer;
