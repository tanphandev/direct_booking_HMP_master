import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking_packages: [],
  your_booking_price: {},
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
    getYourBookingPriceSuccess: (state, action) => {
      state.your_booking_price = action.payload;
    },
    getYourBookingPriceFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getBookingPackageSuccess,
  getBookingPackageFailed,
  getYourBookingPriceSuccess,
  getYourBookingPriceFailed,
} = bookingSlice.actions;
export default bookingSlice.reducer;
