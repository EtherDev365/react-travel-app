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
                title='Hassle-Free Travel Documents | Travel Anywhere with Ease | Koyap'
                htmlAttributes={{ lang: 'en' }}

                meta={[
                    {
                        name: 'description',
                        content: 'Koyap\'s team is equipped to handle all sorts of travel documents, based on the requirements of your travel destination. Reach any location with our hassle-free service.'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content: 'Hassle-Free Travel Documents | Travel Anywhere with Ease | Koyap'
                    },
                    {
                        property: 'og:description',
                        content: 'Discover Koyap\'s selection of high-end hotels and resorts. Enjoy your vacation with maximum comfort and unparalleled hotel service. Let us take care of you.'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/documents'
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
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-white font-bold leading-tight">Documentation</h1>
                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                        Last modified: November 15th, 2021
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-16">
            <div className="prose prose-sm max-w-4xl mx-auto">
                <h2 className='text-2xl font-bold mt-3 mb-1'>Travel Anywhere Without Administrative Hassles</h2>
                <p>With decades of combined experience working in the travel industry, Koyap’s travel consultants are equipped to handle travel documents for over 200 countries across the globe. We can organize travel documents for business trips, family vacations, or any other occasion.</p>
                <p>Thanks to our global network or partners and associates, we’re able to handle the most demanding of requests. Countries update and change their travel requirements regularly, which is why we’re constantly in touch with our experts to make sure that all requirements are met.</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>Let us take care of your travel documents</h2>
                <h3 className='text-2xl mt-1 mb-1'>Simplicity</h3>                
                <p>We take care of all the administrative logistics for you. The only thing you need to do is give us information about the trip and your personal information. Our team will do the rest and keep you posted along the way.</p>
                <h3 className='text-2xl mt-1 mb-1'>Hassle-Free Service</h3>                
                <p>Our travel team individually reviews and handles your applications and documents to ensure that all requirements are met. We will also notify you about each step and progress of your document applications.</p>
                <h3 className='text-2xl mt-1 mb-1'>Guaranteed Approval</h3>
                <p>We don’t submit your travel documents for approval before we’re sure that it’s going to pass. We work with travel experts across the globe to ensure maximum compliance and a hassle-free service for our clients.</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>Why Our Clients Choose Us</h2>                
                <p>We provide our clients with top-notch experiences and help them make unforgettable memories. Here’s why our clients choose us:</p>
                <p>●	We can organize travel documents for almost any location in the world</p>
                <p>●	We offer quick and effective service</p>
                <p>●	Your documents will be delivered to you ahead of the trip</p>
                <p>●	Our customer service is there to support you at all hours</p>
                <p>●	Our systems are very secure to ensure that all our clients’ information is safe at all times</p>
                <p>●	We help with additional travel requirements - handling travel insurance, flights, passport renewals, visa applications, visa renewals, hotel bookings, and car rentals.</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>How It Works</h2>                
                <h3 className='text-2xl mt-1 mb-1'>Step #1 Discuss your travel plans with one of our consultants</h3>                
                <p>Give us a call or stop by one of our locations to share your travel plans with one of our consultants. We will inquire about travel document requirements for that particular country and do the heavy lifting for you.</p>
                <h3 className='text-2xl mt-1 mb-1'>Step #2 Choose additional services</h3>                
                <p>To make sure that your trip goes as smoothly as possible, we also offer extra services for our clients. Additional services include travel insurance, passport renewal, hotel bookings, car rentals, and visa application & renewals.</p>
                <h3 className='text-2xl mt-1 mb-1'>Step #3 Get your documents and travel anywhere</h3>                
                <p>We will notify you once the documents are ready and discuss how you’d like them to be delivered. You can stop by our offices to pick them up or we can deliver it straight to your doorstep.</p>
                <h2 className='text-2xl font-bold mt-3 mb-1'>Get to Any Location With Ease</h2>                
                <h3 className='text-2xl mt-1 mb-1'>We arrange all types of travel documents for countries across the globe</h3>                
                <p>Organizing travel documents with the help of Koyap is quick and easy. Stop by our offices to get a free consultation with one of our agents and confirm all the peculiarities of your trip. We’ll look into the requirements and hook you up with spotless travel documents.</p>
                <p>We also offer frequent member discounts and exclusive deals for travelers who join our mailing list. </p>
                <p>Sign up HERE to get special prices and other perks.</p>
            </div>
        </div>
        </main>
    );
}

export default Hotels;
