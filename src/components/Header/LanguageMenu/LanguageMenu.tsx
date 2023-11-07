'use client';
import { useState } from 'react';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Language } from '@/types/Language';

function LanguageMenu() {
  const [language, setLanguage] = useState<string>(Language.VI);
  console.log('language', language);
  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  return (
    <Select
      sx={{
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline': {
          border: 'none !important',
          outline: 'none !important'
        }
      }}
      value={language}
      onChange={handleChangeLanguage}
    >
      <MenuItem value={Language.VI}>Viet Nam</MenuItem>
      <MenuItem value={Language.EN}>English</MenuItem>
      <MenuItem value={Language.TH}>Thailand</MenuItem>
    </Select>
  );
}

export default LanguageMenu;
