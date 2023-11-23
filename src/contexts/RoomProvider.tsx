'use client';
import { createContext, useContext, useState } from 'react';

const RoomContext = createContext(null as any);

export function RoomProvider({ children }: { children: React.ReactNode }) {
  const [roomChoseValue, setRoomChoseValue] = useState<any>({});
  return <RoomContext.Provider value={{ roomChoseValue, setRoomChoseValue }}>{children}</RoomContext.Provider>;
}

export function useRoomContext() {
  const { roomChoseValue, setRoomChoseValue } = useContext(RoomContext);
  return {
    roomChoseValue,
    setRoomChoseValue,
  };
}
