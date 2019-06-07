import {
  call,
  put,
} from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import {
  USER_AUTHENTICATED,
  USER_AUTHENTICATING_ERROR,
} from './types';

const authenticate = async (email, password) => (
  await Auth.signIn(email, password)
);


function* loginWorker(payload) {
  try {
    const {email, password } = payload.data;

    yield call(authenticate, email, password);

    yield put({
      type: USER_AUTHENTICATED,
    });

  } catch (e) {
    yield put({
      type: USER_AUTHENTICATING_ERROR,
      payload: e.message,
    });
  }
}

export default loginWorker;
