import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import { BOOKING_PACKAGES, PACKAGE_CAL_PRICE } from '../common/constants';
import * as bookingAction from './bookingAction';
import { disableLoading, enableLoading } from '../common/commonSlice';
import {
  getBookingPackageFailed,
  getBookingPackageSuccess,
  getYourBookingPriceFailed,
  getYourBookingPriceSuccess,
} from './bookingSlice';
import Path from '@/routes/Path';
import { toast } from 'react-toastify';

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

function* packageCalculatePrice({ payload }: any): Generator {
  const { bid, pid, check_in, check_out, adults, child, datecreated, hotel_slug, router } = payload;
  yield put(enableLoading(PACKAGE_CAL_PRICE));
  try {
    const data: any = yield call(ApiCaller.post, API.package_cal_price, {
      bid,
      pid,
      check_in,
      check_out,
      adults,
      child,
      datecreated,
    });
    yield put(getYourBookingPriceSuccess(data));
    router.push(Path.BOOKING(hotel_slug));
  } catch (error: any) {
    yield put(getYourBookingPriceFailed(error));
    toast.error(error?.response?.data[0]);
  } finally {
    yield put(disableLoading(PACKAGE_CAL_PRICE));
  }
}

export default function* bookingSaga() {
  yield all([
    takeLatest(bookingAction.getBookingPackages, getBookingPackages),
    takeLatest(bookingAction.packageCalculatePrice, packageCalculatePrice),
  ]);
}
