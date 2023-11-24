type BookingPackagesType = {
  pid: string;
  uid: string;
  title: string;
  type: string;
  packages_night_stay: number;
  db_max_adult: number;
  db_max_children: number;
  packages_adult_rate: number;
  packages_child_rate: number;
  packages_single_rate: number;
  packages_note: string;
};

interface PackageCreate {
  adults: number;
  bid: number;
  check_in: number;
  check_out: number;
  child: number;
  client_info: {
    book_for: number;
    country: string;
    for_other?: string;
    for_someone?: {
      country: string;
      full_name: string;
      mail?: string;
      phone_number?: string;
    };
    full_name: string;
    mail: string;
    phone_number: string;
    via_travelx?: number;
  };
  datecreated: number;
  guest_stay: Array<{
    uid: number;
    full_name: string;
    mail?: string;
    phone_number?: string;
  }>;
  pid: string;
  res_arrival_at?: string;
  res_departing_from?: string;
  res_departing_via?: string;
  special_requirements?: string;
}

interface RoomCreate {
  reservations_business_id: {
    entity_id: number;
  };
  check_in: string;
  check_out: string;
  reservations_check_in: number;
  reservations_check_out: number;
  datecreated: number;
  reservations_adults: number;
  reservations_children: number;
  client_info: {
    book_for: number;
    country: string;
    for_other?: string;
    for_someone?: {
      country: string;
      full_name: string;
      mail?: string;
      phone_number?: string;
    };
    full_name: string;
    mail: string;
    phone_number: string;
    via_travelx?: number;
  };
  guest_stay: Array<{
    country: string;
    full_name: string;
    mail?: string;
    phone_number?: string;
  }>;
  room_types: Array<any>;
  res_arrival_at?: string;
  res_departing_from?: string;
  res_departing_via?: string;
}
