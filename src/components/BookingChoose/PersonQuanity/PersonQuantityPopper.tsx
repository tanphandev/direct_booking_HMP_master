import { forwardRef } from 'react';

import PersonDetailQuantity from './PersonDetailQuantity';

export enum PersonType {
  ADULT = 'Adults',
  CHILD = 'Child',
}
const PersonQuantityPopper = forwardRef<any, PersonQuantityPopperProps>(function Component(
  { adultQuantity, childQuantity, setAdultQuantity, setChildQuantity },
  ref,
) {
  return (
    <div ref={ref} className="hidden absolute top-[82px] left-0 w-[280px] py-2 bg-white rounded-md">
      <PersonDetailQuantity personType={PersonType.ADULT} quantity={adultQuantity} setQuantity={setAdultQuantity} />
      <PersonDetailQuantity personType={PersonType.CHILD} quantity={childQuantity} setQuantity={setChildQuantity} />
    </div>
  );
});
export default PersonQuantityPopper;
