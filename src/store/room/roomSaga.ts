import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick } from 'lodash';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import * as businessAction from './roomAction';
import {
  getPublicRoomAvailableSuccess,
  getPublicRoomAvailableFailed
} from './roomSlice';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { PUBLIC_ROOM_AVAILABLE } from '../common/constants';

function* getPublicRoomAvailable({ payload }: any): Generator {

  const { bid, parameters, datecreated } = payload;
  const urlSearchParams = new URLSearchParams(parameters);
  const checkin = (urlSearchParams.get('check_in'));
  const checkout = (urlSearchParams.get('check_out'));
  yield put(enableLoading(PUBLIC_ROOM_AVAILABLE));
  try {
    const data: any = yield call(ApiCaller.get, API.public_room_available, {
      bid,
      parameters: {
        check_in: checkin,
        check_out: checkout,
      },
      datecreated,
    });
  

    yield put(getPublicRoomAvailableSuccess(data));

  } catch (error: any) {
    yield put(getPublicRoomAvailableFailed(error));
  } finally {
    yield put(disableLoading(PUBLIC_ROOM_AVAILABLE));
  }
}

export default function* RoomSaga() {
  yield all([
    takeLatest(businessAction.getPublicRoomAvailable, getPublicRoomAvailable),
  ]);
}
