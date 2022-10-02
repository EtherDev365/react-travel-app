import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Stack,
    InputAdornment,
    TextField,
    IconButton
} from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import DateRangePicker from '@mui/lab/DateRangePicker';
import EventIcon from '@mui/icons-material/Event';
import ClearIcon from '@mui/icons-material/Clear';
import AirportInput from './AirportInput';

function SearchItem({
    datePickerType = 'single',
    removable = false,
    changeCallback,
    removeCallback,
    data
}) {
    const from = data.from;
    const [fromError, setFromError] = React.useState(false);
    const [toError, setToError] = React.useState(false);
    const [dateError, setDateError] = React.useState(false);
    const [departureDateError, setDepartureDateError] = React.useState(false);
    const [returnDateError, setReturnDateError] = React.useState(false);
    const to = data.to;
    const date = data.date;
    const dates = data.dates;
    const swapPosIcon = React.useRef(null);
    // React.useEffect(() => {
    //     changeCallback(from, to, date, dates);
    // }, [from, to, date, dates]);
    const handleFromChange = value => {
        setFromError(!value);
        changeCallback(value, to, date, dates);
    };
    const handleToChange = value => {
        setToError(!value);
        changeCallback(from, value, date, dates);
    };
    const handleSwapPosClick = event => {
        swapPosIcon.current.classList.toggle('rotate-180');
        changeCallback(to, from, date, dates);
    };
    const handleDateChange = value => {
        setDateError(!value);
        if (
            value &&
            value.getTime() <
            new Date(format(new Date(), 'MM/dd/yyyy')).getTime()
        )
            setDateError(true);
        try {
            let strVal = format(value, 'MM/dd/yyyy');
            changeCallback(from, to, strVal, [null, null]);
        } catch {
            setDateError(true);
            // changeCallback(from, to, date, [null, null]);
        }
    };
    const handleDatesChange = value => {
        let tmp = [null, null];
        setDepartureDateError(!value[0]);
        if (
            value[0] &&
            value[0].getTime() <
            new Date(format(new Date(), 'MM/dd/yyyy')).getTime()
        )
            setDepartureDateError(true);
        try {
            let strVal = format(value[0], 'MM/dd/yyyy');
            tmp[0] = strVal;
        } catch {
            setDepartureDateError(true);
        }

        setReturnDateError(!value[1]);
        if (
            value[1] &&
            value[1].getTime() <
            new Date(format(new Date(), 'MM/dd/yyyy')).getTime()
        )
            setReturnDateError(true);
        try {
            let strVal = format(value[1], 'MM/dd/yyyy');
            tmp[1] = strVal;
        } catch {
            setReturnDateError(true);
        }
        changeCallback(from, to, null, tmp);
    };
    const handleRemoveClick = event => {
        removeCallback();
    };
    let datePicker = null;
    switch (datePickerType) {
        case 'single':
            datePicker = (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        views={['day']}
                        label="Departure date"
                        value={date}
                        minDate={new Date()}
                        mask="__/__/____"
                        onChange={handleDateChange}
                        renderInput={params => (
                            <TextField
                                {...params}
                                required
                                error={dateError}
                                helperText={
                                    dateError ? 'Invalid Date value.' : ''
                                }
                                className="min-w-[180px]"
                            />
                        )}
                    />
                </LocalizationProvider>
            );
            break;
        case 'range':
            datePicker = (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateRangePicker
                        views={['day']}
                        startText="Departure date1"
                        endText="Departure date2"
                        value={dates}
                        mask="__/__/____"
                        minDate={new Date()}
                        onChange={handleDatesChange}
                        className="date-rage-selector"
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField
                                    {...startProps}
                                    sx={{ width: '50%' }}
                                    required
                                    error={departureDateError}
                                    helperText={
                                        departureDateError
                                            ? 'Invalid Date value.'
                                            : ''
                                    }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <EventIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <TextField
                                    {...endProps}
                                    sx={{ width: '50%' }}
                                    required
                                    error={returnDateError}
                                    helperText={
                                        returnDateError
                                            ? 'Invalid Date value.'
                                            : ''
                                    }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <EventIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            );
            break;
    }
    return (
        <Stack
            py={1}
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            spacing={3}
        >
            <div className="flex items-center w-full lg:w-2/3">
                <AirportInput
                    id="from"
                    label="Where from?"
                    variant="outlined"
                    data={from}
                    required
                    onChange={handleFromChange}
                    popupIcon={<TripOriginIcon />}
                    error={fromError}
                    helperText={fromError ? "It's required field." : ''}
                    sx={{ minWidth: 120, width: '50%' }}
                />
                {/* <TextField
                    id="from"
                    label="Where from?"
                    variant="outlined"
                    value={from}
                    required
                    error={fromError}
                    helperText={fromError ? "It's required field." : ''}
                    onChange={handleFromChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <TripOriginIcon />
                            </InputAdornment>
                        )
                    }}
                    sx={{ minWidth: 120, width: '50%' }}
                /> */}
                <div
                    ref={swapPosIcon}
                    className="transition-transform duration-150"
                >
                    <IconButton
                        onClick={handleSwapPosClick}
                        disabled={from === '' || to === ''}
                    >
                        <SyncAltIcon />
                    </IconButton>
                </div>
                <AirportInput
                    id="to"
                    label="Where to?"
                    variant="outlined"
                    data={to}
                    required
                    onChange={handleToChange}
                    popupIcon={<LocationOnIcon />}
                    error={toError}
                    helperText={toError ? "It's required field." : ''}
                    sx={{ minWidth: 120, width: '50%' }}
                />
            </div>
            <div className="flex items-center w-full lg:w-1/3 date-range-selector">
                {datePicker}
                {removable && (
                    <IconButton
                        sx={{ minWidth: 36 }}
                        onClick={handleRemoveClick}
                    >
                        <ClearIcon />
                    </IconButton>
                )}
            </div>
        </Stack>
    );
}

SearchItem.propTypes = {
    datePickerType: PropTypes.oneOf(['single', 'range']),
    removable: PropTypes.bool,
    changeCallback: PropTypes.func,
    removeCallback: PropTypes.func,
    data: PropTypes.object.isRequired
};

// Specifies the default values for props:
SearchItem.defaultProps = {
    datePickerType: 'single',
    removable: false,
    changeCallback: () => { },
    removeCallback: () => { }
};

export default SearchItem;
