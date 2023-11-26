import GuestInformation from './GuestInformation';
import PriceInclude from './PriceInclude';
import SpecialRequire from './SpecialRequire';

type Props = {
  title: string;
  guestFormRef: any;
  guestFormIndex?: number;
  handleUseOrderData: Function;
  specialRequireRef: any;
  guestId: string;
  roomTypeId: number;
};
function GuestOfRoom({ title, guestId, guestFormRef, guestFormIndex, handleUseOrderData, specialRequireRef }: Props) {
  return (
    <div className="mb-8">
      <GuestInformation
        title={title}
        handleUseOrderData={handleUseOrderData}
        inputId={guestId}
        guestFormRef={guestFormRef}
        guestFormIndex={guestFormIndex}
        isReuseOrderData={true}
      />
      <PriceInclude />
      <SpecialRequire ref={specialRequireRef} />
    </div>
  );
}

export default GuestOfRoom;
