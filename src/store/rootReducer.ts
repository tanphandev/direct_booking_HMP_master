import { combineReducers } from '@reduxjs/toolkit';
import common from './common/commonSlice';
import business from './business/businessSlice';
import booking from './booking/bookingSlice';

const rootReducer = combineReducers({
  common,
  business,
  booking,
});

export default rootReducer;
