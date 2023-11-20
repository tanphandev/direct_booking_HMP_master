import { createAction } from '@reduxjs/toolkit';

const getBusiness: any = createAction('business/getBusiness');
const checkCouponCode: any = createAction('business/checkCouponCode');
const getSearchResult: any =createAction('business/getSearchResult');

export { getBusiness, checkCouponCode, getSearchResult };
