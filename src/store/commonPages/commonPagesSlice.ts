import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: {},
  common_pages:{}
} as any;

const commonPagesSlice = createSlice({
  name: 'common_pages',
  initialState: initialState,
  reducers: {
    getCommonPageSuccess: (state, action) => {
      state.common_pages = action.payload;
    },
    getCommonPageFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getCommonPageSuccess,
  getCommonPageFailed
} = commonPagesSlice.actions;
export default commonPagesSlice.reducer;
