import { all, fork } from 'redux-saga/effects';
import postSaga from './business/businessSaga';

export default function* rootSaga() {
  yield all([fork(postSaga)]);
}
