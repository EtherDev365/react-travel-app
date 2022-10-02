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
            <div className="md:flex items-center justify-between mt-8">
                <div className="lg:w-2/5 md:w-1/2 md:mr-6 ">
                    <h1 className="lg:text-5xl text-3xl font-bold mt-4 text-gray-800">Taking you through Sahara desert</h1>
                    <div className="flex items-center lg:mt-8 mt-6">
                        <img src="./images/bd1.png" alt="profile-picture" className="w-10 h-10" style={{borderRadius: 999}} />
                        <div>
                            <p className="text-base text-gray-800 ml-4">By <span className="underline cursor-pointer">Rowan Aguilar</span></p>
                        </div>
                    </div>
                    <p className="text-base leading-6 text-gray-600 lg:mt-16 mt-12">
                        A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age so they can understand it's not literally raining cats and dogs, and it's just raining really hard. This is an simple way to illustrate what an idiom is that kids can easily conceptualize.A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age so they can understand it's not literally raining cats and dogs, and it's just raining really hard. This is an simple way to illustrate what an idiom is that kids can
                        easily conceptualize.
                    </p>
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700  focus:outline-none text-lg lg:mt-8 mt-6 font-semibold text-gray-800 flex items-center justify-center">
                        Continue Reading
                        <div className="ml-3 mt-1.5">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16602 4H12.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 7.33333L12.8333 4" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 0.666656L12.8333 3.99999" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="lg:w-2/5 md:w-1/2 h-full md:mt-0 mt-6">
                    <img src="./images/bd2.png" alt="old land rover" className="h-full object-cover object-center rounded-md" />
                </div>
            </div>

            <div role="article" tabIndex="0" className="focus:outline-none container my-10 pt-16">
                <div role="contentinfo" className="mb-12 xl:w-full lg:w-full w-11/12 mx-auto">
                    <h1 tabIndex="0" className="focus:outline-none xl:text-3xl text-2xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-bold mb-4">Related Blog Posts</h1>
                </div>
                <div tabIndex="0" aria-label="group of cards" className="focus:outline-none lg:flex md:flex sm:flex xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    <div tabIndex="0" aria-label="card 2" className="focus:outline-none xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                        <div className="shadow">
                            <div className="h-48 bg-cover rounded">
                                <img tabIndex="0" role="img" aria-label="books" src="./images/bd3.png" alt="books" className="focus:outline-none h-full w-full object-cover overflow-hidden rounded shadow" />
                            </div>
                            <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                                <p tabIndex="0" className="focus:outline-none text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                                <p tabIndex="0" className="focus:outline-none text-sm text-gray-600 text-center">
                                    May 13, 2019 by
                                    <a className="focus:text-indigo-400  hover:text-indigo-400 text-indigo-700 cursor-pointer"><span >Sameul Guzman</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" aria-label="card 2" className="focus:outline-none xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                        <div className="shadow">
                            <div className="h-48 bg-cover rounded">
                                <img tabIndex="0" role="img" aria-label="books" src="./images/bd4.png" alt="books" className="focus:outline-none h-full w-full object-cover overflow-hidden rounded shadow" />
                            </div>
                            <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                                <p tabIndex="0" className="focus:outline-none text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                                <p tabIndex="0" className="focus:outline-none text-sm text-gray-600 text-center">
                                    May 13, 2019 by
                                    <a className="focus:text-indigo-400  hover:text-indigo-400 text-indigo-700 cursor-pointer"><span >Sameul Guzman</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" aria-label="card 3" className="focus:outline-none xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                        <div className="shadow">
                            <div className="h-48 bg-cover rounded">
                                <img tabIndex="0" role="img" aria-label="Origami" src="./images/bd5.png" alt="Origami " className="focus:outline-none h-full w-full object-cover overflow-hidden rounded shadow" />
                            </div>
                            <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                                <p tabIndex="0" className="focus:outline-none text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                                <p tabIndex="0" className="focus:outline-none text-sm text-gray-600 text-center">
                                    May 13, 2019 by
                                    <a className="focus:text-indigo-400  hover:text-indigo-400 text-indigo-700 cursor-pointer"><span >Sameul Guzman</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" aria-label="card 4" className="focus:outline-none xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                        <div className="shadow">
                            <div className="h-48 bg-cover rounded">
                                <img tabIndex="0" role="img" aria-label="people in sunset" src="./images/bd6.png" alt="people in sunset" className="focus:outline-none h-full w-full object-cover overflow-hidden rounded shadow" />
                            </div>
                            <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                                <p tabIndex="0" className="focus:outline-none text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                                <p tabIndex="0" className="focus:outline-none text-sm text-gray-600 text-center">
                                    May 13, 2019 by
                                    <a className="focus:text-indigo-400  hover:text-indigo-400 text-indigo-700 cursor-pointer"><span >Sameul Guzman</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hotels;
