import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
      <div className="flex flex-col bg-[#edf5ef] py-6 px-4 mx-2 rounded-md">
        {roomPackage?.dbp_short_des.map(
          (des: any, index: number) =>
            des.lang === i18n.language && (
              <div key={index} className="mb-4">
                {des.value}
              </div>
            ),
        )}
        <div className="flex items-center justify-between flex-wrap">
          <div className="font-bold text-xl">+ {roomPackage?.total_price}đ</div>
          <div
            onClick={() => {
              setQuantity(quantity + 1);
              quantityRoom === 0 && setQuantityRoomValue(1);
            }}
          >
            <a className="uppercase text-[#0a7cff] font-bold">{t('SEARCH.ROOM_TYPE.ADD')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;
