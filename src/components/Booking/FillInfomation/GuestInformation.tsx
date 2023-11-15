import classNames from 'classnames';
import InformationForm from './InfomationForm';

function GuestInformation({ inputId, isReuseOrderData = false, guestFormRef }: GuestInformationProps) {
  return (
    <div>
      <div>
        <div
          className={classNames('flex justify-between', {
            'border-b-2 border-grey-21 py-2 mb-4': isReuseOrderData,
          })}
        >
          <h3 className="font-bold ">Guest information</h3>
          <div
            className={classNames('flex items-center gap-x-2 cursor-pointer', {
              hidden: !isReuseOrderData,
            })}
          >
            <input id={inputId} className="w-4 h-4 cursor-pointer" type="checkbox" />
            <label className="cursor-pointer" htmlFor={inputId}>
              Use the same information above
            </label>
          </div>
        </div>
        <InformationForm ref={guestFormRef} type="guest" />
      </div>
    </div>
  );
}

export default GuestInformation;
