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
    Popover,
    Typography
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

function Hotels() {
    const [openNotify, setOpenNotify] = React.useState(false);
    const [checkInError, setCheckInError] = React.useState(false);
    const [checkOutError, setCheckOutError] = React.useState(false);
    const [totalGuest, setTotalGuest] = React.useState(1);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cityError, setCityError] = React.useState(false);
    const openPopover = Boolean(anchorEl);
    const form = React.useRef(null);
    const dispatch = useDispatch();
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true: false;

    return (
        <main>
            <Helmet
                title='Hassle-Free Travel Insurance | Get a Quick Quote | Koyap'
                htmlAttributes={{ lang: 'en' }}

                meta={[
                    {
                        name: 'description',
                        content: 'Koyap\'s travel insurance covers all sorts of situations like trip cancellations, lost luggage, health insurance, and more. Choose your favorite plan and get a quote on the spot.'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content: 'Hassle-Free Travel Insurance | Get a Quick Quote | Koyap'
                    },
                    {
                        property: 'og:description',
                        content: 'Discover Koyap\'s selection of high-end hotels and resorts. Enjoy your vacation with maximum comfort and unparalleled hotel service. Let us take care of you.'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/insurance'
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    }
                ]}
            />
            <div className="w-full px-6 mt-6">
                <div className="relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center py-12">
                    <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_ima=ge-svg2.svg" alt="bg"/>
                    <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_i=mage-svg3.svg" alt="bg"/>

                    <div className="w-11/12 sm:w-2/3">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-white font-bold leading-tight">Insurance</h1>
                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                        Last modified: November 15th, 2021
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-16">
            <div className="prose prose-sm max-w-4xl mx-auto">
                <h2 className='text-2xl font-bold mt-3 mb-1'>Travel Confidently with Our Travel Insurance</h2>
                <p>If you want a stress-free trip or vacation, getting travel insurance is a must. It protects you in case things go wrong, such as flight cancellations, lost luggage, or potential injuries. With Koyap’s travel insurance, you don’t have to worry about emergencies because everything is covered.</p>
                <p>We offer a large selection of premium travel insurance plans for our clients to ensure that all their travel needs are met. If something happens and you have a claim, our agents will help you navigate them and give advice along the way on how to handle the situation.</p>
                <p>Travel is often unpredictable, especially now during the COVID-19 pandemic, when a lot of things can go wrong. Don’t let mishaps ruin your trip and rely on Koyap’s world-class travel insurance.</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>Travel Insurance for Every Need</h2>
                <h3 className='text-2xl mt-1 mb-1'>Simplicity</h3>                
                <p>Our licensed travel consultants will take care of all the administrative requirements on your behalf. The process is rather simple and quick, and requires minimum effort on your part. The only thing you have to do is enjoy your trip.</p>
                <h3 className='text-2xl mt-1 mb-1'>Best Insurance Plans</h3>
                <p>We only work with premium travel insurance providers to ensure top quality for our clients. We offer different types of plans for different needs, to ensure that all our clients’ needs are met.</p>
                <h3 className='text-2xl mt-1 mb-1'>Customized Service</h3>
                <p>Our team works non-stop to ensure that all our clients receive personalized service. We will compare different plans and options to ensure that we find the best fit for you. </p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>What Our Insurance Covers</h2>                
                <p>Our travel insurance protects you in different scenarios, such as:</p>
                <p>●	Trip cancellations</p>
                <p>●	Travel date changes</p>
                <p>●	Trip interruptions and delays</p>
                <p>●	Missed connections</p>
                <p>●	Lost luggage or other personal belongings</p>
                <p>{"●	24-hour AD&D"}</p>
                <p>●	Medical expenses</p>
                <p>●	Emergency medical evacuations</p>
                <p>●	Non-medical emergency evacuations</p>
                <p>●	Worldwide travel assistance</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>Why Our Clients Choose Us</h2>                
                <p>We provide our clients with top-notch experiences and help them make unforgettable memories. Here’s why our clients choose us:</p>
                <p>●	Our travel insurance covers different trip scenarios</p>
                <p>●	We offer quick and effective service</p>
                <p>●	Your insurance will be delivered to you ahead of the trip</p>
                <p>●	Our customer service is there to support you at all hours</p>
                <p>●	Our systems are very secure to ensure that all our clients’ information is safe at all times</p>
                <p>●	We help with additional travel requirements - handling travel documents, flights, passport renewals, visa applications, visa renewals, hotel bookings, and car rentals.</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>How It Works</h2>                
                <h3 className='text-2xl mt-1 mb-1'>Step #1 Discuss your travel plans with one of our consultants</h3>                
                <p>Give us a call or stop by one of our locations to share your travel plans with one of our consultants. Our agents will compare different insurance plans and present you with a couple of suitable options.</p>
                <h3 className='text-2xl mt-1 mb-1'>Step #2 Choose additional services and insurance coverage</h3>                
                <p>Choose a suitable insurance plan and book additional services if needed. Additional services include travel insurance, passport renewal, hotel bookings, car rentals, and visa application & renewals.</p>
                <h3 className='text-2xl mt-1 mb-1'>Step #3 Get your insurance and travel anywhere with confidence</h3>                
                <p>We will notify you once your insurance is ready. We can deliver them in-person or via email.</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>Travel with Peace of Mind</h2>                
                <h3 className='text-2xl mt-1 mb-1'>Get your insurance quote nowe</h3>                
                <p>Organizing travel insurance with the help of Koyap is effortless. Stop by our offices to get a free consultation with one of our agents and discuss different travel insurance options.</p>
                <p>We also offer frequent member discounts and exclusive deals for travelers who join our mailing list. </p>
                <p>Sign up HERE to get special prices and other perks.</p>
            </div>
        </div>
        </main>
    );
}

export default Hotels;
