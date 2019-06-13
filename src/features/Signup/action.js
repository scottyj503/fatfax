import {
  USER_SIGNUP,
  USER_CONFIRMATION,
} from './types';


export function signUp(data) {
  return ({
    type: USER_SIGNUP,
    data,
  });
}

export function confirmSignUp(data) {
  return({
    type: USER_CONFIRMATION,
    data,
  });
}
