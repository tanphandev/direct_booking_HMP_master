import React, { useState } from 'react';


interface RoomCardResultProps {
  room: {
    title: string;
    photos: Photo[];
  };
}

const RoomCardResult: React.FC<RoomCardResultProps> = ({ room }) => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % room.photos.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + room.photos.length) % room.photos.length);
  };

  return (
    <>
      <h2 className='font-bold text-xl mb-4 pb-2 border-b-2'>{room.title}</h2>
      <div className='flex flex-around'>
        {room.photos[0] ? (
          <div className='max-w-[30%] '>
            <img
              src={room.photos[0]?.uri_full}
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
                    src={room.photos[currentImage]?.uri_full}
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

          <div></div>



      </div>

    </>
  );
};

export default RoomCardResult;

