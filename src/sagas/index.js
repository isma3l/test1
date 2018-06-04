import { all } from 'redux-saga/effects';
import rootLoginSaga from './login';

export default function* rootSaga() {
  yield all([
    rootLoginSaga()
  ]);
};
