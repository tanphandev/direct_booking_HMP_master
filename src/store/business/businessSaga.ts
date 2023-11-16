import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick } from 'lodash';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import * as businessAction from './businessAction';
import {
  checkCouponFailed,
  getBasicBusinessInfoFailed,
  getBasicBusinessInfoSuccess,
  getBusinessPFSuccess,
  getFooterNavigationSuccess,
  getPaymentsMethodSuccess,
  getSettingSuccess,
} from './businessSlice';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { BUSINESS, CHECK_COUPON_CODE } from '../common/constants';
import { basic_business_info_field } from './constant';
import Path from '@/routes/Path';
import { toast } from 'react-toastify';

function* getBusiness({ payload }: any): Generator {
  const { business_slug, router } = payload;
  yield put(enableLoading(BUSINESS));
  try {
    const data: any = yield call(ApiCaller.get, API.get_business_by_slug(business_slug));
    const basic_business_info = pick(data, basic_business_info_field);
    yield put(getBasicBusinessInfoSuccess(basic_business_info));
    yield put(getBusinessPFSuccess(data.business_pf));
    yield put(getSettingSuccess(data.direct_booking_setting));
    yield put(getFooterNavigationSuccess(data.direct_booking_setting.navigation));
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

function* checkCouponCode({ payload }: any): Generator {
  const { bodyData } = payload;
  enableLoading(CHECK_COUPON_CODE);
  try {
    const data: any = yield call(ApiCaller.post, API.direct_booking_check_coupon_code, bodyData);
    if (!data[0]) {
      toast.error('Mã của bạn không hợp lệ');
    } else {
      toast.success('Mã đã được áp dụng');
    }
  } catch (error: any) {
    yield put(checkCouponFailed(error));
  } finally {
    disableLoading(CHECK_COUPON_CODE);
  }
}
export default function* postSaga() {
  yield all([
    takeLatest(businessAction.getBusiness, getBusiness),
    takeLatest(businessAction.checkCouponCode, checkCouponCode),
  ]);
}
