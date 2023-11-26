import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  question:{},
  error: [],
} as any;

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    sendQuestionSuccess: (state, action) => {
      state.question = action.payload;
    },
    sendQuestionFailed: (state, action) => {
      state.error = action.payload;
    },
    
  },
});

export const {
  sendQuestionSuccess,
  sendQuestionFailed
} = questionSlice.actions;
export default questionSlice.reducer;
