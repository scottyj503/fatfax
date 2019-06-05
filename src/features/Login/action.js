import { USER_AUTHENTICATING } from './types';

function login(payload) {
  return ({
    type: USER_AUTHENTICATING,
    payload,
  });
}

export default login;
