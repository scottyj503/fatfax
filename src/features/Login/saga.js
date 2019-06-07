import {
  call,
  put,
} from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import {
  USER_AUTHENTICATED,
  USER_AUTHENTICATING_ERROR,
} from './types';

function* loginWorker(payload) {
  try {
    const {email, password } = payload;
    debugger;

    yield call(Auth.signIn, email, password);
    debugger;

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
