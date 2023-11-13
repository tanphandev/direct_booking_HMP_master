import classNames from 'classnames';
import InformationForm from './InfomationForm';

function GuestInformation({ isReuseOrderData = false }: GuestInformationProps) {
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
            <input id="reuse-data-order" className="w-4 h-4" type="checkbox" />
            <label className="cursor-pointer" htmlFor="reuse-data-order">
              Use the same information above
            </label>
          </div>
        </div>
        <InformationForm />
      </div>
    </div>
  );
}

export default GuestInformation;
