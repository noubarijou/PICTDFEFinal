import React, { useState } from 'react'
import "./style.scss";
import { useWindowDimensions } from '../../../../hooks/useWindowDimensions';

/* Font awesome */
/* icones - font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

/* MUI */
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

/* Date-fns */
import isWeekend from 'date-fns/isWeekend';

export const Calendar = ({value, setValue}) => {
    const { width } = useWindowDimensions();

    /* const [value, setValue] = useState([null, null]); */
    /* console.log(value) */

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
