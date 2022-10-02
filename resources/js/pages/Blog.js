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
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-white font-bold leading-tight">Our Blogs</h1>
                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                        Last modified: November 15th, 2021
                        </p>
                    </div>
                </div>
            </div>
            <div className="mb-8">
            <div role="article" tabIndex="0" className="focus:outline-none container mx-auto py-8 px-4">
                <div className="pt-14 xl:px-0 px-4">
                    <div className="w-full lg:flex">
                        <div className="lg:w-1/2">
                            <img tabIndex="0" role="img" aria-label=" Beautiful italy street" src="./images/blog1.png" className="focus:outline-none w-full" alt="Beautiful italy street" style={{borderRadius: 6}}/>
                            <div className="mt-8 lg:mb-0 mb-8">
                                <h2 tabIndex="0" className="focus:outline-none f-m-m text-2xl font-semibold leading-7">Beautiful Italy, Travel Blog</h2>
                                <p tabIndex="0" className="focus:outline-none text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="mt-6">
                                    <div>
                                        <a className="hover:text-indigo-900 text-indigo-700 underline text-base font-semibold f-m-m" role="link" href="./blogdetail">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:ml-8">
                            <div className="lg:flex items-start mb-8">
                                <img tabIndex="0" role="img" aria-label="bag on a table"  alt="bag on table" style={{borderRadius: 6}} src="./images/blog2.png" className="focus:outline-none w-full" />
                                <div className="lg:ml-6">
                                    <h3 tabIndex="0" className="focus:outline-none f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">A Broken Backpack</h3>
                                    <p tabIndex="0" className="focus:outline-none text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                    <div className="mt-4">
                                        <a className="hover:text-indigo-900 text-indigo-700 underline text-base font-semibold f-m-m" role="link" href="./blogdetail">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex items-start mb-8">
                                <img tabIndex="0" role="img" aria-label="car in desert" alt="car in desert" style={{borderRadius: 6}} src="./images/blog3.png" className="focus:outline-none w-full" />
                                <div className="lg:ml-6">
                                    <h3  tabIndex="0" className="focus:outline-none f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">My life’s a Movie</h3>
                                    <p tabIndex="0" className="focus:outline-none text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                    <div className="mt-4">
                                        <a className="hover:text-indigo-900 text-indigo-700 underline text-base font-semibold f-m-m" role="link" href="./blogdetail">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex items-start mb-8">
                                <img tabIndex="0" role="img" aria-label="man with camel" alt="man with camel" style={{borderRadius: 6}} src="./images/blog4.png" className="focus:outline-none w-full" />
                                <div className="lg:ml-6">
                                    <h3 tabIndex="0" className="focus:outline-none -m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">Lilii’s Travel Plans</h3>
                                    <p tabIndex="0" className="focus:outline-none text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                    <div className="mt-4">
                                        <a className="hover:text-indigo-900 text-indigo-700 underline text-base font-semibold f-m-m" role="link" href="./blogdetail">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center my-16 w-full">
                    <button className="border border-indigo-700 focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4 hover:bg-gray-200">Browse More</button>
                </div>
            </div>
        </div>
        </main>
    );
}

export default Hotels;
