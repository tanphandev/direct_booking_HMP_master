import { createAction } from '@reduxjs/toolkit';

export const getBookingPackages: any = createAction('booking/getBookingPackages');
export const packageCalculatePrice: any = createAction('booking/packageCalcultePrice');
export const packageCreate: any = createAction('booking/createPackage');
export const roomCalculatePrice: any = createAction('booking/packageCalculatePrice');
export const roomCreate: any = createAction('booking/createRoom');
