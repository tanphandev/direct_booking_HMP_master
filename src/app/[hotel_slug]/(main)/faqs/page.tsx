'use client';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

import QuestionIcon from '@/assets/icons/QuestionIcon';
import { MODAL_NAME } from '@/types/modal';
import i18n from '@/i18n/i18n';
import { useTranslation } from 'next-i18next';
function FAQSPage() {
  const { t } = useTranslation();
  //mock data
  const questions = [
    {
      question: 'How many nights should I stay at Anurak Lodge?',
      answer: 'We recommend a minimum of three nights. You need two full days to enjoy our tours and activities.',
    },
    {
      question: 'question 2 en',
      answer: 'answer 2 en',
    },
    {
      question: 'question 3 en',
      answer: 'answer 3 en',
    },
    {
      question: 'question 4 en',
      answer: 'answer 4 en',
    },
  ];
  const collapseWrapperRef = useRef<HTMLDivElement>(null);
  const [collapseOpenIndex, setCollapseOpenIndex] = useState<number | null>(null);
  const { openModal } = useModalContext();
  useOnClickOutside(collapseWrapperRef, () => {
    setCollapseOpenIndex(null);
  });

  return (
    <div className="main-container py-8 px-4">
      <h1 className="text-[32px] font-bold mb-2">Frequently Asked Questions</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat.{' '}
      </p>
      <p className="mb-4">
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
        commodo consequat.{' '}
      </p>
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
        {questions.map((question, index) => (
          <div
            key={index}
            className={classNames('collapse collapse-arrow bg-white shadow-custom_3 rounded-md', {
              'my-4': collapseOpenIndex === index,
            })}
          >
            <input
              checked={collapseOpenIndex === index ? true : false}
              onClick={(e) => {
                collapseOpenIndex === index ? setCollapseOpenIndex(null) : setCollapseOpenIndex(index);
              }}
              type="checkbox"
            />
            <div className="flex items-center collapse-title text-xl font-medium pl-6">
              <QuestionIcon width="24px" height="24px" className="mr-4" />
              <span className="text-[15px] font-bold">{question.question}</span>
            </div>
            <div className="collapse-content pl-6">
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSPage;
