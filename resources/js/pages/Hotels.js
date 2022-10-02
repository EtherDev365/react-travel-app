import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { format, parseISO, parse } from 'date-fns';
import addWeeks from 'date-fns/addWeeks';
import { Helmet } from 'react-helmet';
import useWindowSize from '../services/Hlp';
import {
    setCity,
    setRequest,
    setDates,
    searchHotelsAsync,
    handleRequestChange
} from '../store/hotelSlice';
import {
    Paper,
    Button,
    Stack,
    Snackbar,
    IconButton,
    Alert,
    Divider,
    InputAdornment,
    TextField,
    Popover
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import img_hotel from '../../images/hotel.svg';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EventIcon from '@mui/icons-material/Event';
import CloseIcon from '@mui/icons-material/Close';
import ResvoyageService from '../services/ResvoyageService';
import CityInput from '../components/CityInput';
import HotelSearchResult from '../components/HotelSearchResult';

let initRequest = null;

const requestInfo = [
    { title: "Adults", short: "adu", min: 1, max: 6 },
    { title: "Children", short: "chi", min: 0, max: 6 },
    { title: "Rooms", short: "rms", min: 1, max: 6 }
];

const getWeeksAfter = (date, amount) => {
    // console.log(date);
    // let tmp = parseISO(date);
    // console.log(tmp);
    return date ? addWeeks(date, amount) : undefined;
}

function Hotels() {
    const [openNotify, setOpenNotify] = React.useState(false);
    const [checkInError, setCheckInError] = React.useState(false);
    const [checkOutError, setCheckOutError] = React.useState(false);
    const [totalGuest, setTotalGuest] = React.useState(1);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cityError, setCityError] = React.useState(false);
    const openPopover = Boolean(anchorEl);
    const form = React.useRef(null);
    const { city, request, dates, hotels, error, errorMessage } = useSelector(state => ({ ...state.hotel }));
    const dispatch = useDispatch();
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true: false;
    
    useEffect(() => {
        let token = ResvoyageService.getToken();
        token.catch(r => {
            setOpenNotify(true);
        });
    }, []);
    useEffect(() => {
        if (error) {
            return setOpenNotify(true);
        }
    }, [error]);
    useEffect(() => {
        if (openPopover) {
            initRequest = { ...request };
        } else if (initRequest) {
            dispatch(setRequest(initRequest));
        }
    }, [openPopover]);
    const handleRequestClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCityChange = value => {
        setCityError(!value);
        dispatch(setCity(value));
        // changeCallback(value, to, date, dates);
    };
    const handleClosePopover = () => {
        setAnchorEl(null);
    };
    const handleDonePopoverClick = () => {
        initRequest = { ...request };
        let totalTemp = request['adu'] + request['chi'];
        setTotalGuest(totalTemp);
        handleClosePopover();
    };
    const handleSubmit = event => {
        event.preventDefault();
        let payload = null;
        payload = {
            city,
            request,
            dates
        };
        dispatch(searchHotelsAsync(payload));
    };
    const handleNotifyClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenNotify(false);
    };
    const handleDatesChange = value => {
        let tmp = [null, null];
        setCheckInError(!value[0]);
        if (
            value[0] &&
            value[0].getTime() <
            new Date(format(new Date(), 'MM/dd/yyyy')).getTime()
        )
            setCheckInError(true);
        try {
            let strVal = format(value[0], 'MM/dd/yyyy');
            tmp[0] = strVal;
        } catch {
            setCheckInError(true);
        }

        setCheckOutError(!value[1]);
        if (
            value[1] &&
            value[1].getTime() <
            new Date(format(new Date(), 'MM/dd/yyyy')).getTime()
        )
            setCheckOutError(true);
        try {
            let strVal = format(value[1], 'MM/dd/yyyy');
            tmp[1] = strVal;
        } catch {
            setCheckOutError(true);
        }
        dispatch(setDates(tmp));
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
    const dateRangePicker = (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                views={['day']}
                startText="Check in"
                endText="Check out"
                value={dates}
                mask="__/__/____"
                disablePast
                // minDate={new Date()}
                maxDate={getWeeksAfter(dates[0], 4)}
                onChange={handleDatesChange}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField
                            {...startProps}
                            sx={{ width: '50%' }}
                            required
                            error={checkInError}
                            helperText={
                                checkInError
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
                            error={checkOutError}
                            helperText={
                                checkOutError
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

    return (
        <main>
            <Helmet
                title='Luxury Hotel Bookings | Stay Anywhere in the World | Koyap'
                htmlAttributes={{ lang: 'en' }}

                meta={[
                    {
                        name: 'description',
                        content: 'Discover Koyap\'s selection of high-end hotels and resorts. Enjoy your vacation with maximum comfort and unparalleled hotel service. Let us take care of you.'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content: 'Luxury Hotel Bookings | Stay Anywhere in the World | Koyap'
                    },
                    {
                        property: 'og:description',
                        content: 'Discover Koyap\'s selection of high-end hotels and resorts. Enjoy your vacation with maximum comfort and unparalleled hotel service. Let us take care of you.'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/hotels'
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    }
                ]}
            />
            <div className='items-center relative min-h-[300px]'>
                <img
                    className="flex-none w-full rounded-b-md h-72 bg-slate-100 md:h-full"
                    src={img_hotel}
                    alt="People working on laptops"
                />
                <div className='absolute top-0 left-0 items-center p-20 h-full'>
                    {phoneFlag?<h6 className='font-bold text-2xl text-center text-indigo-500'>Stay at Some of the Most Luxurious Hotels and Resorts Across the Globe</h6>:
                    <h1 className='font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500'>Stay at Some of the Most Luxurious Hotels and Resorts Across the Globe</h1>}
                </div>
            </div>
            {phoneFlag?<Paper
                elevation={4}
                component="form"
                onSubmit={handleSubmit}
                sx={{ p: '2px 24px', alignItems: 'center', my: 5, mx: 2 }}
            >
                {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                {/* <InputBase
                    type='select'
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for places, hotels and more"
                    inputProps={{ 'aria-label': 'Search for places, hotels and more' }}
                /> */}
                <CityInput
                    sx={{ mt: 2, flex: 1 }}
                    label="Search for places, hotels and more"
                    required
                    inputData={city}
                    error={cityError}
                    onChange={handleCityChange}
                    helperText={cityError ? "It's required field." : ''}
                />
                <div style={{marginTop: '16px'}}>{dateRangePicker}</div>
                {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <PersonOutlineIcon />
                </IconButton> */}
                <Button variant="outlined" onClick={handleRequestClick} sx={{ mt:2, width:'100%', fontSize: '1.25rem', color: '#696969' }} color="success">
                    <PersonOutlineIcon color="primary" sx={{ marginRight: 1 }} />
                    {totalGuest}
                    <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
                </Button>
                    <div className="text-center">
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            className=" absolute left-0 top-6 !rounded-full"
                            // onClick={handleSearchClick}
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </div>
            </Paper>:
            <Paper
            elevation={3}
            component="form"
            onSubmit={handleSubmit}
            sx={{ p: '2px 24px', alignItems: 'center', my: 5, mx: 2 }}
        >
            {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            {/* <InputBase
                type='select'
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for places, hotels and more"
                inputProps={{ 'aria-label': 'Search for places, hotels and more' }}
            /> */}
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
            <CityInput
                sx={{ ml: 1, flex: 1 }}
                label="Search for places, hotels and more"
                required
                inputData={city}
                error={cityError}
                onChange={handleCityChange}
                helperText={cityError ? "It's required field." : ''}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <div className='w-[400px]'>{dateRangePicker}</div>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <PersonOutlineIcon />
            </IconButton> */}
            <Button variant="outlined" onClick={handleRequestClick} sx={{ fontSize: '1.25rem', color: '#696969' }} color="success">
                <PersonOutlineIcon color="primary" sx={{ marginRight: 1 }} />
                {totalGuest}
                <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
            </Button>
            </div>
                    <div className="text-center">
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            className=" absolute left-0 top-6 !rounded-full"
                            // onClick={handleSearchClick}
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </div>
        </Paper>}
            <HotelSearchResult />
            <Popover
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                className="w-[250] max-w-xs"
            >
                <Stack
                    px={2}
                    py={1}
                    direction="column"
                    spacing={1}
                    divider={<Divider flexItem />}
                >
                    {requestInfo.map((item, index) => (
                        <div className="flex items-center" key={index}>
                            <div className="w-1/2">
                                <div className="font-medium text-gray-900 text-md">
                                    {item.title}
                                </div>
                            </div>
                            <div className="w-1/2">
                                <Stack direction="row" spacing={1}>
                                    <IconButton
                                        aria-label="add"
                                        color="primary"
                                        disabled={
                                            request[item.short] <= item.min
                                        }
                                        onClick={() =>
                                            dispatch(
                                                handleRequestChange({
                                                    key: item.short,
                                                    inc: false,
                                                })
                                            )
                                        }
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <div className="w-10 py-2 font-medium text-center text-gray-900 text-md">
                                        {request[item.short]}
                                    </div>
                                    <IconButton
                                        aria-label="remove"
                                        color="primary"
                                        disabled={
                                            request[item.short] >= item.max
                                        }
                                        onClick={() => {
                                            dispatch(
                                                handleRequestChange({
                                                    key: item.short,
                                                    inc: true,
                                                })
                                            );
                                        }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </div>
                        </div>
                    ))}
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={handleDonePopoverClick}
                    >
                        Done
                    </Button>
                </Stack>
            </Popover>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openNotify}
                autoHideDuration={5000}
                onClose={handleNotifyClose}
                action={action}
            >
                <Alert
                    onClose={handleNotifyClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    {errorMessage || 'Please check your network connection!'}
                </Alert>
            </Snackbar>
        </main>
    );
}

export default Hotels;
