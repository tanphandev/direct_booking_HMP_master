import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { COMMON_PAGES } from '../common/constants';
import { getCommonPageFailed, getCommonPageSuccess } from './commonPagesSlice';
import * as commonPagesAction from './commonPagesAction';

function* getCommonPages( {payload} : any): Generator {
  const  {business_slug, pages_slug, datecreated}  = payload;
  yield put(enableLoading(COMMON_PAGES));
  try {
    const data: any = yield call(ApiCaller.get, API.get_common_pages_by_slug, {
      business_slug,
      pages_slug,
      datecreated,
    });
  

    yield put(getCommonPageSuccess(data));
  } catch (error: any) {
    yield put(getCommonPageFailed(error));
  } finally {
    yield put(disableLoading(COMMON_PAGES));
  }
}
export default function* CommonPagesSaga() {
  yield all([
    takeLatest(commonPagesAction.getCommonPages, getCommonPages),
  ]);
}
