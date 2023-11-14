import React, { useState } from 'react';
import Image from 'next/image';
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
  const [displayedItems, setDisplayedItems] = useState(MAX_DISPLAYED_ITEMS);

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


  const handleShowMore = () => {
    setDisplayedItems(room.room_type_amenities?.length || 0);
  };
  const handleToggleDisplay = () => {
    if (displayedItems === MAX_DISPLAYED_ITEMS) {
      setDisplayedItems(room.room_type_amenities?.length || 0);
    } else {
      setDisplayedItems(MAX_DISPLAYED_ITEMS);
    }
  };

  const displayedAmenities = room.room_type_amenities?.slice(0, displayedItems);

  return (
    <>
      <h2 className='font-bold text-xl mb-4 pb-2 border-b-2'>{room.title}</h2>
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
            <div className="flex py-3 items-center px-3 cursor-pointer text-blue-500" onClick={handleToggleDisplay}>
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

    </>
  );
};

export default RoomCardResult;

