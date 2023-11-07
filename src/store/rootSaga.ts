import { all, fork } from 'redux-saga/effects';
import postSaga from './post/postSaga';

export default function* rootSaga() {
  yield all([fork(postSaga)]);
}
