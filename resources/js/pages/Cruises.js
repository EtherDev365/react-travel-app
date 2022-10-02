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
    Grid,
    Card,
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
import img_cruise from '../../images/cruise.svg';

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
                    src={img_cruise}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 h-full">
                    {phoneFlag ? (
                        <h6 className="font-bold text-2xl text-center text-indigo-500">
                            Book Your Dream Vacation on a Luxurious Cruise
                        </h6>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Book Your Dream Vacation on a Luxurious Cruise
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p>
                        Let us organize your dream vacation. Our services are
                        perfect for those who want an unforgettable world-class
                        experience without any logistical hassle.
                    </p>
                    <p>
                        Sail through and explore some of the most exotic and
                        unique places on the planet while enjoying luxurious
                        amenities. Enjoy delicious food cooked by professional
                        chefs, exclusive rooms with jaw-dropping balconies, pool
                        retreats, and prime entertainment. We offer cruises that
                        embody everything you’d ever want in world-class travel.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Koyap Is Your Ultimate Luxury Travel Assistant
                    </h2>
                    <p className="mt-2">
                        Our expertise is upscale travel. We only work with the
                        most prestigious cruise ships, hotels, and clients. Our
                        unparalleled service ensures that all your travel dreams
                        come to fruition thanks to our elaborate network of
                        world-class partners.{' '}
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        You don’t need to lift a finger
                    </h2>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Customized experience
                                </h3>
                                <p>
                                    Our agents go above and beyond to ensure
                                    that all our client’s needs are met. We work
                                    non-stop on optimizing our services so that
                                    you can effortlessly enjoy your dream
                                    vacation.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Prestigious amenities
                                </h3>
                                <p>
                                    We only work with cruise ships and hotels
                                    with prestigious amenities. You can expect
                                    swimming pools, kid & adult entertainment,
                                    supreme food menus, saunas, and a lot more.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Supreme accommodation
                                </h3>
                                <p>
                                    Your accommodation will always be superb.
                                    Our partner cruise lines have spacious rooms
                                    with balconies, king-sized beds, exceptional
                                    room service, and jaw-dropping views.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Exclusive activities
                                </h3>
                                <p>
                                    You can book different activities and tours
                                    along with your cruise across all
                                    destinations. Try out scuba diving and many
                                    other fun activities you can arrange with an
                                    onboard concierge.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Hassle-free service
                                </h3>
                                <p>
                                    Our travel team is there to support you at
                                    all hours. We do all travel arrangements and
                                    offer additional services like visa
                                    applications or passport renewals. All you
                                    need to do is sit back and enjoy the trip.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    World-class travel partners
                                </h3>
                                <p>
                                    We only work with selected partners to
                                    ensure a premium experience for all our
                                    clients. Our partners offer the most
                                    elaborate rooms, suites, and amenities with
                                    complementary services and other perks.
                                </p>
                            </Card>
                        </Grid>
                    </Grid>
                    <h2 className="text-2xl font-bold mt-12 mb-3">
                        Why Our Clients Choose Us
                    </h2>
                    <p>
                        We provide our clients with top-notch experiences and
                        help them make unforgettable memories. Here’s why our
                        clients choose us:
                    </p>
                    <p>● We deal with all the travel logistics</p>
                    <p>
                        ● Our list of dreamy cruise destinations is
                        ever-expanding
                    </p>
                    <p>
                        ● We only work with world-class travel and cruise
                        partners to ensure exceptional service for all our
                        clients
                    </p>
                    <p>
                        ● We help them with additional travel requirements -
                        travel documents, insurance, passport renewals, visa
                        applications, and visa renewals
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Explore Our Striking Destinations
                    </h2>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl">Cambodia</h3>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl mt-1 mb-1">India</h3>
                                <p>New Delhi</p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl mt-1 mb-1">Laos</h3>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl mt-1 mb-1">Malaysia</h3>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl mt-1 mb-1">
                                    Phillippines
                                </h3>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl mt-1 mb-1">
                                    Singapore
                                </h3>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl mt-1 mb-1">Thailand</h3>
                                <p>Bangkok</p>
                                <p>Chiang Mai</p>
                                <p>Phuket</p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3 className="text-2xl mt-1 mb-1">Vietnam</h3>
                                <p>Hanoi</p>
                                <p>Ho Chi Minh</p>
                                <p>Da Nang</p>
                            </Card>
                        </Grid>
                    </Grid>
                    <h2 className="text-2xl font-bold mt-12 mb-3">
                        How It Works
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        Step #1 Explore our different cruise destinations
                    </h3>
                    <p>
                        Call us and one of our consultants will give you a
                        detailed rundown of all our cruise options and
                        destinations.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        Step #2 Choose a suitable royal package
                    </h3>
                    <p>
                        Choose a suitable destination, a travel package, trip
                        duration, and book additional activities. Our
                        consultants will take care of all the logistics. You can
                        also opt for additional services - travel documents &
                        insurance, passport renewal, visa application & renewal.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        Step #3 Show up with a suitcase and start your adventure
                    </h3>
                    <p>
                        Pack your bags, bring your documents, and start the
                        adventure of a lifetime.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Book a Luxurious Cruise of Your Dreams
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        Create unforgettable memories
                    </h3>
                    <p>
                        You can book your cruise with Koyap in under 10 minutes
                        on our website. Go through the offers, choose the
                        desired package, and finalize the booking.
                    </p>
                    <p>
                        Or, get in touch with one of our travel consultants to
                        choose your favorite cruise destination and customize
                        the service as much as possible. We also offer frequent
                        member discounts and exclusive deals for travelers who
                        join our mailing list.
                    </p>
                    <p>Sign up HERE to get special prices and other perks.</p>
                </div>
            </div>
        </main>
    );
}

export default Hotels;
