import { createContext, useContext, useState } from 'react';

const StepperContext = createContext(null as any);

export function StepProvider({ children, handleClick }: { children: React.ReactNode; handleClick: Function }) {
  const [orderData, setOrderData] = useState(null);
  const [guestData, setGuestData] = useState<any[]>([]);
  const [specialRequire, setSpecialRequire] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);

  console.log('orderData', orderData);
  console.log('guestData', guestData);
  // console.log('specialRequire', specialRequire);
  // console.log('arrivalTime', arrivalTime);
  return (
    <StepperContext.Provider
      value={{
        orderData,
        setOrderData,
        guestData,
        setGuestData,
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
    specialRequire,
    setSpecialRequire,
    arrivalTime,
    setArrivalTime,
    handleClick,
  };
}
