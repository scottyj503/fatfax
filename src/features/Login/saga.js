import {
  call,
  put,
} from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import {
  USER_AUTHENTICATED,
  USER_AUTHENTICATING_ERROR,
  USER_LOGOUT_SUCCESS,
} from './types';

const authenticate = async (email, password) => (
  await Auth.signIn(email, password)
);

const currentSession = async () => (
  await Auth.currentSession()
);

const signOut = async () => (
  await Auth.signOut()
);

export function* getCurrentSessionWorker() {
  try {
    yield call(currentSession);

    yield put({
      type: USER_AUTHENTICATED,
    });
  } catch (e) {
    console.log('getCurrentSession Error: ', e);
  }
}

export function* logoutWorker() {
  try {
    yield call(signOut);

    yield put({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (e) {
    console.log('logoutWorker error: ', e);
  }
}

function* loginWorker(payload) {
  try {
    const { email, password } = payload.data;

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
