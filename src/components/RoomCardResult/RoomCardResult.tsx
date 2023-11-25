'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRoomContext } from '@/contexts/RoomProvider';
import { isEmpty } from 'lodash';
import QuantityRoomOption from '@/components/RoomCardResult/QuantityRoomOption/QuantityRoomOption';
import PackageDetail from './QuantityRoomOption/PackageDetail';
import i18n from '@/i18n/i18n';
interface RoomCardResultProps {
  room: RoomAvailable;
  index: number;
}
const RoomCardResult: React.FC<RoomCardResultProps> = ({ room }) => {
  const { t } = useTranslation();
  const [showSlider, setShowSlider] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [roomChose, setRoomChose] = useState<any>({});
  const [quantityRoom, setQuantityRoomValue] = useState(0);
  const [packageChose, setPackageChose] = useState({});
  const { setRoomChoseValue } = useRoomContext();
  const photos = room.photos || [];
  const packages = room.room_type_packages || [];
  const pathIcon = '/assets/icons';
  const MAX_DISPLAYED_ITEMS = 27;
  const MAX_DISPLAYED_OFFERS = 15;
  const [displayedItems, setDisplayedItems] = useState(MAX_DISPLAYED_ITEMS);
  const [displayedItemOffers, setDisplayedItemOffers] = useState(MAX_DISPLAYED_OFFERS);
  const handleRoomChoseChange = () => {};
  const lang = i18n.language;
  useEffect(() => {
    setRoomChose({
      room: room,
      quantity: quantityRoom,
      packages: Object.values(packageChose),
    });
  }, [quantityRoom, packageChose]);

  useEffect(() => {
    !isEmpty(roomChose) &&
      setRoomChoseValue((prevValue: any) => {
        const temp = { ...prevValue };
        if (roomChose.quantity === 0) {
          delete temp[`${room.rid}`];
        } else {
          temp[`${room.rid}`] = roomChose;
        }
        return temp;
      });
  }, [roomChose]);

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

  const handleChangePackage = (roomPackage: any) => {
    setPackageChose(roomPackage);
  };
  const displayedAmenities = room.room_type_amenities?.slice(0, displayedItems);
  const displayedOffers = room.room_type_offers?.slice(0, displayedItemOffers);

  return (
    <>
      <h2 className="font-bold text-2xl mt-12 mb-4 pb-2 border-b-2">{room.title}</h2>
      <div className="flex flex-col md:flex-row ">
        {photos[0] ? (
          <div className="md:w-1/3 md:h-[200px] pb-2 h-[180px] relative">
            <Image
              src={photos[0]?.uri_full}
              alt={`Image ${currentImage + 1}`}
              className=" cursor-pointer"
              onClick={() => handleImageClick(0)}
              quality={100}
              fill
            />
            {showSlider && (
              <div className="fixed top-0 left-0 w-screen h-screen flex  bg-[black] z-30">
                <div className="relative   w-full h-full overflow-hidden">
                  <button
                    className="absolute z-50 top-2 right-6  text-white text-3xl cursor-pointer"
                    onClick={handleCloseSlider}
                  >
                    x
                  </button>
                  <Image src={photos[currentImage]?.uri_full} alt={`Image ${currentImage + 1}`} quality={100} fill />
                  <button
                    className="absolute ml-3 top-1/2 -translate-y-1/2 left-4 text-white text-2xl cursor-pointer"
                    onClick={handlePrev}
                  >
                    &#10094;
                  </button>
                  <button
                    className="absolute mr-3 top-1/2 -translate-y-1/2 right-4 text-white text-2xl cursor-pointer"
                    onClick={handleNext}
                  >
                    &#10095;
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className=" w-full md:w-[30%] md:h-[200px] mb-2 h-[180px] flex items-center justify-center bg-[#f5f5f5]">
            <Image src="/assets/icons/image-default.svg" alt="" className="" width={30} height={30} />
          </div>
        )}
        <div className="pl-4">
          <div className="flex flex-col ">
            <h4 className="uppercase font-bold">{t('SEARCH.ROOM_TYPE.ROOM_AMENITIES')}</h4>
            <div className="grid md:grid-cols-3 grid-cols-2">
              {displayedAmenities?.map(
                (amenity) =>
                  amenity.lang === lang && (
                    <div key={amenity.custom_id} className="flex py-3 items-center px-3">
                      <Image
                        src={`${pathIcon}/${amenity.custom_icon.replace('pro:', '')}`}
                        alt={amenity.custom_title}
                        width={24}
                        height={24}
                      />
                      <span className="pl-4">{amenity.custom_title}</span>
                    </div>
                  ),
              )}
            </div>
          </div>
          {room.room_type_amenities && room.room_type_amenities.length > MAX_DISPLAYED_ITEMS && (
            <div
              className="flex py-3 items-center px-3 cursor-pointer text-blue-500"
              onClick={handleToggleDisplayAmenities}
            >
              {displayedItems === MAX_DISPLAYED_ITEMS ? (
                <div className="flex">
                  <Image src={`${pathIcon}/add-icon.svg`} alt="" width={24} height={24} />
                  <span className="pl-4 underline">{t('SEARCH.ROOM_TYPE.SHOW_MORE')}</span>
                </div>
              ) : (
                <div className="flex">
                  <Image src={`${pathIcon}/sub-icon.svg`} alt="" width={24} height={24} />
                  <span className="pl-4 underline">{t('SEARCH.ROOM_TYPE.SHOW_LESS')}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="grid md:grid-flow-col 3xl:auto-cols-max pb-8 w-full">
        <div className="">
          <div className="bg-[#636363] p-2 border border-[#636363] ">
            <span className="text-white">{t('SEARCH.ROOM_TYPE.ROOM_INCLUDES')}</span>
          </div>

          <div className=" h-full border border-[#e4e4e4] p-4">
            {displayedOffers?.map(
              (offer) =>
                offer.lang === lang && (
                  <div key={offer.custom_id} className="flex pb-3 items-center ">
                    <Image src={`${pathIcon}/checked.svg`} alt={offer.custom_title} width={18} height={18} />
                    <span className="pl-2 lg:pl-4">{offer.custom_title}</span>
                  </div>
                ),
            )}
            {room.room_type_offers && room.room_type_offers.length > MAX_DISPLAYED_OFFERS && (
              <div className="flex py-3 items-center  cursor-pointer text-blue-500" onClick={handleToggleDisplayOffers}>
                {displayedItemOffers === MAX_DISPLAYED_OFFERS ? (
                  <div className="flex">
                    <Image src={`${pathIcon}/add-icon.svg`} alt="" width={22} height={22} />
                    <span className="pl-4 underline text-blue-0a">{t('SEARCH.ROOM_TYPE.SHOW_MORE')}</span>
                  </div>
                ) : (
                  <div className="flex">
                    <Image src={`${pathIcon}/sub-icon.svg`} alt="" width={22} height={22} />
                    <span className="pl-4 underline text-blue-0a">{t('SEARCH.ROOM_TYPE.SHOW_LESS')}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="bg-[#636363] p-2 border border-[#636363]">
            <span className="text-white">{t('SEARCH.ROOM_TYPE.ROOM_SLEEPS')}</span>
          </div>
          <div className="border h-full border-[#e4e4e4] p-4 ">
            <div className="flex justify-center">
              <div className="flex align-bottom items-end pr-1">
                <Image src={`${pathIcon}/adult.svg`} alt="" width={16} height={32} />
                <span className="ml-2 font-bold text-[#636363]">x {room.max_adults}</span>
              </div>
              <div className="flex align-bottom items-end pl-1">
                <Image src={`${pathIcon}/child.svg`} alt="" width={16} height={20} />
                <span className="ml-2 font-bold text-[#636363]">x {room.max_children}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#636363] p-2 border border-[#636363]">
            <span className="text-white">{t('SEARCH.ROOM_TYPE.ROOM_QUANTITY')}</span>
          </div>
          <div className="border h-full border-[#e4e4e4] p-4">
            <div className="">
              <span className="">{t('SEARCH.BOX_SEARCH.ROOM')}</span>
              <QuantityRoomOption
                room={room}
                quantityRoom={quantityRoom}
                setQuantityRoomValue={setQuantityRoomValue}
                roomChose={roomChose}
                packageChose={packageChose}
                setPackageChose={setPackageChose}
                setRoomChose={setRoomChose}
                handleRoomChoseChange={handleRoomChoseChange}
                maxQuantity={room.qty_room_available}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#636363] p-2 border border-[#636363]">
            <span className="text-white">{t('SEARCH.ROOM_TYPE.ROOM_PRICE_NIGHT', { value: 1 })}</span>
          </div>
          <div className="border h-full border-[#e4e4e4] p-4 items-end">
            <h2 className="text-[red]">{room.price_room_total} Đ</h2>
          </div>
        </div>
      </div>

      {packages[0] && (
        <div className="mt-4">
          <h2 className="uppercase mb-4 pb-2">{t('SEARCH.ROOM_TYPE.SPECIAL_OFFERS')}</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap">
            {packages?.map((roomPackage, index) => (
              <PackageDetail
                key={index}
                roomPackage={roomPackage}
                setPackageChose={setPackageChose}
                quantityRoom={quantityRoom}
                setQuantityRoomValue={setQuantityRoomValue}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RoomCardResult;
