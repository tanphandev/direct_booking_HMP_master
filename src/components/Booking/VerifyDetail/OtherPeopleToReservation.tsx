import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useStepContext } from '@/contexts/StepProvider';
import { toast } from 'react-toastify';
import OtherPeopleInput from './OtherPeopleInput';

type Props = {
  index: number;
  room: any;
  otherPeopleFormRef: React.MutableRefObject<
    Array<{
      formik: any;
      id: string;
    }>
  >;
  handleSubmit: Function;
};

function OtherPeopleToReservation({ index, room, otherPeopleFormRef, handleSubmit }: Props) {
  const { roomTypes, setRoomTypes } = useStepContext();
  const [isShowAddPeople, setIsShowAddPeople] = useState<boolean>(false);
  const [personFormList, setPersonFormList] = useState<
    Array<{
      id: string;
    }>
  >([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setPersonFormList([
        {
          id: uuidv4(),
        },
      ]);
      setIsShowAddPeople(true);
    } else {
      setIsShowAddPeople(false);
    }
  };

  const handleAddPerson = () => {
    setPersonFormList((prev) => [
      ...prev,
      {
        id: uuidv4(),
      },
    ]);
  };

  const handleDelete = (id: string) => {
    const updatedPersonFormList = personFormList.filter((person: any) => person.id !== id);
    setPersonFormList(updatedPersonFormList);
  };

  const handleDeleteItems = (ItemIds: string[]) => {
    const updatedPersonFormList = personFormList.filter((person: any) => !ItemIds.includes(person?.id));
    setPersonFormList(updatedPersonFormList);
  };

  const handleSubmitAddPeopleToReservation = () => {
    const itemIdInvalid: string[] = [];
    const peopleToReservation: any[] = [];
    otherPeopleFormRef.current?.forEach((item) => {
      item?.formik.handleSubmit();
      const isValid = item?.formik?.dirty && item?.formik?.isValid;
      if (!isValid) {
        itemIdInvalid.push(item?.id);
      } else {
        peopleToReservation.push(item?.formik.values);
      }
    });
    handleDeleteItems(itemIdInvalid);
    let roomTypeTemp: any[] = roomTypes;
    roomTypeTemp?.forEach((roomItem) => {
      if (roomItem === room) {
        const existingGuestStayStrings = roomItem.guest_stay.map((item: any) => JSON.stringify(item));
        const peopleToReservationStrings = peopleToReservation.map((item: any) => JSON.stringify(item));

        const mergedStrings = [...existingGuestStayStrings, ...peopleToReservationStrings];
        const mergedSet = new Set(mergedStrings);
        const mergedUniqueObjects = Array.from(mergedSet).map((item: string) => JSON.parse(item));

        roomItem.guest_stay = mergedUniqueObjects;
      }
    });
    toast.success('Add people success');
    setRoomTypes(roomTypeTemp);
  };
  return (
    <div className="mt-4">
      <div className="flex items-center mb-2">
        <input
          className="w-4 h-4 my-1 mr-2 cursor-pointer"
          id={`other-people-reservation-${index}`}
          type="checkbox"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleCheckboxChange(e);
          }}
        />
        <label className="text-sm font-bold cursor-pointer" htmlFor={`other-people-reservation-${index}`}>
          Add people to your reservation
        </label>
      </div>
      <p className="text-sm">
        A link will be sent to their emails directing them to TravelX by HMP, an app that allows guests to effortlessly
        manage their stay on their smartphone.
      </p>
      {/* add other people form */}
      {isShowAddPeople && (
        <div className="bg-grey-f5 mt-4 border border-grey-f5">
          <div className="grid grid-cols-12 py-2">
            <div className="col-span-1" />
            <div className="col-span-4 font-bold">Guest name</div>
            <div className="col-span-6 font-bold ml-2">Email</div>
            <div className="col-span-1" />
          </div>
          {personFormList.map((personFormItem, index) => (
            <OtherPeopleInput
              index={index}
              key={personFormItem.id}
              id={personFormItem.id}
              handleDelete={handleDelete}
              ref={(el) => {
                if (el) {
                  otherPeopleFormRef.current[index] = el;
                }
              }}
            />
          ))}
          <div className="grid grid-cols-12">
            <div className="col-span-1" />
            <div onClick={handleAddPerson} className="col-span-4 mb-2">
              <button className="h-9 px-4 rounded-md bg-white">+ Add</button>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-white py-2">
            <div className="col-span-1" />
            <div className="col-span-4">
              <button
                onClick={() => {
                  handleSubmitAddPeopleToReservation();
                }}
                className="primary-button text-sm h-9 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtherPeopleToReservation;
