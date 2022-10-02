import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Autocomplete, IconButton, Snackbar, CircularProgress, Alert, InputBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import throttle from 'lodash/throttle';
import ResvoyageService from '../services/ResvoyageService';

const CityInput = ({ inputData, onChange, popupIcon, sx, ...rest }) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState(inputData);
    const [options, setOptions] = React.useState([]);
    const [openNotify, setOpenNotify] = React.useState(false);
    const loading = open && options.length === 0;
    const fetch = React.useMemo(
        () =>
            throttle(request => {
                const cities = ResvoyageService.getCities(request?.input);
                cities.then(res => {
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

    // React.useEffect(() => ResvoyageService.getToken(), []);

    React.useEffect(() => {
        let active = true;
        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, results => {
            if (active) {
                let newOptions = [];
                if (value) {
                    newOptions = [value];
                }
                if (results) {
                    newOptions = [...newOptions, ...results];
                }
                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
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
                isOptionEqualToValue={(option, value) => (option.Code + option.Name) === (value.Code + value.Name)}
                getOptionLabel={(option) => {
                    if (typeof option === 'string') return option;
                    if (option.Code === null) {
                        return option.Name;
                    }
                    return option.Code;
                }}
                value={value}
                onChange={(event, newValue) => {
                    setOptions(newValue ? [newValue, ...options] : options);
                    setValue(newValue);
                    // onChange(inputValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    onChange(newInputValue);
                }}
                renderInput={params => {
                    // console.log(params);
                    return (
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
                )}}
                renderOption={(props, item) => {
                    return (
                        <li {...props} className="cursor-pointer group" key={item.Code + item.Name}>
                            <div className="flex items-center pl-3 group-hover:bg-indigo-100">
                                <div className="w-6">
                                    {item.Type.toLowerCase() === 'city' && (
                                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 200 200" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M166.666 44.998v40.438h-6.078c-2.927-7.642-10.155-13.048-18.607-13.048H123.68c-8.452 0-15.68 5.406-18.607 13.048H94.927C92 77.794 84.772 72.388 76.32 72.388H58.019c-8.452 0-15.68 5.406-18.607 13.048H33.33V44.998h133.336zM180 113.749c0-10.387-7.445-18.982-17.131-20.414H37.131C27.44 94.767 20 103.362 20 113.749v41.253h13.33v-20.627h133.336v20.627H180v-41.253z"></path>
                                        </svg>
                                    )}
                                    {item.Type.toLowerCase() === 'destination' && (
                                        <svg x-show="item.Type.toLowerCase() === 'destination'" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <a className="block p-4 border-l-4 border-transparent">
                                    <p className="text-gray-800">{item.Code + ',' + item.Name}</p>
                                    <p className="text-sm text-gray-900">{item.CountryCode + ', ' + item.Country}</p>
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
                    Please check your network connection!aaa
                </Alert>
            </Snackbar>
        </>
    );
};

CityInput.propTypes = {
    onChange: PropTypes.func
};

// Specifies the default values for props:
CityInput.defaultProps = {
    onChange: () => { }
};

export default CityInput;
