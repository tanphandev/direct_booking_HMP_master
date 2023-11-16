const API = {
  get_business_by_slug: (business_slug: string) => `direct_booking/get_business_by_slug?slug=${business_slug}`,
  booking_packages: (bid: string) => `public/booking_packages?bid=${bid}`,
  direct_booking_check_coupon_code: 'public/public_book_reservations/direct_booking_check_coupon_code',
};

export default API;
