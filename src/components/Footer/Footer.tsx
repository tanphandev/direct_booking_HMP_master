'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import NavFooter from './NavFooter/NavFooter';
import AbaPay from '@/../public/assets/image/aba-pay.svg';
import Khqr from '@/../public/assets/image/khqr.svg';
import Visa from '@/../public/assets/image/visa.svg';
import MasterCard from '@/../public/assets/image/master_card.svg';
import UnionPay from '@/../public/assets/image/union_pay.svg';
import JcbPay from '@/../public/assets/image/JCB_logo.png';
import { useAppSelector } from '@/hooks';

function Footer() {
  const { t } = useTranslation();
  const { setting } = useAppSelector((state) => state.business);
  return (
    <div>
      <div className="bg-grey-33 p-8 flex flex-col items-center">
        <Image
          className="my-4"
          src={setting?.db_footer_logo?.uri_full}
          alt="HMP Master Footer"
          width={170}
          height={128}
        />
        <NavFooter />
      </div>
      <div className="flex justify-end items-center bg-grey-2a py-5 px-8">
        <p className="text-white text-sm mr-2">{t('FOOTER.WE_ACCEPT')}</p>
        <Image className="mx-1" src={AbaPay} width={40} height={24} alt="aba_pay" />
        <Image className="mx-1" src={Khqr} width={40} height={24} alt="khqr_pay" />
        <Image className="mx-1" src={Visa} width={40} height={24} alt="visa_pay" />
        <Image className="mx-1" src={MasterCard} width={40} height={24} alt="master_card" />
        <Image className="mx-1" src={UnionPay} width={40} height={24} alt="union_pay" />
        <Image className="mx-1" src={JcbPay} width={40} height={24} alt="jcb_pay" />
      </div>
    </div>
  );
}

export default Footer;
