import { useModalContext } from '@/contexts/ModalProvider';
import { MODAL_NAME } from '@/types/modal';
import WarningIcon from '@/assets/icons/WarningIcon';

function StayManagementCheckbox() {
  const { openModal } = useModalContext();

  return (
    <div className="flex justify-between bg-green-1d rounded-md text-white p-4">
      <div className="flex gap-x-2 items-center">
        <input id="manage-stay-on-phone" type="checkbox" className="w-4 h-4 cursor-pointer" />
        <label htmlFor="manage-stay-on-phone" className="cursor-pointer">
          I would like to manage my stay on my smartphone, via TravelX by HMP
        </label>
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
