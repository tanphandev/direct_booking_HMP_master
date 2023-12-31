'use client';
import { memo, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import ArrowDown from '@/assets/icons/ArrowDown';
interface QuantityRoomOptionProps {
  room: any;
  maxQuantity: number;
  quantityRoom: number;
  setQuantityRoomValue: Function;
  roomChose: any;
  setRoomChose: Function;
  packageChose: any;
  setPackageChose: Function;
  handleRoomChoseChange: Function;
}
const QuantityRoomOption: React.FC<QuantityRoomOptionProps> = ({
  room,
  maxQuantity,
  quantityRoom,
  setQuantityRoomValue,
  roomChose,
  setRoomChose,
  packageChose,
  setPackageChose,
  handleRoomChoseChange,
}) => {
  const quantityRoomOptionRef = useRef<HTMLUListElement>(null);
  const generateQuantityArray = (maxQuantity: number) => {
    return Array.from({ length: maxQuantity }, (_, index) => index);
  };

  const quantity = generateQuantityArray(maxQuantity);

  /* Listen even click outside quantity menu */
  useOnClickOutside(quantityRoomOptionRef, () => {
    quantityRoomOptionRef.current?.classList.add('hidden');
  });

  /* Toggle menu */
  const toggleMenu = () => {
    quantityRoomOptionRef.current?.classList.toggle('hidden');
  };

  /* Change quantity */
  const handleChangeValue = (value: number) => {
    setQuantityRoomValue(value);
    toggleMenu();
  };

  return (
    <div className="relative pt-2 ">
      <div
        onClick={toggleMenu}
        className="flex justify-between items-center cursor-pointer px-2 py-2 border border-[#e4e4e4] rounded-md"
      >
        <p className="text-base text-grey-21 font-bold ml-2">{quantityRoom}</p>
        <ArrowDown width="24px" height="24px" />
      </div>
      <ul
        ref={quantityRoomOptionRef}
        className="hidden shadow-2xl absolute max-h-[250px] overflow-auto top-0 w-[112px] bg-white rounded-md  py-2 "
      >
        {quantity.map((value, index) => (
          <li
            className="transition-colors h-[48px] text-sm px-4 leading-[48px] hover:bg-black-0.1"
            key={index}
            onClick={() => {
              handleChangeValue(value);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(QuantityRoomOption);
