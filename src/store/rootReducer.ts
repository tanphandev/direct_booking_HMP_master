import { combineReducers } from '@reduxjs/toolkit';
import common from './common/commonSlice';
import business from './business/businessSlice';
import booking from './booking/bookingSlice';
import room from './room/roomSlice';
import commonPages from './commonPages/commonPagesSlice';

const rootReducer = combineReducers({
  common,
  business,
  booking,
  room,
  commonPages,
});

export default rootReducer;
