import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking_packages: [],
  booking_info: null,
  your_booking_price: {},
  booking_room_info: null,
  booking_room_price: {},
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
    getBookingRoomInfo: (state, action) => {
      state.booking_room_info = action.payload;
    },
    getYourBookingPriceSuccess: (state, action) => {
      state.your_booking_price = action.payload;
    },
    getYourBookingPriceFailed: (state, action) => {
      state.error = action.payload;
    },
    getBookingRoomPriceSuccess: (state, action) => {
      state.booking_room_price = action.payload;
    },
    getBookingRoomPriceFailed: (state, action) => {
      state.error = action.payload;
    },
    getReservationSuccess: (state, action) => {
      state.reservation = action.payload;
    },
    getReservationFailed: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const {
  getBookingPackageSuccess,
  getBookingPackageFailed,
  getBookingInfo,
  getBookingRoomInfo,
  getYourBookingPriceSuccess,
  getYourBookingPriceFailed,
  getBookingRoomPriceSuccess,
  getBookingRoomPriceFailed,
  getReservationSuccess,
  getReservationFailed,
  resetError,
} = bookingSlice.actions;
export default bookingSlice.reducer;
