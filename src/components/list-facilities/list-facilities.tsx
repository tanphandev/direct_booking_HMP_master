'use client'
import { business_pf } from "@/api/mock-data/facilities";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "@/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { db_languages } from '@/api/mock-data/db_languages'


const ListFacilities = () => {
  const business_pf: business_pf[] = useAppSelector((state) => state.business.business_pf);
    
  const { t } = useTranslation();
  const [lang, setLang] = useState('vi');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || db_languages.id;
    setLang(savedLanguage);
  }, []);
    const pathIcon = "/assets/icons";

    
    return (
        <div>
            <h2 className="font-bold">{t('SEARCH.SEARCH_RESULT_PAGE.PROPERTY_FACILITIES')}</h2>
            <div className="grid md:grid-cols-3 grid-cols-2">
            {business_pf?.map((facility) => (
            facility.lang === lang && (
              <div key={facility.custom_id} className="flex py-3  items-center">
                <Image src={`${pathIcon}/${facility.custom_icon.replace('pro:', '')}`} alt={facility.custom_title} width={24} height={24} />
                <span className="pl-4">{facility.custom_title}</span>
              </div>
            )))}
            </div>
        </div>
    );
}
export default ListFacilities