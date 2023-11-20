import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick } from 'lodash';

import API from '@/api/api';
import ApiCaller from '@/api/ApiCaller';
import * as roomAction from './roomAction';
import {
  getPublicRoomAvailableSuccess,
  getPublicRoomAvailableFailed
} from './roomSlice';
import { disableLoading, enableLoading } from '../common/commonSlice';
import { PUBLIC_ROOM_AVAILABLE } from '../common/constants';

function* getPublicRoomAvailable( {payload} : any): Generator {

  const  {bid,check_in,check_out, datecreated}  = payload;
  console.log(payload)
  yield put(enableLoading(PUBLIC_ROOM_AVAILABLE));
  try {
    const data: any = yield call(ApiCaller.get, API.public_room_available, {
      bid,
      parameters:{
        check_in: check_in,
        check_out: check_out
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
    takeLatest(roomAction.getPublicRoomAvailable, getPublicRoomAvailable),
  ]);
}
