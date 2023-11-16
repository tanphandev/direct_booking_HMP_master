import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import { BOOKING_PACKAGES } from '../common/constants';
import * as bookingAction from './bookingAction';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { getBookingPackageFailed, getBookingPackageSuccess } from './bookingSlice';

function* getBookingPackages({ payload }: any): Generator {
  const { bid, datecreated } = payload;
  yield put(enableLoading(BOOKING_PACKAGES));
  try {
    const data: any = yield call(ApiCaller.get, API.get_booking_packages, {
      bid,
      datecreated,
    });
    yield put(getBookingPackageSuccess(data));
  } catch (error: any) {
    yield put(getBookingPackageFailed(error));
  } finally {
    yield put(disableLoading(BOOKING_PACKAGES));
  }
}

export default function* bookingSaga() {
  yield all([takeLatest(bookingAction.getBookingPackages, getBookingPackages)]);
}
