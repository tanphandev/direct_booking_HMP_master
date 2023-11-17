import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: {},
  public_room_available:[],
} as any;

const roomSlice = createSlice({
  name: 'room',
  initialState: initialState,
  reducers: {
      getPublicRoomAvailableSuccess: (state, action) => {
      state.public_room_available = action.payload;
    },
    getPublicRoomAvailableFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getPublicRoomAvailableSuccess,
  getPublicRoomAvailableFailed
} = roomSlice.actions;
export default roomSlice.reducer;
