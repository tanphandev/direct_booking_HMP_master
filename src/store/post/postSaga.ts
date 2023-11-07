import { all, call, put, takeLatest } from 'redux-saga/effects';

import ApiCaller from '@/api/ApiCaller';
import * as PostAction from './postAction';
import { getPostFailed, getPostSuccess } from './postSlice';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { ARTICLES, POST } from '../common/constants';

function* getPosts(): Generator {
  yield put(enableLoading(POST));
  try {
    const data: any = yield call(ApiCaller.get, '/posts');
    console.log('data', data);
    yield put(getPostSuccess(data));
  } catch (error) {
    yield put(getPostFailed(error));
  } finally {
    yield put(disableLoading(POST));
  }
}

export default function* postSaga() {
  yield all([takeLatest(PostAction.getPosts, getPosts)]);
}
