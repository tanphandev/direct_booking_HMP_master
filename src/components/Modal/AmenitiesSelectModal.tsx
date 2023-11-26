import { ChangeEvent, useRef, useState } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from "@/hooks";
import i18n from "@/i18n/i18n";
import Image from "next/image";

function AmenitiesSelectModal() {
    const { t } = useTranslation();
    const lang = i18n.language
    const pathIcon = "/assets/icons";
    const modalRef = useRef<HTMLDivElement>(null);
    const { setPayload,closeModalWithAnimation ,payload} = useModalContext();
    useOnClickOutside(modalRef, () => {
        closeModalWithAnimation(150);
    });
    const [selectedAmenities, setSelectedAmenities] = useState<RoomTypeFeature[]>(payload||[])
    console.log("selec",selectedAmenities)
    const amenities: RoomTypeFeature[] = useAppSelector((state) => state.room.public_room_available[0]?.room_type_amenities);
    const handleCheckedAmenity = (e: ChangeEvent<HTMLInputElement>, amenityChecked: RoomTypeFeature) => {
        const checked = selectedAmenities.find((amenity) => amenity.custom_id === amenityChecked.custom_id);
        setSelectedAmenities(
            checked
            ? selectedAmenities.filter(amenity => amenity.custom_id !== amenityChecked.custom_id)
            :[...selectedAmenities, amenityChecked]
            )
    };
    setPayload(selectedAmenities)
    return (
        <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
            <div id="modal" ref={modalRef} className="transition-all animate-fadeIn  relative">
                <div className="flex flex-col w-[100vw] h-[100vh] sm:w-[80vw] sm:h-auto bg-white rounded-[4px] text-center justify-center md:max-w-3xl md:max-h-[80vh] md:px-4">
                    <h2 className="font-bold pt-4 pb-8 pl-4 text-left ">{t('SEARCH.SEARCH_RESULT_PAGE.AMENITIES')}</h2>
                    <div className='overflow-y-auto '>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ">
                            {amenities?.map(
                                (amenity) =>
                                    amenity.lang === lang && (
                                        <div key={amenity.custom_id} className="flex py-3 items-center px-3">
                                            <input
                                                type="checkbox"
                                                className="mr-2 w-4 h-4 "
                                                onChange={(e) => handleCheckedAmenity(e, amenity)}
                                                checked={selectedAmenities.find((a) => a.custom_id === amenity.custom_id) !== undefined}
                                            />
                                            <Image
                                                src={`${pathIcon}/${amenity.custom_icon.replace('pro:', '')}`}
                                                alt={amenity.custom_title}
                                                width={24}
                                                height={24}
                                            />
                                            <span className="pl-4">{amenity.custom_title}</span>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                    <div className="text-center p-2">
                        <button
                            onClick={() => closeModalWithAnimation(150)}
                            className="primary-button font-semibold rounded-[4px] h-9 mr-4"
                        >
                            OK {selectedAmenities.length===0?"":`(${selectedAmenities.length})`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AmenitiesSelectModal;