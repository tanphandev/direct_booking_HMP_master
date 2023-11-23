import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import * as questionAction from './questionAction';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { toast } from 'react-toastify';
import { SEND_QUESTIONS } from '../common/constants';
import { sendQuestionFailed, sendQuestionSuccess } from './questionSlice';

// function* sendQuestion({ payload }: any): Generator {
//   const { bid, client_info, datecreated,question } = payload;
//   yield put(enableLoading(SEND_QUESTIONS));
//   try {
//     const data: any = yield call(ApiCaller.post, API.send_questions, {
//       bid,
//       client_info,
//       datecreated,
//       question
//     });
//     yield put(sendQuestionSuccess(data));
//   } catch (error: any) {
//     yield put(sendQuestionFailed(error));
//     toast.error(error?.response?.data[0]);
//   } finally {
//     yield put(disableLoading(SEND_QUESTIONS));
//   }
// }
function* sendQuestion({ payload }: any): Generator {
  const { bodyData } = payload;
  yield put(enableLoading(SEND_QUESTIONS));
  try {
    const data: any = yield call(ApiCaller.post, API.send_questions, payload);
    yield put(sendQuestionSuccess(data));
  } catch (error: any) {
    yield put(sendQuestionFailed(error));
    toast.error(error?.response?.data[0]);
  } finally {
    yield put(disableLoading(SEND_QUESTIONS));
  }
}


export default function* questionSaga() {
  yield all([
    takeLatest(questionAction.sendQuestion, sendQuestion),
  ]);
}
