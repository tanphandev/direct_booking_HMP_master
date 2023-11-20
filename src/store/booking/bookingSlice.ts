import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking_packages: [],
  booking_info: null,
  your_booking_price: {},
  reservation: {},
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
    getBookingInfo: (state, action) => {
      state.booking_info = action.payload;
    },
    getYourBookingPriceSuccess: (state, action) => {
      state.your_booking_price = action.payload;
    },
    getYourBookingPriceFailed: (state, action) => {
      state.error = action.payload;
    },
    getReservationSuccess: (state, action) => {
      state.reservation = action.payload;
    },
    getReservationFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getBookingPackageSuccess,
  getBookingPackageFailed,
  getBookingInfo,
  getYourBookingPriceSuccess,
  getYourBookingPriceFailed,
  getReservationSuccess,
  getReservationFailed,
} = bookingSlice.actions;
export default bookingSlice.reducer;
