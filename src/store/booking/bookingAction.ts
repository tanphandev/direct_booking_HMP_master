import { createAction } from '@reduxjs/toolkit';

export const getBookingPackages: any = createAction('booking/getBookingPackages');
export const packageCalculatePrice: any = createAction('booking/packageCalcultePrice');
export const packageCreate: any = createAction('booking/createPackage');