import { useStepContext } from '@/contexts/StepProvider';
import AdditionalInformation from './AdditionalInformation';
import ArrivalTime from './ArrivalTime';
import InformationForm from './InfomationForm';
import InformationOfGuests from './InformationOfGuests';
import SpecialRequire from './SpecialRequire';
import StayManagementCheckbox from './StayManagementCheckbox';

function OrderInfomation() {
  const { handleClick } = useStepContext();
  return (
    <div className="flex-1">
      <h2 className="font-bold mb-2">Information</h2>
      <InformationForm />
      <AdditionalInformation />
      <StayManagementCheckbox />
      <InformationOfGuests />
      <SpecialRequire />
      <ArrivalTime />
      <div className="text-end mt-12">
        <button onClick={() => handleClick('next')} className="primary-button h-9 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}

export default OrderInfomation;
