import { USER_AUTHENTICATING } from './types';

function userLogin(data) {
  return ({
    type: USER_AUTHENTICATING,
    data,
  });
}

export default userLogin;
