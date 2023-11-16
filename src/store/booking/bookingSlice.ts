import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking_packages: [],
  error: [],
} as any;

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    getBookingPackageSuccess: (state, action) => {
      state.booking_packages = action.payload;
    },
    getBookingPackageFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getBookingPackageSuccess, getBookingPackageFailed } = bookingSlice.actions;
export default bookingSlice.reducer;
