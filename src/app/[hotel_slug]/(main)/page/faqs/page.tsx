'use client';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

import QuestionIcon from '@/assets/icons/QuestionIcon';
import { MODAL_NAME } from '@/types/modal';
import i18n from '@/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useParams } from 'next/navigation';
import { getDateNowTimestamp } from '@/utils/helper';
import { getCommonPages } from '@/store/commonPages/commonPagesAction';
function FAQSPage() {
  const { t } = useTranslation();

  const pageData: CommonPages = useAppSelector((state) => state.commonPages.common_pages);
  const dispatch = useAppDispatch();
  const [isUseEffect,setIsUseEffect]=useState(false)
  const hotel_slug  = useParams().hotel_slug
  useEffect(() => {
    if (pageData&&!isUseEffect) {
      const business_slug = hotel_slug
      const datecreated = getDateNowTimestamp()
      const pages_slug = 'faqs'
      dispatch(getCommonPages({ business_slug, datecreated, pages_slug }));
      setIsUseEffect(true)
    }
  },[]);
  const collapseWrapperRef = useRef<HTMLDivElement>(null);
  const [collapseOpenIndex, setCollapseOpenIndex] = useState<number | null>(null);
  const { openModal } = useModalContext();
  useOnClickOutside(collapseWrapperRef, () => {
    setCollapseOpenIndex(null);
  });
  const lang = i18n.language;
  const cp_body_value = pageData.cp_body?.find((cp) => cp.lang === lang)?.value;
  const cp_title_value = pageData.cp_title?.find((cp) => cp.lang === lang)?.value;
  const questions: cp_paragraph[] = pageData.cp_paragraphs;

  return (
    <div className="main-container py-8 px-4">
      <h1 className="text-[32px] font-bold mb-2">{cp_title_value}</h1>
      <div dangerouslySetInnerHTML={{ __html: cp_body_value || '' }} />
      <div className="text-end mb-4">
        <button
          onClick={() => {
            openModal(MODAL_NAME.ASK_QUESTION);
          }}
          className="text-sm h-[36px] px-4 primary-button rounded-[4px]"
        >
          {t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_TITLE')}
        </button>
      </div>
      <div ref={collapseWrapperRef} className="mb-8">
        {questions?.map(
          (question, index) =>
            question.lang === lang && (
              <div
                key={index}
                className={classNames('collapse collapse-arrow bg-white shadow-custom_3 rounded-md', {
                  'my-4': collapseOpenIndex === index,
                })}
              >
                <input
                  checked={collapseOpenIndex === index ? true : false}
                  onChange={(e) => {
                    collapseOpenIndex === index ? setCollapseOpenIndex(null) : setCollapseOpenIndex(index);
                  }}
                  type="checkbox"
                />
                <div className="flex items-center collapse-title text-xl font-medium pl-6">
                  <QuestionIcon width="24px" height="24px" className="mr-4" />
                  <span className="text-[15px] font-bold">{question.title}</span>
                </div>
                <div className="collapse-content pl-6">
                  <p>{question.value}</p>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default FAQSPage;
