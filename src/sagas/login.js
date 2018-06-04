import { put, all, takeEvery, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESSFUL } from '../constansts'
import { loginService } from '../services';

export function* login() {
  const body = {password: '1222', email: '33@22.com'};
  yield call(loginService.login, body);

  yield put({type: LOGIN_REQUEST_SUCCESSFUL});
}

export default function* rootLoginSaga() {
  yield all([
    takeEvery(LOGIN_REQUEST, login)
  ])
}
