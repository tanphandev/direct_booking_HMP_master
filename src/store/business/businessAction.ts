import { createAction } from '@reduxjs/toolkit';

const getBusiness: any = createAction('business/getBusiness');
const checkCouponCode: any = createAction('business/checkCouponCode');

export { getBusiness, checkCouponCode };
