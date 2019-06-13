import {
  call,
  put
} from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import {
  USER_SIGNUP_FULFILLED,
  USER_SIGNUP_ERROR,
  USER_CONFIRMATION_FULFILLED,
  USER_CONFIRMATION_ERROR,
} from './types';
import { USER_AUTHENTICATING } from '../Login/types';

const confirmSignUp = async (email, confirmationCode) => (
  await Auth.confirmSignUp(email, confirmationCode)
);

const signUp = async (email, password) => (
  await Auth.signUp({
    username: email,
    password,
  })
);

function* login(email, password) {
  const data = {
    email,
    password,
  };
  yield put({
    type: USER_AUTHENTICATING,
    data,
  });
};

export function* signUpWorker(payload) {
  try {
    const { email, password } = payload.data;
    const newUser = yield call(signUp, email, password);

    yield put({
      type: USER_SIGNUP_FULFILLED,
      payload: newUser,
    });
  }
  catch (e) {
    yield put({
      type: USER_SIGNUP_ERROR,
      payload: e.message,
    });
  }
}

export function* confirmSignUpWorker(payload) {
  try {
    const { email, confirmationCode, password } = payload.data;

    yield call(confirmSignUp, email, confirmationCode);

    yield call(login,email,password);

    yield put({
      type: USER_CONFIRMATION_FULFILLED,
    });

  }
  catch (e) {
    put({
      type: USER_CONFIRMATION_ERROR,
      payload: e.message,
    });
  }
}
