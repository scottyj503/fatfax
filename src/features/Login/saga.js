import {
  call,
  put,
} from 'redux-saga/effects';
import {
  USER_AUTHENTICATED,
  USER_AUTHENTICATING_ERROR,
} from './types';

function* loginWorker() {
  try {} catch (e) {
    yield put({
      type: USER_AUTHENTICATING_ERROR,
      payload: e,
    });
  }
}

export default loginWorker;
