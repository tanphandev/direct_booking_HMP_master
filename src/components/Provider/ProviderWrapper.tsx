'use client';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import store from '@/store';
import themeConfig, { ThemeMode } from '@/configs/Mui/ThemeMuiConfig';

function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const mode: ThemeMode = ThemeMode.light;
  const muiTheme = useMemo(() => {
    return createTheme(themeConfig(mode));
  }, [mode]);
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default ProviderWrapper;
