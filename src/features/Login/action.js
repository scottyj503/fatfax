import { USER_AUTHENTICATING } from './types';

function userLogin(payload) {
  return ({
    type: USER_AUTHENTICATING,
    payload,
  });
}

export default userLogin;
