import './style.scss';
import * as React from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

/* MUI */
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

/* Font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

/* Date-fns */
import isWeekend from 'date-fns/isWeekend';

export const CalendarStatic = ({ value, setValue }) => {
  const { width } = useWindowDimensions();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs={width >= 768 ? "desktop" : "mobile"}
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


export const Calendar = ({value, setValue}) => {
  const { width } = useWindowDimensions();

  return (
      <div className="date__pesquisa">
          <label>
              <FontAwesomeIcon icon={faCalendarDay} />
              Quando quer retirar o carro?
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              {width < 768 ?
                  <>
                      <MobileDateRangePicker
                          disablePast
                          startText="Check-in"
                          endText="Check-out"
                          toolbarTitle="Período de locação"
                          inputFormat='dd/MM/yyyy'
                          shouldDisableDate={isWeekend}
                          value={value}
                          onChange={(newValue) => {
                              setValue(newValue);
                          }}
                          renderInput={(startProps, endProps) => {
                              
                              return (
                                  <>
                                      <div className="date__div">
                                          <input className="date__input start" ref={startProps.inputRef} {...startProps.inputProps} placeholder="Check-in" required />
                                          <input className="date__input end" ref={endProps.inputRef} {...endProps.inputProps} placeholder="Check-out" required />
                                      </div>
                                  </>
                              )
                          }}
                      />
                  </>
                  :
                  <DesktopDateRangePicker
                      disablePast
                      shouldDisableDate={isWeekend}
                      value={value}
                      onChange={(newValue) => {
                          setValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                          <>
                              <div className="date__div">
                                  <input className="date__input start" ref={startProps.inputRef} {...startProps.inputProps} placeholder="Check-in" required/>
                                  <input className="date__input end" ref={endProps.inputRef} {...endProps.inputProps} placeholder="Check-out" required />
                              </div>
                          </>
                      )}
                  />

              }
          </LocalizationProvider>

      </div>

  )
}
