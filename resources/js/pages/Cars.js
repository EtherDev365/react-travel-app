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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import img_hotel from '../../images/hotel.svg';
import img_car from '../../images/car.svg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EventIcon from '@mui/icons-material/Event';
import CloseIcon from '@mui/icons-material/Close';
import ResvoyageService from '../services/ResvoyageService';
import CityInput from '../components/CityInput';
import HotelSearchResult from '../components/HotelSearchResult';

let initRequest = null;

const requestInfo = [
    { title: 'Adults', short: 'adu', min: 1, max: 6 },
    { title: 'Children', short: 'chi', min: 0, max: 6 },
    { title: 'Rooms', short: 'rms', min: 1, max: 6 }
];

const getWeeksAfter = (date, amount) => {
    // console.log(date);
    // let tmp = parseISO(date);
    // console.log(tmp);
    return date ? addWeeks(date, amount) : undefined;
};

function Hotels() {
    const [openNotify, setOpenNotify] = React.useState(false);
    const [checkInError, setCheckInError] = React.useState(false);
    const [checkOutError, setCheckOutError] = React.useState(false);
    const [totalGuest, setTotalGuest] = React.useState(1);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cityError, setCityError] = React.useState(false);
    const openPopover = Boolean(anchorEl);
    const form = React.useRef(null);
    const { city, request, dates, hotels, error, errorMessage } = useSelector(
        state => ({ ...state.hotel })
    );
    const dispatch = useDispatch();
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

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
    const handleRequestClick = event => {
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
                                checkInError ? 'Invalid Date value.' : ''
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
                                checkOutError ? 'Invalid Date value.' : ''
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
                title="Luxury Hotel Bookings | Stay Anywhere in the World | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            "Discover Koyap's selection of high-end hotels and resorts. Enjoy your vacation with maximum comfort and unparalleled hotel service. Let us take care of you."
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'Luxury Hotel Bookings | Stay Anywhere in the World | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            "Discover Koyap's selection of high-end hotels and resorts. Enjoy your vacation with maximum comfort and unparalleled hotel service. Let us take care of you."
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
            <div className="items-center relative min-h-[300px]">
                <img
                    className="flex-none w-full rounded-b-md h-72 bg-slate-100 md:h-full"
                    src={img_car}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 h-full">
                    {phoneFlag ? (
                        <h6 className="font-bold text-2xl text-center text-indigo-500">
                            We Offer the Best Deals for Luxury Vehicles
                        </h6>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            We Offer the Best Deals for Luxury Vehicles
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p>
                        There’s no better way to explore a new destination than
                        riding around in luxury vehicles. Explore some of the
                        world’s best locations from the comfort of your premium
                        car. Our mission is to find the perfect rental for all
                        our clients, which is possible thanks to our vast
                        network of partners.
                    </p>
                    <p>
                        We only offer top-tier vehicles and premium brands. With
                        Koyap, you gain access to the world’s most exclusive
                        vehicles to make your vacation or business trip as
                        convenient and enjoyable as possible.
                    </p>
                    <p>
                        Koyap’s experienced team will work with you to find the
                        most suitable car for you that will make heads turn. We
                        only offer the latest models and we don’t rent outdated
                        and old cars. Your comfort and security are our top
                        priority.
                    </p>
                    <h2 className="text-2xl font-bold mt-3 mb-1">
                        Get to any location with style and comfort
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">Safety</h3>
                    <p>
                        All our cars are a couple of months old. They undergo
                        rigorous and frequent checkup to ensure that all parts
                        are working properly. We follow the highest security
                        standards to ensure that your trip goes without any
                        hiccups.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">Hassle-free service</h3>
                    <p>
                        Our travel team is there to support you at all hours. We
                        do all travel arrangements and offer additional services
                        like visa applications or passport renewals. All you
                        need to do is sit back and enjoy the trip.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">Various car models</h3>
                    <p>
                        We have a luxury car for everyone. With Koyap, you can
                        book unforgettable vehicles such as: <br />
                        ● Sports cars <br />● Convertible cars <br />● Muscle
                        cars <br />● SUVs <br />● Luxury sedans
                    </p>
                    <h2 className="text-2xl font-bold mt-3 mb-1">
                        Why Our Clients Choose Us
                    </h2>
                    <p>
                        We provide our clients with top-notch experiences and
                        help them make unforgettable memories. Here’s why our
                        clients choose us:
                    </p>
                    <p>
                        ● We work tirelessly on ensuring that you find the most
                        suitable vehicle for your needs
                    </p>
                    <p>
                        ● All our luxury car rental partners follow strict
                        safety measures and maintain their vehicles regularly
                    </p>
                    <p>
                        ● We will deliver the car to you according to your
                        schedule and needs
                    </p>
                    <p>
                        ● Our partners make sure that you receive personalized
                        attention and VIP perks
                    </p>
                    <p>
                        ● We help with additional travel requirements - handling
                        travel documents, insurance, passport renewals, visa
                        applications, and visa renewals
                    </p>
                    <h2 className="text-2xl font-bold mt-3 mb-1">
                        How It Works
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        Step #1 Decide on a suitable car model
                    </h3>
                    <p>
                        We offer dozens of different car models. Give a brief
                        rundown of your trip and needs with one of our personal
                        travel consultants, and they’ll present you with a
                        couple of suitable models to choose from.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        Step #2 Choose additional services
                    </h3>
                    <p>
                        If you’re visiting a foreign country and need to take
                        care of paperwork, our consultants can do the work for
                        you. Additional services include travel documents &
                        insurance, passport renewal, hotel bookings, and visa
                        application & renewals.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        Step #3 Drive some of the world’s best cars
                    </h3>
                    <p>
                        Get to the designated spot to pick up the car, explore
                        the breathtaking interior, and enjoy the ride.
                    </p>
                    <h2 className="text-2xl font-bold mt-3 mb-1">
                        Enjoy luxury and comfort
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        Enjoy a royal interior and superb entertainment features
                    </h3>
                    <p>
                        You can book luxury cars with Koyap in under 10 minutes
                        on our website. Go through available vehicles, fill out
                        the necessary information, and finalize the booking.
                        We’ll get back to you to confirm all the peculiarities
                        of the trip.
                    </p>
                    <p>
                        Or, get in touch with one of our travel consultants to
                        discuss your plans and needs, and get an approximate
                        quote.
                    </p>
                    <p>
                        We also offer frequent member discounts and exclusive
                        deals for travelers who join our mailing list.{' '}
                    </p>
                    <p>Sign up HERE to get special prices and other perks.</p>
                </div>
            </div>
        </main>
    );
}

export default Hotels;
