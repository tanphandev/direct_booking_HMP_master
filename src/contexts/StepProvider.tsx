import { createContext, useContext, useState } from 'react';

const StepperContext = createContext(null as any);

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState('');

  return <StepperContext.Provider value={{ userData, setUserData }}>{children}</StepperContext.Provider>;
}

export function useStepContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
