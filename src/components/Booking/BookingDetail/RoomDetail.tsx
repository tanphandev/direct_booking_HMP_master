import classNames from 'classnames';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';

type Props = {
  roomName?: string;
  quantityRoom?: number;
  packages?: Array<any>;
};
function RoomDetail({ roomName, quantityRoom, packages }: Props) {
  const { i18n } = useTranslation();
  return (
    <div
      className={classNames('text-grey-21', {
        'border-b-[1px] border-grey-d9 pb-4 mb-4': !isEmpty(packages),
      })}
    >
      <h3 className="font-bold">
        {roomName} x {quantityRoom}
      </h3>
      {!isEmpty(packages) && <p className="text-base font-bold mt-2">Special offers:</p>}
      <ul className="list-disc pl-6">
        {packages?.map((packageItem, index) => (
          <li key={index}>
            {packageItem?.quantity} x{' '}
            {packageItem?.package?.dbp_title.find((item: any) => item?.lang === i18n.language).value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomDetail;
