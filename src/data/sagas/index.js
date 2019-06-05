import { takeEvery, takeLatest } from 'redux-saga/effects';

import { USER_AUTHENTICATING } from '../../features/Login/types';
import loginWorker from '../../features/Login/saga';

function* watcherSaga() {
  yield takeLatest(USER_AUTHENTICATING, loginWorker);
}

export default watcherSaga;
