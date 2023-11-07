import Image from 'next/image';

import FooterImg from '@/../public/assets/image/FooterImg.png';
import NavFooter from './NavFooter/NavFooter';
import AbaPay from '@/../public/assets/image/aba-pay.svg';
import Khqr from '@/../public/assets/image/khqr.svg';
import Visa from '@/../public/assets/image/visa.svg';
import MasterCard from '@/../public/assets/image/master_card.svg';
import UnionPay from '@/../public/assets/image/union_pay.svg';
import JcbPay from '@/../public/assets/image/JCB_logo.png';
function Footer() {
  return (
    <div>
      <div className="bg-grey p-8 flex flex-col items-center">
        <Image className="my-4" src={FooterImg} alt="HMP Master Footer" width={170} height={128} />
        <NavFooter />
      </div>
      <div className="flex justify-end items-center bg-grey-2a py-5 px-8">
        <p className="text-white text-sm mr-2">We accept:</p>
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
