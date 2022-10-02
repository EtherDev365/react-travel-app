import React, { useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';
import {
    setFlightClass,
    setFlightWay,
    setFlightSearchItems,
    searchFlightsAsync
} from '../store/flightSlice';
import {
    Paper,
    Button,
    MenuItem,
    FormControl,
    Select,
    Stack,
    Snackbar,
    IconButton,
    Alert,
    Box,
    Fab
} from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import EmailIcon from '@mui/icons-material/Email';
import img_flights from '../../images/flights.svg';
import PassengerSelector from '../components/PassengerSelector';
import RepeatIcon from '@mui/icons-material/Repeat';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
// import SearchItem from "../components/SearchItem";
import CloseIcon from '@mui/icons-material/Close';
import ResvoyageService from '../services/ResvoyageService';
import FlightSearchResult from '../components/FlightSearchResult';
import MailPopUp from '../components/MailPopUp';
import ApiService from '../services/ApiService';

const SearchItem = React.lazy(() => import('../components/SearchItem'));

const initialSearchItem = {
    from: '',
    to: '',
    date: format(new Date(), 'MM/dd/yyyy'),
    dates: [format(new Date(), 'MM/dd/yyyy'), null]
};

function Flights() {
    const [openNotify, setOpenNotify] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [visibleMailPopUp, setVisibleMailPopUp] = React.useState(false);
    const form = React.useRef(null);
    const {
        flightWay,
        flightClass,
        searchItems,
        flights,
        error,
        errorMessage
    } = useSelector(state => {
        return { ...state.flight };
    });
    const members = useSelector(state => state.passenger.members);
    // const flightClass = useSelector(selectFlightClass);
    // const searchItems = useSelector(selectFlightSearchItems);
    const dispatch = useDispatch();

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

    // const [searchItems, setSearchItems] = React.useState([initialSearchItem]);
    const handleFlightWayChange = event => {
        if (event.target.value !== 2) {
            dispatch(setFlightSearchItems([searchItems[0]]));
        }
        dispatch(setFlightWay(event.target.value));
    };
    const handleFlightClassChange = event => {
        dispatch(setFlightClass(event.target.value));
    };
    const handleAddClick = () => {
        if (searchItems.length < 4) {
            let tmp = [...searchItems];
            tmp.push(initialSearchItem);
            dispatch(setFlightSearchItems(tmp));
        }
    };
    const handleRemoveClick = index => {
        let tmp = [...searchItems];
        tmp.splice(index, 1);
        dispatch(setFlightSearchItems(tmp));
    };
    const handleChangeSearchItem = (from, to, date, dates, index) => {
        let record = { from: { ...from }, to: { ...to }, date, dates };
        let tmp = [...searchItems];
        tmp.splice(index, 1, record);
        dispatch(setFlightSearchItems(tmp));
    };
    const handleSearchClick = event => {
        event.preventDefault();
        let payload = null;
        payload = {
            flightWay,
            flightClass,
            members,
            searchItems
        };
        dispatch(searchFlightsAsync(payload));
    };
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
    const showMailPopUp = () => {
        setVisibleMailPopUp(true);
    };
    const handleOnCloseMailPopUp = () => {
        setVisibleMailPopUp(false);
    };
    const handleOnSubmitMailPopUp = async data => {
        let res = await ApiService.sendEmail(data);
        console.log(res.data);
    };
    const handleSelectFlight = index => {
        setSelectedIndex(index);
    };

    return (
        <main>
            <Helmet
                title="Book Luxury International Flights | Travel the World in Style | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            'Travel to India, Vietnam, Pakistan, Turkey, Thailand, Malaysia, or Japan with ease. Enjoy maximum comfort with our world-class travel partners.'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'Book Luxury International Flights | Travel the World in Style | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            'Travel to India, Vietnam, Pakistan, Turkey, Thailand, Malaysia, or Japan with ease. Enjoy maximum comfort with our world-class travel partners.'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/flights'
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
                    src={img_flights}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 2xl:px-48 h-full">
                    <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                        Fly First or Business Class to World’s Most Desirable
                        Locations
                    </h1>
                </div>
            </div>
            <Paper elevation={3} className="p-5">
                <form ref={form} onSubmit={handleSearchClick}>
                    <Stack
                        py={1}
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 6 }}
                    >
                        <FormControl sx={{ minWidth: 150 }}>
                            <Select
                                value={flightWay}
                                onChange={handleFlightWayChange}
                                autoWidth
                                displayEmpty
                                sx={{ minHeight: 60 }}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={0}>
                                    <RepeatIcon />
                                    <span>Round trip</span>
                                </MenuItem>
                                <MenuItem value={1}>
                                    <TrendingFlatIcon />
                                    <span>One way</span>
                                </MenuItem>
                                <MenuItem value={2}>
                                    <MultipleStopIcon />
                                    <span>Multi-city</span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <PassengerSelector />
                        <FormControl sx={{ minWidth: 150 }}>
                            <Select
                                value={flightClass}
                                onChange={handleFlightClassChange}
                                autoWidth
                                displayEmpty
                                sx={{ minHeight: 60 }}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={0}>Economy</MenuItem>
                                <MenuItem value={1}>Premium economy</MenuItem>
                                <MenuItem value={2}>Business</MenuItem>
                                <MenuItem value={3}>First</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Suspense
                        fallback={
                            <div className="w-full text-center">Loading...</div>
                        }
                    >
                        {searchItems.map((item, index) => (
                            <SearchItem
                                key={index}
                                data={item}
                                datePickerType={
                                    flightWay === 0 ? 'range' : 'single'
                                }
                                removable={
                                    flightWay === 2 && searchItems.length > 1
                                }
                                removeCallback={() => handleRemoveClick(index)}
                                changeCallback={(from, to, date, dates) =>
                                    handleChangeSearchItem(
                                        from,
                                        to,
                                        date,
                                        dates,
                                        index
                                    )
                                }
                            />
                        ))}
                    </Suspense>
                    {flightWay === 2 && (
                        <Stack
                            py={1}
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row'
                            }}
                            spacing={2}
                        >
                            <Button
                                variant="contained"
                                disabled={searchItems.length > 3}
                                onClick={handleAddClick}
                                startIcon={<AddIcon />}
                                color="secondary"
                            >
                                Add Flight
                            </Button>
                        </Stack>
                    )}
                    <div className="relative w-full h-4 text-center">
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            className=" absolute left-0 top-4 !rounded-full"
                            // onClick={handleSearchClick}
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </Paper>
            <FlightSearchResult onSelect={handleSelectFlight} />
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
            <Box
                role="presentation"
                sx={{
                    zIndex: 2,
                    position: 'sticky',
                    bottom: 46,
                    textAlign: 'right',
                    padding: 1
                }}
            >
                <Fab
                    color="secondary"
                    aria-label="email"
                    onClick={showMailPopUp}
                >
                    <EmailIcon />
                </Fab>
            </Box>
            <MailPopUp
                defaultContent={
                    selectedIndex > -1
                        ? JSON.stringify(flights[selectedIndex], null, 2)
                        : ''
                }
                show={visibleMailPopUp}
                onClose={handleOnCloseMailPopUp}
                onSubmit={handleOnSubmitMailPopUp}
            />
        </main>
    );
}

export default Flights;
