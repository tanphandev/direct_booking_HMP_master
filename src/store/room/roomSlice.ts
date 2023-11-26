import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: {},
  public_room_available:[],
  room_type_features:[]
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
    getRoomFeaturesSuccess: (state, action) => {
      state.room_type_features = action.payload;
    },
    getRoomFeaturesFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getPublicRoomAvailableSuccess,
  getPublicRoomAvailableFailed,
  getRoomFeaturesSuccess,
  getRoomFeaturesFailed
} = roomSlice.actions;
export default roomSlice.reducer;
