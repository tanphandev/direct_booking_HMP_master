import { combineReducers } from '@reduxjs/toolkit';
import common from './common/commonSlice';
import post from './post/postSlice';
import store from './index';

const rootReducer = combineReducers({
  common,
  post
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default rootReducer;
