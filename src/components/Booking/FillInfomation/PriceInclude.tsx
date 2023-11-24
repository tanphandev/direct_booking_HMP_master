import { priceIncludes } from '@/constants/booking';

function PriceInclude() {
  return (
    <div className="flex flex-wrap">
      {priceIncludes.map((something, index) => (
        <span
          key={index}
          className="transition-colors text-sm bg-black-0.1 px-[10px] py-[5px] m-1 rounded-2xl cursor-pointer hover:bg-black-0.3"
        >
          {something}
        </span>
      ))}
    </div>
  );
}

export default PriceInclude;
