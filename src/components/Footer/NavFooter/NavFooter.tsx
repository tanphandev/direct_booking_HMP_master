'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { navFooter } from '../constants';

function NavFooter() {
  const { hotel_slug } = useParams();
  return (
    <div className="mb-4 text-base font-normal text-white">
      {navFooter.map((item, index) => (
        <Link key={index} href={item.path(hotel_slug)} className="my-2 mx-4 hover:underline">
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default NavFooter;
