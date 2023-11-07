import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: {}
} as any;
const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    getPostSuccess: (state, action) => {
      state.posts = action.payload;
    },
    getPostFailed: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { getPostSuccess, getPostFailed } = postSlice.actions;
export default postSlice.reducer;
