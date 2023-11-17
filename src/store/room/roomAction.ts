import { createAction } from '@reduxjs/toolkit';

const getBusiness: any = createAction('business/getBusiness');
const checkCouponCode: any = createAction('business/checkCouponCode');
const getPublicRoomAvailable: any = createAction('room/getPublicRoomAvailable');
export { getBusiness, checkCouponCode, getPublicRoomAvailable };
