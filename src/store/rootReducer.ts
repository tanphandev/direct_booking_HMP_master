import { combineReducers } from '@reduxjs/toolkit';
import common from './common/commonSlice';
import business from './business/businessSlice';

const rootReducer = combineReducers({
  common,
  business,
});

export default rootReducer;
