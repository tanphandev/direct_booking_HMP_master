import { all, fork } from 'redux-saga/effects';
import businessSaga from './business/businessSaga';
import bookingSaga from './booking/bookingSaga';

export default function* rootSaga() {
  yield all([fork(businessSaga), fork(bookingSaga)]);
}
