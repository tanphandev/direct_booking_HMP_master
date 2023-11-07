import Link from 'next/link';
import { navFooter } from '../constants';

function NavFooter() {
  return (
    <div className="mb-4 text-base font-normal text-white">
      {navFooter.map((item, index) => (
        <Link key={index} href={item.path} className="my-2 mx-4 hover:underline">
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default NavFooter;
