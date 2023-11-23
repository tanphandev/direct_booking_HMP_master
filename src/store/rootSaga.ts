import { all, fork } from 'redux-saga/effects';
import businessSaga from './business/businessSaga';
import bookingSaga from './booking/bookingSaga';
import roomSaga from './room/roomSaga';
import CommonPagesSaga from './commonPages/commonPagesSaga';
import questionSaga from './question/questionSaga';

export default function* rootSaga() {
  yield all([fork(businessSaga), fork(bookingSaga),fork(roomSaga),fork(CommonPagesSaga),fork(questionSaga)]);
}
