'use client'
import { roomFeatures } from "@/api/mock-data/room-features";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

const RoomFeatures = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState('vi');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'vi';
    setLang(savedLanguage);
  }, []);

    const pathIcon = "/assets/icons";
    
    return (
        <div className="mt-4">
            <h2 className="font-bold mb-4 pb-2 border-b-2">{t('SEARCH.SEARCH_RESULT_PAGE.ROOM_FEATURES')}</h2>
            <div className="flex flex-wrap gap-3">
            {roomFeatures?.map((feature) => (
            feature.lang === lang && (
              <div key={feature.feature_id} className="flex py-3 items-center border px-3 border-[#e4e4e4] rounded ">
                <input type="checkbox" className="mr-2 w-4 h-4 "/>
                <Image src={`${pathIcon}/${feature.feature_icon.replace('pro:', '')}`} alt={feature.feature_title} width={24} height={24} />
                <span className="pl-4">{feature.feature_title}</span>
              </div>
            )))}
            </div>
        </div>
    );
}
export default RoomFeatures