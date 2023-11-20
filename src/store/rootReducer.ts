import { combineReducers } from '@reduxjs/toolkit';
import common from './common/commonSlice';
import business from './business/businessSlice';
import booking from './booking/bookingSlice';
import room from './room/roomSlice';


const rootReducer = combineReducers({
  common,
  business,
  booking,
  room,
});

export default rootReducer;
