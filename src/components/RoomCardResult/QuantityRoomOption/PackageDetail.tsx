import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddOutlineIcon from '@/assets/icons/AddOulineIcon';
import SubOutlineIcon from '@/assets/icons/SubOutlineIcon';
import WarningIcon from '@/assets/icons/WarningIcon';

type Props = {
  roomPackage: any;
  setPackageChose: Function;
  quantityRoom: number;
  setQuantityRoomValue: Function;
};

function PackageDetail({ roomPackage, setPackageChose, quantityRoom, setQuantityRoomValue }: Props) {
  const { i18n, t } = useTranslation();
  const [choseResult, setChoseResult] = useState<any>();
  const [quantity, setQuantity] = useState<number>(0);
  useEffect(() => {
    setChoseResult({
      package: roomPackage,
      quantity: quantity,
    });
  }, [quantity]);

  useEffect(() => {
    setPackageChose((prevValue: any) => {
      const temp = { ...prevValue };
      if (choseResult?.quantity === 0) {
        delete temp[`${roomPackage.id}`];
      } else {
        temp[`${roomPackage.id}`] = choseResult;
      }
      return temp;
    });
  }, [choseResult]);
  return (
    <div key={roomPackage?.id} className="md:m-w-1/3 md:w-1/3 w-full py-2">
      <div
        className={`relative flex flex-col py-6 px-4 mx-2 rounded-md ${quantity === 0 ? 'bg-[#edf5ef]' : 'bg-blue-0a'}`}
      >
        {quantity === 0 && (
          <WarningIcon className="absolute top-2 right-2 text-grey-2a cursor-pointer" width="18px" height="18px" />
        )}
        {quantity === 0 ? (
          roomPackage?.dbp_short_des.map(
            (des: any, index: number) =>
              des.lang === i18n.language && (
                <div key={index} className="mb-4 h-[28px]">
                  {des.value}
                </div>
              ),
          )
        ) : (
          <div className="flex items-center gap-1 mb-4">
            <button
              onClick={() => {
                setQuantity(quantity + 1);
                quantityRoom === 0 && setQuantityRoomValue(1);
              }}
            >
              <AddOutlineIcon width="28px" height="28px" className="text-white" />
            </button>
            <span className="text-white">{quantity}</span>
            <button
              onClick={() => {
                quantity > 1 && setQuantity(quantity - 1);
              }}
            >
              <SubOutlineIcon width="28px" height="28px" className="text-white" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between flex-wrap">
          <div className={`font-bold text-xl ${quantity === 0 ? 'text-grey-21' : 'text-white'}`}>
            + {roomPackage?.total_price}đ
          </div>
          {quantity === 0 ? (
            <div
              onClick={() => {
                setQuantity(1);
                quantityRoom === 0 && setQuantityRoomValue(1);
              }}
            >
              <button className="uppercase text-sm text-[#0a7cff] font-bold">{t('SEARCH.ROOM_TYPE.ADD')}</button>
            </div>
          ) : (
            <div
              onClick={() => {
                setQuantity(0);
              }}
            >
              <button className="uppercase text-sm text-white font-bold">{t('SEARCH.ROOM_TYPE.REMOVE')}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;
