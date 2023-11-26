'use client';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import i18n from '@/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useParams } from 'next/navigation';
import { getDateNowTimestamp } from '@/utils/helper';
import { getCommonPages } from '@/store/commonPages/commonPagesAction';
function HMPMasterDBPage() {
  const { t } = useTranslation();
  const pageData: CommonPages = useAppSelector((state) => state.commonPages.common_pages);
  const dispatch = useAppDispatch();
  const [isUseEffect,setIsUseEffect]=useState(false)
  const hotel_slug  = useParams().hotel_slug
  useEffect(() => {
    if (pageData&&!isUseEffect) {
      const business_slug = hotel_slug
      const datecreated = getDateNowTimestamp()
      const pages_slug = 'hmpmaster-db'
      dispatch(getCommonPages({ business_slug, datecreated, pages_slug }));
      setIsUseEffect(true)
    }
  },[]);
  const lang = i18n.language;
  const cp_body_value = pageData.cp_body?.find((cp) => cp.lang === lang)?.value;
  const cp_title_value = pageData.cp_title?.find((cp) => cp.lang === lang)?.value;

  return (
    <div className="main-container my-8  leading-6">
      <h1 className="font-bold">{cp_title_value}</h1>
      <div dangerouslySetInnerHTML={{ __html: cp_body_value || '' }} />          
    </div>
  );
}

export default HMPMasterDBPage;
