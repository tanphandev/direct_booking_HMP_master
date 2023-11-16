'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useAppSelector } from '@/hooks';

import LanguageMenu from './LanguageMenu/LanguageMenu';
import Path from '@/routes/Path';

function Header() {
  const { hotel_slug } = useParams();
  const { setting } = useAppSelector((state) => state.business);
  return (
    <div className="container shadow-[0_3px_6px_rgba(0,0,0,.16)]">
      <div className="flex justify-between items-center px-[15px] md:mx-6 lg:mx-[116px]">
        <Link href={Path.HOME(hotel_slug as string)}>
          <Image src={setting?.db_header_logo?.uri_full} alt="Royal Hotel" width={68} height={68} />
        </Link>
        <LanguageMenu />
      </div>
    </div>
  );
}

export default Header;
