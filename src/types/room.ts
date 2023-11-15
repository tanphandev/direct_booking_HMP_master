interface Photo {
  uri_full: string;
  uri_thumbnail: string;
}

interface RoomAvailable {
  rid?: number,
  title: string,
  info?: string,
  room_type_specs?: string,
  room_type_quality?: number,
  room_type_size?: string,
  max_adults?: number,
  max_children?: number,
  max_children_age?: number,
  extra_adults_rate?: number,
  extra_children_rate?: number,
  photos?: Photo[] | [],
  qty_room_available: number,
  room_type_amenities: RoomTypeAmenity[],
  room_type_offers?: RoomTypeOffer[],
  room_type_benefits?: any,
  room_type_features: RoomTypeFeature[],
  room_type_packages?: RoomTypePackage[] | [],
  season_title?: string,
  price_room?: number,
  weekdays_price?: any,
  rt_adult_price?: any,
  rt_child_price?: any,
  res_daily_price?: any,
  room_type_daily_price?: any,
  price_room_total?: number
}
interface ShortDes {
  lang: string,
  value: string
}
interface RoomTypePackage {
  id: string,
  type: string,
  title: string | "",
  uid?: string,
  created?: string,
  changed?: string,
  entity_type?: string,
  tax_price?: number,
  taxes_breakdown?: any,
  dbp_business?: any,
  dbp_total_price?: number,
  dbp_total_cost?: string | "",
  dbp_room_type?: any,
  dbp_activities?: any,
  activities_template?: any,
  dbp_reference?: any,
  full_pay?: any,
  tax_entity?: any,
  total_price_without_tax?: number,
  price_including_taxes?: any,
  sdate?: any,
  edate?: any,
  date_of_use?: string,
  dbp_reservation?: string,
  dbp_room?: any,
  dbp_title?: {
    lang: string,
    value: string
  }[]
  dbp_descriptions?: {
    lang: string,
    value: string
  }[]
  dbp_quantity?: number,
  total_price?: number,
  dbp_short_des: ShortDes[],
  dbp_indefinite?: any,
  dbp_type?: any,
  dbp_status?: any,
  entity_number?: string,
  move_out?: any,
  move_to_reservation?: any,
  invoice_generator?: any

}
interface RoomTypeAmenity {
  custom_id: number,
  custom_title: string,
  custom_label?: string,
  custom_value?: string,
  custom_icon: string,
  custom_default?: string,
  lang: string
}
interface RoomTypeOffer {
  custom_id: number,
  custom_title: string,
  custom_value?: string,
  custom_icon: string | "",
  custom_default?: string,
  lang: string
}
interface RoomTypeFeature {
  custom_id: number,
  custom_title: string,
  custom_value?: string,
  custom_icon?: string,
  lang: string
}
