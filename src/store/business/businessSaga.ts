import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick } from 'lodash';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import * as businessAction from './businessAction';
import {
  getBasicBusinessInfoFailed,
  getBasicBusinessInfoSuccess,
  getBusinessPFSuccess,
  getPaymentsMethodSuccess,
  getSettingSuccess,
} from './businessSlice';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { BUSINESS } from '../common/constants';
import { basic_business_info_field } from './constant';
import Path from '@/routes/Path';

function* getBusiness({ payload }: any): Generator {
  const { business_slug, router } = payload;
  yield put(enableLoading(BUSINESS));
  try {
    const data: any = yield call(ApiCaller.get, API.get_business_by_slug(business_slug));
    const basic_business_info = pick(data, basic_business_info_field);
    yield put(getBasicBusinessInfoSuccess(basic_business_info));
    yield put(getBusinessPFSuccess(data.business_pf));
    yield put(getSettingSuccess(data.direct_booking_setting));
    yield put(getPaymentsMethodSuccess(data.payment_method));
  } catch (error: any) {
    yield put(getBasicBusinessInfoFailed(error));
    /* check bussiness not found */
    if (error?.response?.status === 406) {
      router.push(Path.NOT_FOUND);
    }
  } finally {
    yield put(disableLoading(BUSINESS));
  }
}

export default function* postSaga() {
  yield all([takeLatest(businessAction.getBusiness, getBusiness)]);
}
