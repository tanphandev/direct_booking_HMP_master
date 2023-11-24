'use client'
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks";
import Image from "next/image";
import i18n from "@/i18n/i18n";
const ListFacilities = () => {
  const business_pf: business_pf[] = useAppSelector((state) => state.business.business_pf);

  const { t } = useTranslation();
  const lang = i18n.language
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