import {
  USER_AUTHENTICATING,
  USER_LOGOUT,
  USER_CURRENT_SESSION,
} from './types';

function userLogin(data) {
  return ({
    type: USER_AUTHENTICATING,
    data,
  });
}

export function userLogout() {
  return ({ type: USER_LOGOUT });
}

export function getCurrentUserSession() {
  return ({ type: USER_CURRENT_SESSION });
}


export default userLogin;
