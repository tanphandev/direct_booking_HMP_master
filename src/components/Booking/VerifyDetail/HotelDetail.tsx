import Image from 'next/image';
import { useAppSelector } from '@/hooks';

function HotelDetail() {
  const { basic_business_info, setting } = useAppSelector((state) => state.business);
  return (
    <div className="flex flex-col lg:flex-row items-center gap-x-4">
      <Image
        src={setting?.db_header_logo?.uri_full}
        alt="hotel-logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[250px] h-[250px] lg:w-[150px] lg:h-[150px]"
      />
      <div>
        <p className="text-[18px] font-bold underline mb-2">Contact Us</p>
        <div className="grid grid-cols-3 grid-rows-3">
          <p className="font-bold">Address:</p>
          <p className="col-span-2">{basic_business_info?.business_address}</p>
          <p className="font-bold">Email:</p>
          <p className="col-span-2">{basic_business_info?.business_email}</p>
          <p className="font-bold">Phone number:</p>
          <p className="col-span-2">{basic_business_info?.business_phone}</p>
        </div>
      </div>
    </div>
  );
}

export default HotelDetail;
