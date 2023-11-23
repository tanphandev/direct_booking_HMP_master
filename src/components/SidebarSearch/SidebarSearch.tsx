'use client';
import Image from 'next/image';
import GG_MAP from "@/../public/assets/image/gmap.jpg"


import QUESTION from "@/assets/icons/question.svg"
import Amenities from "@/assets/icons/Amenities";
import { useModalContext } from '@/contexts/ModalProvider';
import { MODAL_NAME } from '@/types/modal';
import dynamic from 'next/dynamic'
const BookingSearchBoxNoSSR = dynamic(() => import('../BookingSearchBox/BookingSearchBox'), { ssr: false })
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useParams, useRouter } from 'next/navigation';
import Path from '@/routes/Path';
import { getCommonPages } from '@/store/commonPages/commonPagesAction';
import { getDateNowTimestamp } from '@/utils/helper';
const SidebarSearch = () => {
  const { openModal } = useModalContext();
  const { t } = useTranslation();
  const lang = i18n.language
  const business_navigation = useAppSelector((state) => state.business.basic_business_info.business_navigation) || [];
  const business_nav = business_navigation?.find((item: business_navigation) => item.cp_slug === "faqs");
  const cp_title: cp_title[] = business_nav?.cp_title
  const cp_paragraphs: cp_paragraph[] = business_nav?.cp_paragraphs
  const footer_navigation = (useAppSelector((state) => state.business.footer_navigation))
  const page_title: cp_title[] = footer_navigation.find((page: footer_navigation) => page.page_slug === "english_test").page_title;
  const router = useRouter()
  const { hotel_slug } = useParams()
  const dispatch = useAppDispatch();
  const GotoFaqsPage = () => {
    router.push(Path.FAQS(hotel_slug as string));
    const business_slug = hotel_slug
    const datecreated = getDateNowTimestamp()
    const pages_slug = 'faqs'
    dispatch(getCommonPages({ business_slug, datecreated, pages_slug }));
  };
  return (
    <>
      <div className="rounded-t-md bg-[#636363]">
        <BookingSearchBoxNoSSR />
      </div>
      <button 
        className="rounded-md flex my-4 py-2 px-6 w-full items-center justify-between bg-[#0A7CFF] hover:opacity-90 hover:shadow-lg"
        onClick={() => {
          openModal(MODAL_NAME.AMENITIES_SELECT_MODAL);
        }}
      >
        <span className="flex-none ">
          <Amenities />
        </span>
        <span className="text-white flex-auto uppercase  align-middle px-3  " >{t('SEARCH.SEARCH_RESULT_PAGE.AMENITIES')}</span>
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
            <span className="text-white"> {t('SEARCH.SEARCH_RESULT_PAGE.SEE_MAP')}</span>

          </button>
        </div>
        <div className=" p-5 ">
          <span className="uppercase font-semibold">{t('SEARCH.SEARCH_RESULT_PAGE.POINTS_OF_INTEREST')}</span>

        </div>
      </div>
      <div>
        {business_navigation &&(
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
        )}
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
          <button onClick={GotoFaqsPage} className="uppercase border-2 border-[#e4e4e4] w-full mb-4 py-1 rounded-sm hover:opacity-90 hover:shadow-sm" >
            <span> {t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_ALL')}</span>
          </button>
          <button
            onClick={() => {
              openModal(MODAL_NAME.ASK_QUESTION);
            }}
            className=" border-2 border-[#0a7cff]  w-full mb-4 py-1 rounded-sm hover:opacity-90 hover:shadow-sm"
          >
            <span className="text-[#0a7cff]">{t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_TITLE')}</span>

          </button>
        </div>
      </div>
      <div className="border-[#e5e5e5] border-2 rounded-md">
        <div className="rounded-t-md px-6 py-2 text-white bg-[#636363]">
          <span>{t('SEARCH.SEARCH_RESULT_PAGE.GUEST_POLICIES')}</span>

        </div>
        <div className="p-4">
          {page_title?.map((title) => (
            title.lang === lang && (
              <div key={title.lang}>
                <p className='mb-2'>{title.value}</p>
              </div>
            )
          ))}

        </div>
      </div>
    </>
  );
};
export default SidebarSearch;