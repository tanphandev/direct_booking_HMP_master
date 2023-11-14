import React, { useState } from 'react';
import Image from 'next/image';
import QuantityRoomOption from '@/components/RoomCardResult/QuantityRoomOption/QuantityRoomOption';
interface RoomCardResultProps {
  room: RoomAvailable
}

const RoomCardResult: React.FC<RoomCardResultProps> = ({ room }) => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const photos = room.photos || [];
  const lang = 'vi';
  const pathIcon = "/assets/icons";
  const MAX_DISPLAYED_ITEMS = 27;
  const MAX_DISPLAYED_OFFERS = 15;
  const [displayedItems, setDisplayedItems] = useState(MAX_DISPLAYED_ITEMS);
  const [displayedItemOffers, setDisplayedItemOffers] = useState(MAX_DISPLAYED_OFFERS);


  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % (photos.length || 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + (photos.length || 1)) % (photos.length || 1));

  };

  const handleToggleDisplayAmenities = () => {
    if (displayedItems === MAX_DISPLAYED_ITEMS) {
      setDisplayedItems(room.room_type_amenities?.length || 0);
    } else {
      setDisplayedItems(MAX_DISPLAYED_ITEMS);
    }
  };

  const handleToggleDisplayOffers = () => {
    if (displayedItemOffers === MAX_DISPLAYED_OFFERS) {
      setDisplayedItemOffers(room.room_type_offers?.length || 0);
    } else {
      setDisplayedItemOffers(MAX_DISPLAYED_OFFERS);
    }
  };
  const displayedAmenities = room.room_type_amenities?.slice(0, displayedItems);
  const displayedOffers = room.room_type_offers?.slice(0, displayedItemOffers);


  return (
    <>
      <h2 className='font-bold text-2xl mt-12 mb-4 pb-2 border-b-2'>{room.title}</h2>
      <div className='flex flex-around'>
        {photos[0] ? (
          <div className=' w-[30%] h-[200px]'>
            <img
              src={photos[0]?.uri_full}
              alt={`Image ${currentImage + 1}`}
              className='w-full h-full cursor-pointer'
              onClick={() => handleImageClick(0)}
            />
            {showSlider && (
              <div className='fixed top-0 left-0 w-screen h-screen flex  bg-[black]  z-50'>
                <div className='relative   w-full h-full overflow-hidden'>
                  <button
                    className='absolute top-2 right-6  text-white text-3xl cursor-pointer'
                    onClick={handleCloseSlider}
                  >
                    x
                  </button>
                  <img
                    src={photos[currentImage]?.uri_full}
                    alt={`Image ${currentImage + 1}`}
                    className='w-full h-full object-contain'
                  />
                  <button
                    className='absolute ml-3 top-1/2 -translate-y-1/2 left-4 text-white text-2xl cursor-pointer'
                    onClick={handlePrev}
                  >
                    &#10094;
                  </button>
                  <button
                    className='absolute mr-3 top-1/2 -translate-y-1/2 right-4 text-white text-2xl cursor-pointer'
                    onClick={handleNext}
                  >
                    &#10095;
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className='w-[30%] h-[200px] flex items-center justify-center bg-[#f5f5f5]'>
            <img src="/assets/icons/image-default.svg" className='' />
          </div>
        )}
        <div className='pl-4'>
          <div className='flex flex-col '>
            <h4 className='uppercase font-bold'>Tiện nghi phòng</h4>
            <div className='grid md:grid-cols-3 grid-cols-2'>
              {displayedAmenities?.map((amenity) => (
                amenity.lang === lang && (
                  <div key={amenity.custom_id} className="flex py-3 items-center px-3">
                    <Image src={`${pathIcon}/${amenity.custom_icon.replace('pro:', '')}`} alt={amenity.custom_title} width={24} height={24} />
                    <span className="pl-4">{amenity.custom_title}</span>
                  </div>
                )))}

            </div>

          </div>
          {room.room_type_amenities && room.room_type_amenities.length > MAX_DISPLAYED_ITEMS && (
            <div className="flex py-3 items-center px-3 cursor-pointer text-blue-500" onClick={handleToggleDisplayAmenities}>
              {displayedItems === MAX_DISPLAYED_ITEMS ?
                (
                  <div className='flex'>
                    <Image src={`${pathIcon}/add-icon.svg`} alt='' width={24} height={24} />
                    <span className='pl-4 underline'>Xem thêm</span>
                  </div>
                )
                :
                (<div className='flex'>
                  <Image src={`${pathIcon}/sub-icon.svg`} alt='' width={24} height={24} />
                  <span className='pl-4 underline'>Thu gọn</span>
                </div>)}
            </div>
          )}
        </div>
      </div>
      <div className='grid grid-cols-6 pb-8'>
        <div className='col-span-3'>
          <div className='bg-[#636363] p-2 border border-[#636363] '>
            <span className='text-white'>Bao gồm</span>
          </div>

          <div className=' h-full border border-[#e4e4e4] p-4'>
            {displayedOffers?.map((offer) => (
              offer.lang === lang && (
                <div key={offer.custom_id} className="flex pb-3 items-center ">
                  <Image src={`${pathIcon}/checked.svg`} alt={offer.custom_title} width={18} height={18} />
                  <span className="pl-4">{offer.custom_title}</span>
                </div>
              )
            ))}
            {room.room_type_offers && room.room_type_offers.length > MAX_DISPLAYED_OFFERS && (
              <div className="flex py-3 items-center  cursor-pointer text-blue-500" onClick={handleToggleDisplayOffers}>
                {displayedItemOffers === MAX_DISPLAYED_OFFERS ?
                  (
                    <div className='flex'>
                      <Image src={`${pathIcon}/add-icon.svg`} alt='' width={22} height={22} />
                      <span className='pl-4 underline text-blue-0a'>Xem thêm</span>
                    </div>
                  )
                  :
                  (<div className='flex'>
                    <Image src={`${pathIcon}/sub-icon.svg`} alt='' width={22} height={22} />
                    <span className='pl-4 underline text-blue-0a'>Thu gọn</span>
                  </div>)}
              </div>
            )}
          </div>

        </div>
        <div>
          <div className='bg-[#636363] p-2 border border-[#636363]'>
            <span className='text-white'>Sức chứa</span>
          </div>
          <div className='border h-full border-[#e4e4e4] p-4 '>
            <div className='flex justify-center'>
              <div className='flex align-bottom items-end pr-1'>
                <Image src={`${pathIcon}/adult.svg`} alt="" width={16} height={32} />
                <span className='ml-2 font-bold text-[#636363]'>x {room.max_adults}</span>
              </div>
              <div className='flex align-bottom items-end pl-1'>
                <Image src={`${pathIcon}/child.svg`} alt="" width={16} height={20} />
                <span className='ml-2 font-bold text-[#636363]'>x {room.max_children}</span>
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className='bg-[#636363] p-2 border border-[#636363]'>
            <span className='text-white'>Số lượng</span>
          </div>
          <div className='border h-full border-[#e4e4e4] p-4'>
            <div className=''>
              <span className=''>Phòng</span>
              <QuantityRoomOption maxQuantity={room.qty_room_available} />
            </div>
          </div>
        </div>
        <div>
          <div className='bg-[#636363] p-2 border border-[#636363]'>
            <span className='text-white'>Giá cho 1 đêm</span>
          </div>
          <div className='border h-full border-[#e4e4e4] p-4 items-end'>
            <h2 className='text-[red]'>{room.price_room_total} Đ</h2>
          </div>
        </div>
      </div>

      {room.room_type_packages && (
        <div className='mt-4'>
          <h2 className='uppercase mb-4 pb-2'>Ưu đãi đặc biệt</h2>
          <div className='flex flex-wrap'>
            {room.room_type_packages?.map((roomPackage) => (
              <div key={roomPackage.id} className='m-w-1/3 w-1/3'>
                <div className='flex flex-col bg-[#edf5ef] py-6 px-4 mx-2 rounded-md'>
                  {roomPackage.dbp_short_des.map((des, index) => (
                    des.lang === lang && (
                      <div key={index} className='mb-4'>{des.value}</div>
                    )
                  ))}
                  <div className='flex items-center justify-between flex-wrap'>
                    <div className='font-bold text-xl'>+ {roomPackage.total_price}đ</div>
                    <div>
                      <a className='uppercase text-[#0a7cff] font-bold'>+ Thêm</a>
                    </div>
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div>
      )}
    </>
  );
};

export default RoomCardResult;

