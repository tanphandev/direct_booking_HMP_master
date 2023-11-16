'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useAppSelector } from '@/hooks';

import Path from '@/routes/Path';

function NavFooter() {
  const { hotel_slug } = useParams();
  const { footer_navigation }: { footer_navigation: any[] } = useAppSelector((state) => state.business);
  return (
    <div className="flex flex-col sm:flex-row items-center mb-4 text-base font-normal text-white">
      {footer_navigation?.map((item, index) => (
        <Link
          key={index}
          href={Path.GET_PAGE_BY_NAME(hotel_slug as string, item.page_slug)}
          className="my-2 mx-4 hover:underline"
        >
          {item.page_title[0].value}
        </Link>
      ))}
    </div>
  );
}

export default NavFooter;
