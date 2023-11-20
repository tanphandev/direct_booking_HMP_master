const API = {
  get_business_by_slug: 'direct_booking/get_business_by_slug',
  get_booking_packages: 'public/booking_packages',
  direct_booking_check_coupon_code: 'public/public_book_reservations/direct_booking_check_coupon_code',
  package_cal_price: 'public/packages_available/package_cal_price',
  package_create: 'public/packages_available/package_create',
  public_room_available: 'public/public_room_available',
  
  // public_room_available: (business_lug: string, checkin: string,checkout: string, adults: number, children: number)=>``
};

export default API;
