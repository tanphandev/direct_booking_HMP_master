import { createAction } from '@reduxjs/toolkit';


const getPublicRoomAvailable: any = createAction('room/getPublicRoomAvailable');
const getRoomFeatures: any = createAction('room/getRoomFeatures');

export { getPublicRoomAvailable ,getRoomFeatures};
