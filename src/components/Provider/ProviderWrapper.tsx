'use client';
import React from 'react';
import { Provider } from 'react-redux';

import store from '@/store';
import { ModalProvider } from '@/contexts/ModalProvider';
import { RoomProvider } from '@/contexts/RoomProvider';

function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <RoomProvider>{children}</RoomProvider>
      </ModalProvider>
    </Provider>
  );
}

export default ProviderWrapper;
