import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basic_business_info: {},
  business_pf: [],
  setting: {},
  footer_navigation: [],
  payments_method: [],
  error: {},
  public_room_available:[],
} as any;

const roomSlice = createSlice({
  name: 'room',
  initialState: initialState,
  reducers: {
    getBasicBusinessInfoSuccess: (state, action) => {
      state.basic_business_info = action.payload;
    },
    getBusinessPFSuccess: (state, action) => {
      state.business_pf = action.payload;
    },
    getBasicBusinessInfoFailed: (state, action) => {
      state.error = action.payload;
    },
    getSettingSuccess: (state, action) => {
      state.setting = action.payload;
    },
    getFooterNavigationSuccess: (state, action) => {
      state.footer_navigation = action.payload;
    },
    getPaymentsMethodSuccess: (state, action) => {
      state.payment_method = action.payload;
    },
    checkCouponFailed: (state, action) => {
      state.error = action.payload;
    },

    getPublicRoomAvailableSuccess: (state, action) => {
      state.public_room_available = action.payload;
    },
    getPublicRoomAvailableFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getBasicBusinessInfoSuccess,
  getBasicBusinessInfoFailed,
  getBusinessPFSuccess,
  getSettingSuccess,
  getFooterNavigationSuccess,
  getPaymentsMethodSuccess,
  checkCouponFailed,
  
  getPublicRoomAvailableSuccess,
  getPublicRoomAvailableFailed
} = roomSlice.actions;
export default roomSlice.reducer;
