import { createRef, forwardRef, useImperativeHandle, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

import PersonIcon from '@/assets/icons/PersonIcon';
import PersonQuantityPopper from './PersonQuantityPopper';
import { useTranslation } from 'react-i18next';

export type PersonQuanityRefProps = {
  adults: number;
  child: number;
};

const PersonQuanity = forwardRef<PersonQuanityRefProps, {}>(function Component({}, ref) {
  const { t } = useTranslation();
  const [adultQuantity, setAdultQuantity] = useState<number>(2);
  const [childQuantity, setChildQuantity] = useState<number>(0);
  const personQuantityPopperRef = createRef<HTMLElement>();
  const toggleShowPopper = () => {
    personQuantityPopperRef.current?.classList.toggle('hidden');
  };

  useOnClickOutside(personQuantityPopperRef, () => {
    personQuantityPopperRef.current?.classList.add('hidden');
  });

  useImperativeHandle(ref, () => ({
    adults: adultQuantity,
    child: childQuantity,
  }));
  return (
    <div className="relative">
      <div onClick={toggleShowPopper} className="h-[80px] flex items-center bg-white text-grey-21 rounded-md p-4 mb-2">
        <PersonIcon width="24px" height="24px" color="#212529" className="mr-4" />
        <p className="text-base md:text-lg font-bold">
          {adultQuantity} {adultQuantity <= 1 ? t('HOMEPAGE.ADULT') : t('HOMEPAGE.ADULTS')}
        </p>
        <span className="px-2 text-black-0.2">●</span>
        <p className="text-base md:text-lg font-bold">
          {childQuantity} {childQuantity <= 1 ? t('HOMEPAGE.CHILD') : t('HOMEPAGE.CHILDREN')}
        </p>
      </div>
      <PersonQuantityPopper
        ref={personQuantityPopperRef}
        adultQuantity={adultQuantity}
        childQuantity={childQuantity}
        setAdultQuantity={setAdultQuantity}
        setChildQuantity={setChildQuantity}
      />
    </div>
  );
});

export default PersonQuanity;
