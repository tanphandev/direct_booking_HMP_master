'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import LanguageMenu from './LanguageMenu/LanguageMenu';
import Logo from '@/../public/assets/logo/Logo.png';
import Path from '@/routes/Path';

function Header() {
  const { hotel_slug } = useParams();
  return (
    <div className="container shadow-[0_3px_6px_rgba(0,0,0,.16)]">
      <div className="flex justify-between items-center px-[15px] mx-[94px]">
        <Link href={Path.HOME(hotel_slug as string)}>
          <Image src={Logo} alt="Royal Hotel" width={68} height={68} />
        </Link>
        <LanguageMenu />
      </div>
    </div>
  );
}

export default Header;
