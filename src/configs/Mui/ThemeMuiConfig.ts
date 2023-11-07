import { ThemeOptions } from '@mui/material';

enum ThemeMode {
  light = 'light',
  dark = 'dark'
}
function themeConfig(mode: ThemeMode): ThemeOptions {
  return {
    palette: {
      mode,
      ...(mode === ThemeMode.light
        ? {
            primary: {
              main: '#0a7cff'
            },
            secondary: {
              main: '#22EF92'
            },
            dark: {
              main: '#141414'
            },
            text: {
              primary: '#000000',
              secondary: '#ccc'
            }
          }
        : /* define style for dark mode here */
          {})
    }
  };
}
export { ThemeMode };
export default themeConfig;
