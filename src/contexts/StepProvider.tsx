import { createContext, useContext, useState } from 'react';

const StepperContext = createContext(null as any);

export function StepProvider({ children, handleClick }: { children: React.ReactNode; handleClick: Function }) {
  const [userData, setUserData] = useState('');

  return <StepperContext.Provider value={{ userData, setUserData, handleClick }}>{children}</StepperContext.Provider>;
}

export function useStepContext() {
  const { userData, setUserData, handleClick } = useContext(StepperContext);

  return { userData, setUserData, handleClick };
}
