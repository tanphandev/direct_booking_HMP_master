import { createContext, useContext, useState } from 'react';
import { OrderChooseValue } from '@/components/Booking/FillInfomation/constants';

const StepperContext = createContext(null as any);

export function StepProvider({ children, handleClick }: { children: React.ReactNode; handleClick: Function }) {
  const [orderData, setOrderData] = useState<PersonInformation>();
  const [guestData, setGuestData] = useState<any[]>([]);
  const [forSomeOne, setForSomeOne] = useState<PersonInformation>();
  const [forOther, setForOther] = useState<string>();
  const [viaTravelX, setViaTravelX] = useState<boolean>();
  const [bookFor, setBookFor] = useState<OrderChooseValue>(OrderChooseValue.VALUE1);
  const [specialRequire, setSpecialRequire] = useState(null);
  const [arrivalTime, setArrivalTime] = useState<ArrivalTimeType>();
  return (
    <StepperContext.Provider
      value={{
        orderData,
        setOrderData,
        guestData,
        setGuestData,
        forSomeOne,
        setForSomeOne,
        forOther,
        viaTravelX,
        setViaTravelX,
        setForOther,
        bookFor,
        setBookFor,
        specialRequire,
        setSpecialRequire,
        arrivalTime,
        setArrivalTime,
        handleClick,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
}

export function useStepContext() {
  const {
    orderData,
    setOrderData,
    guestData,
    setGuestData,
    forSomeOne,
    setForSomeOne,
    forOther,
    setForOther,
    bookFor,
    viaTravelX,
    setViaTravelX,
    setBookFor,
    specialRequire,
    setSpecialRequire,
    arrivalTime,
    setArrivalTime,
    handleClick,
  } = useContext(StepperContext);

  return {
    orderData,
    setOrderData,
    guestData,
    setGuestData,
    forSomeOne,
    setForSomeOne,
    forOther,
    setForOther,
    bookFor,
    viaTravelX,
    setViaTravelX,
    setBookFor,
    specialRequire,
    setSpecialRequire,
    arrivalTime,
    setArrivalTime,
    handleClick,
  };
}
