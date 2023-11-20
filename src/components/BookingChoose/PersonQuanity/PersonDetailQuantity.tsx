import AddIcon from '@/assets/icons/AddIcon';
import SubIcon from '@/assets/icons/SubIcon';
import { PersonType } from './PersonQuantityPopper';
import { useTranslation } from 'react-i18next';

type PersonQuantityProps = {
  personType: PersonType;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

function PersonDetailQuantity({ personType, quantity = 0, setQuantity }: PersonQuantityProps) {
  const { t } = useTranslation();
  /* increase 1 unit */
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  /* decrease 1 unit */
  const decrease = () => {
    if (personType === PersonType.ADULT && quantity === 1) return;
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };
  return (
    <div className="h-[56px] w-full flex justify-between items-center bg-white px-4 py-2">
      <span className="text-grey-21">
        {personType === PersonType.ADULT
          ? quantity <= 1
            ? t('HOMEPAGE.ADULT')
            : t('HOMEPAGE.ADULTS')
          : quantity <= 1
          ? t('HOMEPAGE.CHILD')
          : t('HOMEPAGE.CHILDREN')}
      </span>
      <div className="flex">
        <button
          onClick={decrease}
          className="transition-colors w-[40px] h-[40px] flex justify-center items-center bg-grey-cc hover:bg-grey-d9 mx-2 rounded-full"
        >
          <SubIcon width="24px" height="24px" className="text-grey-21" />
        </button>
        <span className="text-grey-21 leading-[40px]">{quantity}</span>
        <button
          onClick={increase}
          className="transition-colors w-[40px] h-[40px] flex justify-center items-center bg-grey-cc hover:bg-grey-d9 mx-2 rounded-full"
        >
          <AddIcon width="24px" height="24px" className="text-grey-21" />
        </button>
      </div>
    </div>
  );
}

export default PersonDetailQuantity;
