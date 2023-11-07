import Image from 'next/image';

import LanguageMenu from './LanguageMenu/LanguageMenu';
import Logo from '@/../public/assets/logo/Logo.png';
import Link from 'next/link';
import Path from '@/routes/Path';

function Header() {
  return (
    <div className="container shadow-[0_3px_6px_rgba(0,0,0,.16)]">
      <div className="flex justify-between items-center px-[15px] mx-[32px]">
        <Link href={Path.HOME}>
          <Image src={Logo} alt="Royal Hotel" width={68} height={68} />
        </Link>
        <LanguageMenu />
      </div>
    </div>
  );
}

export default Header;
