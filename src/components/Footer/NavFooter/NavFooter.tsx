'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';
import Path from '@/routes/Path';

function NavFooter() {
  const { i18n } = useTranslation();
  const { hotel_slug } = useParams();
  const { footer_navigation }: { footer_navigation: any[] } = useAppSelector((state) => state.business);
  console.log("footer",footer_navigation)
  return (
    <div className="flex flex-col sm:flex-row items-center mb-4 text-base font-normal text-white">
      {footer_navigation?.map((item, index) => (
        <Link
          key={index}
          href={Path.GET_PAGE_BY_NAME(hotel_slug as string, item.page_slug)}
          className="my-2 mx-4 hover:underline"
        >
          {item.page_title.find((valueItem: any) => valueItem?.lang === i18n.language)?.value}
        </Link>
      ))}
    </div>
  );
}

export default NavFooter;
