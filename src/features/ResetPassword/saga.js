import {
  call,
  put,
} from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import {
  SEND_CODE,
  SEND_CODE_FULFILLED,
  SEND_CODE_ERROR,
  SEND_CONFIRMATION,
  SEND_CONFIRMATION_FULFILLED,
  SEND_CONFIRMATION_ERROR,
} from './types';

const forgotPassword = async email => (
  await Auth.forgotPassword(email)
);

const forgotPasswordSubmit = async (email, code, password) => (
  await Auth.forgotPasswordSubmit(email, code, password)
);

export function* sendCodeWorker(payload) {
  try {
    const { email } = payload.data;

    yield call(forgotPassword, email);

    yield put({
      type: SEND_CODE_FULFILLED,
    });
  } catch (e) {
    yield put({
      type: SEND_CODE_ERROR,
      payload: e.message,
    });
  }
}

export function* sendConfirmationWorker(payload) {
  try {
    const { email, code, password } = payload.data;

    yield call(forgotPasswordSubmit, email, code, password);

    yield put({
      type: SEND_CONFIRMATION_FULFILLED,
    });
  } catch (e) {
    yield put({
      type: SEND_CONFIRMATION_ERROR,
      payload: e.message,
    });
  }
}
