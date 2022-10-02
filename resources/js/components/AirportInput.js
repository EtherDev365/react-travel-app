import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Autocomplete, IconButton, Snackbar, CircularProgress, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import throttle from 'lodash/throttle';
import ResvoyageService from '../services/ResvoyageService';

const AirportInput = ({ data, onChange, popupIcon, sx, ...rest }) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(data);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const [openNotify, setOpenNotify] = React.useState(false);
    const loading = open && options.length === 0;
    const fetch = React.useMemo(
        () =>
            throttle(request => {
                const airports = ResvoyageService.getAirports(request?.input);
                airports.then(res => {
                    if (res !== null) {
                        setOptions(res);
                    }
                    return res;
                }).catch(reason => {
                    setOpenNotify(true);
                });
            }, 1000),
        []
    );

    React.useEffect(() => setValue(data), [data]);
    React.useEffect(() => {
        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue });
    }, [value, inputValue, fetch]);

    const handleNotifyClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenNotify(false);
    };
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleNotifyClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Autocomplete
                sx={sx}
                popupIcon={popupIcon}
                filterOptions={x => x}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                options={options}
                loading={loading}
                autoComplete
                includeInputInList
                filterSelectedOptions
                // isOptionEqualToValue={(option, value) => {
                //     if (option.Code && value.Code)
                //         return (option.Code + option.Name) === (value.Code + value.Name);
                //     return false;
                // }}
                getOptionLabel={(option) => {
                    if (typeof option === 'string') return option;
                    if (!option.Name && !option.Code) return '';
                    if (option.Code === null) {
                        return option.Name;
                    }
                    return option.Code; // + (option.Name !== null? '(' + option.Name + ')': '')
                }}
                value={value}
                onChange={(event, newValue) => {
                    setOptions(newValue ? [newValue, ...options] : options);
                    setValue(newValue);
                    onChange(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    // onChange(newInputValue);
                }}
                renderInput={params => (
                    <TextField
                        {...rest}
                        {...params}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? (
                                        <CircularProgress
                                            color="inherit"
                                            size={20}
                                        />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </>
                            )
                        }}
                    />
                )}
                renderOption={(props, item) => {
                    let sub = item.Region + ',' + item.Country;
                    let main = item.City + '(' + item.Code + '-' + item.Name + ')';
                    if (item.Name === null) main = item.City + '(' + item.Code + ')';
                    if (item.Region === null) sub = item.Country;
                    if (item.Country === null) sub = item.Region;
                    return (
                        <li {...props} className="cursor-pointer group" key={item.Code + item.Name}>
                            <div className="flex items-center pl-3 group-hover:bg-gray-100">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
                                    <path d="M178.081 41.973c-2.681 2.663-16.065 17.416-28.956 30.221c0 107.916 3.558 99.815-14.555 117.807l-14.358-60.402l-14.67-14.572c-38.873 38.606-33.015 8.711-33.015 45.669c.037 8.071-3.373 13.38-8.263 18.237L50.66 148.39l-30.751-13.513c10.094-10.017 15.609-8.207 39.488-8.207c8.127-16.666 18.173-23.81 26.033-31.62L70.79 80.509L10 66.269c17.153-17.039 6.638-13.895 118.396-13.895c12.96-12.873 26.882-27.703 29.574-30.377c7.745-7.692 28.017-14.357 31.205-11.191c3.187 3.166-3.349 23.474-11.094 31.167zm-13.674 42.469l-8.099 8.027v23.58c17.508-17.55 21.963-17.767 8.099-31.607zm-48.125-47.923c-13.678-13.652-12.642-10.828-32.152 8.57h23.625l8.527-8.57z"></path>
                                </svg>

                                <a className="block p-4 border-l-4 border-transparent ">
                                    <p>{main}</p>
                                    <p className="text-sm text-gray-600">{sub}</p>
                                </a>
                            </div>
                        </li>
                    );
                }}
            />
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openNotify}
                autoHideDuration={5000}
                onClose={handleNotifyClose}
                action={action}
            >
                <Alert onClose={handleNotifyClose} severity="error" sx={{ width: '100%' }}>
                    Please check your network connection!
                </Alert>
            </Snackbar>
        </>
    );
};

AirportInput.propTypes = {
    onChange: PropTypes.func
};

// Specifies the default values for props:
AirportInput.defaultProps = {
    onChange: () => { }
};

export default AirportInput;
