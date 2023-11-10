'use client';
import React from 'react';
import { Provider } from 'react-redux';

import store from '@/store';
import { ModalProvider } from '@/contexts/ModalProvider';

function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ModalProvider>{children}</ModalProvider>
    </Provider>
  );
}

export default ProviderWrapper;
