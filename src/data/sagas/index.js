import { takeEvery, takeLatest } from 'redux-saga/effects';

import {
  USER_AUTHENTICATING,
  USER_LOGOUT,
  USER_CURRENT_SESSION,
} from '../../features/Login/types';
import loginWorker, {
  logoutWorker,
  getCurrentSessionWorker,
} from '../../features/Login/saga';
import {
  SEND_CODE,
  SEND_CONFIRMATION,
} from '../../features/ResetPassword/types';
import {
  sendCodeWorker,
  sendConfirmationWorker,
} from '../../features/ResetPassword/saga';
import {
  USER_SIGNUP,
  USER_CONFIRMATION,
} from '../../features/Signup/types';
import {
  signUpWorker,
  confirmSignUpWorker,
} from '../../features/Signup/saga';

function* watcherSaga() {
  yield takeLatest(USER_AUTHENTICATING, loginWorker);
  yield takeLatest(USER_LOGOUT, logoutWorker);
  yield takeLatest(USER_CURRENT_SESSION, getCurrentSessionWorker);
  yield takeLatest(SEND_CODE, sendCodeWorker);
  yield takeLatest(SEND_CONFIRMATION, sendConfirmationWorker);
  yield takeLatest(USER_SIGNUP, signUpWorker);
  yield takeLatest(USER_CONFIRMATION, confirmSignUpWorker);
}

export default watcherSaga;
