'use client';
import Image from 'next/image';
import GG_MAP from "@/../public/assets/image/gmap.jpg"


import QUESTION from "@/assets/icons/question.svg"
import { cp_paragraphs, cp_title } from "@/api/mock-data/faq";
import Amenities from "@/assets/icons/Amenities";
import { useEffect, useState } from "react";
import { useModalContext } from '@/contexts/ModalProvider';
import BookingSearchBox from '../booking-search-box/booking-search-box';
import { MODAL_NAME } from '@/types/modal';

import { useTranslation } from "next-i18next";
import i18n from "@/i18n/i18n";

const SidebarSearch = () => {
  // const { t } = useTranslation();
  const { openModal } = useModalContext();  
  const [lang, setLang] = useState('vi');
  

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'vi';
    setLang(savedLanguage);

    // Update i18n language whenever lang changes
    i18n.changeLanguage(savedLanguage);
  },[]);

  useEffect(() => {
    // Re-fetch translations when lang changes
    i18n.reloadResources();
  }, [lang]);
  return (
    <>
      <div className="rounded-t-md bg-[#636363]">
        <BookingSearchBox />
      </div>
      <button className="rounded-md flex my-4 py-2 px-6 w-full items-center justify-between bg-[#0A7CFF] hover:opacity-90 hover:shadow-lg">
        <span className="flex-none ">
          <Amenities />
        </span>
        <span className="text-white flex-auto uppercase  align-middle px-3  " >Tiện ích</span>

        {/* <span className="text-white flex-auto uppercase  align-middle px-3  " >{t('SEARCH.SEARCH_RESULT_PAGE.AMENITIES')}</span> */}
      </button>
      <div>
        <div className="relative">
          <Image src={GG_MAP} alt="GG_MAP" className="w-full" />
          <button 
           onClick={() => {
            openModal(MODAL_NAME.HMP_MAP);
          }}
            className="absolute p-2 rounded-sm top-[50%] left-[50%] bg-[#EE3840] translate-y-[-50%] translate-x-[-50%] hover:opacity-90 hover:shadow-lg"
          >
            {/* <span className="text-white"> {t('SEARCH.SEARCH_RESULT_PAGE.SEE_MAP')}</span> */}
            <span className="text-white"> Xem bản đồ</span>

          </button>
        </div>
        <div className=" p-5 ">
        {/* <span className="uppercase font-semibold">{t('SEARCH.SEARCH_RESULT_PAGE.POINTS_OF_INTEREST')}</span> */}

          <span className="uppercase font-semibold">Những nơi gần đây</span>
        </div>
      </div>
      <div>
        <div className="rounded-t-md px-6 py-2 text-white bg-[#636363]">
          {cp_title?.map(
            (title) =>
              title.lang === lang && (
                <div key={title.lang}>
                  <span>{title.value}</span>
                </div>
              ),
          )}
        </div>
        <div className="pt-5">
          {cp_paragraphs?.map((cp_paragraph) => (
            cp_paragraph.lang === lang && cp_paragraph.id <= 3 && (
              <div key={cp_paragraph.id} className="flex items-start pb-4">
                <Image src={QUESTION} alt="FAQ question " className="basis-6 mr-2" />
                <div className="flex flex-col">
                  <span className="font-bold">{cp_paragraph.title}</span>
                  <span className="pt-1">{cp_paragraph.value}</span>
                </div>
              </div>
            )
          ))}
          <button className="uppercase border-2 border-[#e4e4e4] bg-[#e4e4e4] w-full mb-4 py-1 rounded-sm hover:opacity-90 hover:shadow-sm" >
            {/* <span> {t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_ALL')}</span> */}
            <span>Xem tất cả câu hỏi</span>

          </button>

          <button className=" border-2 border-[#0a7cff]  w-full mb-4 py-1 rounded-sm hover:opacity-90 hover:shadow-sm" >
            {/* <span className="text-[#0a7cff]">{t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_TITLE')}</span> */}
            <span className="text-[#0a7cff]">Đặt một câu hỏi</span>
              
          </button>
        </div>
      </div>
      <div className="border-[#e5e5e5] border-2 rounded-md">
        <div className="rounded-t-md px-6 py-2 text-white bg-[#636363]">
            {/* <span>{t('SEARCH.SEARCH_RESULT_PAGE.GUEST_POLICIES')}</span> */}
            <span>Chính sách khách hàng</span>

        </div>
        <div className="p-4">
          <p className="mb-2">Vietnamese demo test</p>
        </div>
      </div>
    </>
  );
};
export default SidebarSearch;
