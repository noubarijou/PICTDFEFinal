import * as React from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

/* MUI */
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

/* Date-fns */
import isWeekend from 'date-fns/isWeekend';

export const Calendario = ({ value, setValue }) => {
  const { width } = useWindowDimensions();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs={width > 768 ? "desktop" : "mobile"}
        disablePast
        shouldDisableDate={isWeekend}
        startText="Check-in"
        endText="Check-out"
        toolbarTitle="Período de locação"
        inputFormat='dd/MM/yyyy'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <input ref={startProps.inputRef} {...startProps.inputProps} />
            <input ref={endProps.inputRef} {...endProps.inputProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
}
