import { useModalContext } from '@/contexts/ModalProvider';
import { MODAL_NAME } from '@/types/modal';
import WarningIcon from '@/assets/icons/WarningIcon';

function StayManagementCheckbox() {
  const { openModal } = useModalContext();
  return (
    <div className="flex justify-between bg-green-1d rounded-md text-white p-4">
      <div className="flex gap-x-2 items-center">
        <input type="checkbox" className="w-5 h-5 cursor-pointer" />
        <span>I would like to manage my stay on my smartphone, via TravelX by HMP</span>
      </div>
      <button
        onClick={() => {
          openModal(MODAL_NAME.TRAVELX);
        }}
      >
        <WarningIcon width="24px" height="24px" />
      </button>
    </div>
  );
}

export default StayManagementCheckbox;
