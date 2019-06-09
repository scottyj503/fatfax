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

function* watcherSaga() {
  yield takeLatest(USER_AUTHENTICATING, loginWorker);
  yield takeLatest(USER_LOGOUT, logoutWorker);
  yield takeLatest(USER_CURRENT_SESSION, getCurrentSessionWorker);
}

export default watcherSaga;
