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
    extra_adults_rate?:number,
    extra_children_rate?:number,
    photos?: Photo[]| [],
    qty_room_available:number,
    room_type_amenities:RoomTypeAmenity[],
    room_type_offers?:RoomTypeOffer[],
    room_type_benefits?: any,
    room_type_features: RoomTypeFeature[],
    room_type_packages?: any,
    season_title?: string,
    price_room?: number,
    weekdays_price?: any,
    rt_adult_price?: any,
    rt_child_price?:any,
    res_daily_price?:any,
    room_type_daily_price?:any,
    price_room_total?: number
  }

interface RoomTypeAmenity {
    custom_id: number,
    custom_title: string,
    custom_label?:string,
    custom_value?:string,
    custom_icon: string,
    custom_default?:string,
    lang: string
}
interface RoomTypeOffer {
    custom_id: number,
    custom_title: string,
    custom_value?:string,
    custom_icon: string|"",
    custom_default?:string,
    lang: string
}
interface RoomTypeFeature {
    custom_id: number,
    custom_title: string,
    custom_value?:string,
    custom_icon?: string,
    lang: string
}
  