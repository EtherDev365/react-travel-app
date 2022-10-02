import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    useParams,
    useSearchParams,
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
import useWindowSize from '../services/Hlp';
import {
    Collapse,
    List,
    ListSubheader,
    ListItemButton,
    ListItemText,
    Avatar,
    Tooltip,
    ListItemAvatar,
    Divider,
    Backdrop,
    CircularProgress,
    Snackbar,
    Alert,
    IconButton,
    Skeleton,
    Stack,
    Card,
    CardMedia,
    CardContent,
    Box,
    Typography,
    Fab,
    Slide,
    Dialog,
    AppBar,
    Toolbar,
    Button,
    ListItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ResvoyageService from '../services/ResvoyageService';
import { searchHotelAsync } from '../store/hotelSlice';
import errorImg from '../../images/dot-shape.png';

import EmailIcon from '@mui/icons-material/Email';
import tempData from '../data/hotelDetail.json';
import MailPopUp from '../components/MailPopUp';
import { isNumber } from 'lodash';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Hotel() {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const [visibleMailPopUp, setVisibleMailPopUp] = React.useState(false);
    const [openNotify, setOpenNotify] = React.useState(false);
    const [readMore, setReadMore] = React.useState(false);
    const hotelId = params.hotelId;
    const sessionId = searchParams.get("sessionId") || "";
    const { error, loading, hotel } = useSelector(state => ({ ...state.hotel }));
    const dispatch = useDispatch();
    let mh = readMore ? 'max-h-max' : 'max-h-48';
 //   const hotel = tempData.Hotels[0];
    let star = 0;
    let stars = [];
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true: false;
    const [imgDlgOpen, setImgDlgOpen] = React.useState(false);

    const handleClickImgDlgOpen = () => {
        setImgDlgOpen(true);
    };

    const handleImgDlgClose = () => {
        setImgDlgOpen(false);
    };

    for(let j in hotel.HotelAwards) {
        let c = hotel.HotelAwards[j].Rating.split(' ')[0];
        if(isNumber(c)) {
            stars[j] = +c;
            star += +c;
        } else {
            stars[j] = 5;
            star += 5;
        }
    }
    console.log(hotel);
    let minPrice = 99999999, maxPrice = 0;
    for(let i in hotel.Rooms) {
        if(minPrice > hotel.Rooms[i].RoomRate) {
            minPrice = hotel.Rooms[i].RoomRate;
        }
        if(maxPrice < hotel.Rooms[i].RoomRate) {
            maxPrice = hotel.Rooms[i].RoomRate;
        }
    }

    React.useEffect(() => {
        let token = ResvoyageService.getToken();
        token.catch(r => {
            setOpenNotify(true);
        });
        dispatch(searchHotelAsync({ hotelId, sessionId }));
    }, []);

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
    const handleNotifyClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenNotify(false);
    };

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleNotifyClose}
            >
                <CheckIcon color="primary" fontSize="small" />
            </IconButton>
        </React.Fragment>
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
            <section className="relative min-h-[700px]">
                {}
                {error && (
                    <div className='w-full text-center text-2xl text-slate-500'>Net connection error!</div>
                )}
                {(loading || error) ? (
                    <div className="px-8 my-12">
                        <div className={phoneFlag? "w-full my-5": "flex w-full my-5"}>
                            <div className={phoneFlag? "":"w-9/12"}>
                                <Skeleton variant="text" animation="wave" width={350}>
                                    <Typography component="div" variant="h3">.</Typography>
                                </Skeleton>
                                <Skeleton variant="text" animation="wave" width={150} />
                                <Skeleton variant="text" animation="wave" width={200} />
                            </div>
                            <div className={phoneFlag? "pt-5": "w-3/12 text-right pt-5"}>
                                <Skeleton variant="text" animation="wave" width={175}>
                                    <Typography component="div" variant="h5">.</Typography>
                                </Skeleton>
                                <div className="text-sm">
                                    <Skeleton variant="text" animation="wave" width={145} />
                                    <Skeleton variant="text" animation="wave" width={120} />
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto">
                            <div className="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
                                <div className="w-full col-span-2 row-span-2">
                                    <Skeleton variant="rectangular" className="w-full !h-[400px] rounded-r-none rounded-xl" animation="wave" sx={{ borderRadius: 1 }} />
                                </div>

                                <div className="w-full rounded">
                                    <Skeleton variant="rectangular" className="w-full !h-full rounded-l-none rounded-br-none rounded-xl" animation="wave" sx={{ borderRadius: 1 }} />
                                </div>
                                <div className="relative w-full rounded">
                                    <Skeleton variant="rectangular" className="w-full !h-full rounded-l-none rounded-tr-none rounded-xl" animation="wave" sx={{ borderRadius: 1 }} />
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto">
                            <div className="flex">
                                <div className="w-1/2 py-6 pr-3 transition-all ease-in-out duration-300">
                                    <Skeleton variant="text" animation="wave" width={160}>
                                        <Typography component="div" variant="h3">.</Typography>
                                    </Skeleton>
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" />
                                    <Skeleton variant="text" animation="wave" width={120} sx={{ marginLeft: 2, marginTop: 1 }}>
                                        <Typography component="div" variant="h2">.</Typography>
                                    </Skeleton>
                                </div>
                                <div className="w-1/2 py-6">
                                    <Skeleton variant="text" animation="wave" width={100}>
                                        <Typography component="div" variant="h3">.</Typography>
                                    </Skeleton>
                                    <div className="flex py-6 space-x-4">
                                        <Skeleton variant="rectangular" className="w-24 !h-24 p-3 rounded-md" animation="wave" />
                                        <div>
                                            <Skeleton variant="text" animation="wave" width={150}>
                                                <Typography component="div" variant="h3">.</Typography>
                                            </Skeleton>
                                        </div>
                                    </div>
                                    <div className="flex py-6 space-x-4">
                                        <Skeleton variant="rectangular" className="w-24 !h-24 p-3 rounded-md" animation="wave" />
                                        <div>
                                            <Skeleton variant="text" animation="wave" width={150}>
                                                <Typography component="div" variant="h3">.</Typography>
                                            </Skeleton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):hotel.HotelName && (
                    <div className="px-8 my-12">
                        <div className={phoneFlag? "w-full my-5":"flex w-full my-5"}>
                            <div className={phoneFlag? "":"w-9/12"}>
                                <h1 className="text-2xl font-extrabold">
                                    <span>{hotel.HotelName}</span>
                                </h1>
                                <p className="font-medium">
                                    <span>{hotel.ChainName + ', ' + hotel.HotelCityCode}</span>
                                </p>
                                {/*<p>
                                    {hotel.HotelAwards.map((item, index) => (
                                        <span key={index}>{item.Rating + ':' + item.Provider + ' '}</span>
                                    ))}
                                </p>*/}
                                {hotel.HotelAwards.length > 0 && (
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {(star / hotel.HotelAwards.length).toFixed(1)}&nbsp;
                                        <span>
                                            <svg width="16" height="25" fill="orange" className='inline mr-2'>
                                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                            </svg>
                                        </span>
                                        <span style={{color:'#1a73e8'}}>
                                        ({hotel.HotelAwards.length})
                                        </span>
                                    </Typography>
                                )}
                            </div>
                            <div className={phoneFlag? "": "w-3/12 text-right"}>
                                <p>
                                    <span className="text-xl font-extrabold">
                                        <span>{minPrice + ' ~ ' + maxPrice + ' ' + hotel.CurrencyCode}</span>
                                    </span>
                                </p>
                                <div className="text-sm">
                                    <p>{hotel.HotelPhone? 'Phone : ' + hotel.HotelPhone: ''}</p>
                                    <p>{hotel.HotelFax? 'Fax : ' + hotel.HotelFax: ''}</p>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto">
                            <div className="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
                                <div className="w-full col-span-2 row-span-2">
                                    <img className="w-full h-full rounded-r-none rounded-xl" src={hotel.HotelMainImage}
                                        alt={hotel.HotelName} onError={(e) => { e.target.onerror = null; e.target.src = errorImg }} />
                                </div>

                                <div className="w-full rounded">
                                    <img className="w-full h-full rounded-l-none rounded-br-none rounded-xl"
                                        src={(hotel.HotelImages) ? hotel.HotelImages[0] : ''} alt="image1" onError={(e) => { e.target.onerror = null; e.target.src = errorImg }}/>
                                </div>
                                <div className="relative w-full rounded">
                                    <img className="w-full h-full rounded-l-none rounded-tr-none rounded-xl"
                                        src={(hotel.HotelImages) ? hotel.HotelImages[1] : ''} alt="image2" onError={(e) => { e.target.onerror = null; e.target.src = errorImg }}/>
                                    <Button variant='contained' onClick={handleClickImgDlgOpen} className="absolute p-2 text-gray-700 right bg-white bottom-12 rounded-xl" style={{left:140}}>View all photos</Button>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto">
                            <div className={phoneFlag? "": "flex"}>
                                <div className={phoneFlag? "py-6 space-y-4 transition-all ease-in-out duration-300": "w-1/2 py-6 space-y-4 transition-all ease-in-out duration-300"}>
                                    <h2 className="text-2xl font-extrabold">Description</h2>
                                    <p className={mh + " overflow-hidden overflow-ellipsis"}>
                                        {hotel.HotelDescription}
                                    </p>
                                    {!readMore && (
                                        <button className="p-2 px-4 mt-2 border border-gray-200 rounded-md" onClick={handleReadMore}>Read more</button>
                                    )}
                                </div>
                                <div className={phoneFlag? "py-6": "w-1/2 py-6"} style={{marginLeft:phoneFlag?"0px":"20px"}}>
                                    <h2 className="text-2xl font-extrabold pb-3">Rating</h2>
                                    {hotel.HotelAwards.map((item, index) => (
                                        index < 10 &&
                                        <div className="flex pt-1" key={index}>
                                            {stars[index] >= 1 ? <StarIcon color='warning'/>: <StarBorderIcon color='warning'/>}
                                            {stars[index] >= 2 ? <StarIcon color='warning'/>: <StarBorderIcon color='warning'/>}
                                            {stars[index] >= 3 ? <StarIcon color='warning'/>: <StarBorderIcon color='warning'/>}
                                            {stars[index] >= 4 ? <StarIcon color='warning'/>: <StarBorderIcon color='warning'/>}
                                            {stars[index] >= 5 ? <StarIcon color='warning'/>: <StarBorderIcon color='warning'/>}
                                            <div className='pl-3'>
                                                <h3 className="text-xl font-bold">
                                                    <span>{item.Provider}</span>
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto">
                            <div className={phoneFlag? "": "flex"}>
                                <div className={phoneFlag ? "py-6": "w-1/2 py-6"}>
                                    <h2 className="text-2xl font-extrabold pb-3">Hotel Amenities</h2>
                                    {hotel.HotelAmenitiesCollection.map((item, index) => (<p key={index}><CheckIcon color='success' className="mr-1"/>{item.Name}</p>))}
                                </div>
                                <div className={phoneFlag? "py-6": "w-1/2 py-6"} style={{marginLeft:phoneFlag? "0px": "20px"}}>
                                    <h2 className="text-2xl font-extrabold pb-3">Room Amenities</h2>
                                    {hotel.RoomAmenitiesCollection.map((item, index) => (<p key={index}><CheckIcon color='success' className="mr-1"/>{item.Name}</p>))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </section>
            <Dialog
                fullScreen={phoneFlag}
                open={imgDlgOpen}
                onClose={handleImgDlgClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: phoneFlag? 'fixed': 'sticky', width: '100%'}} className="!bg-indigo-500">
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleImgDlgClose}
                    aria-label="close"
                    >
                    <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Hotel Images
                    </Typography>
                </Toolbar>
                </AppBar>
                {
                    hotel.HotelImages && hotel.HotelImages.map(function(value, index) {return <img className="w-full h-full" style={{marginTop: index==0&&phoneFlag?60:4}}
                    src={value} key={index} alt="image1" onError={(e) => { e.target.onerror = null; e.target.src = errorImg }}/>})
                }
            </Dialog>
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
                    Please check your network connection!
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
                    JSON.stringify(hotel, null, 2)
                }
                show={visibleMailPopUp}
                onClose={handleOnCloseMailPopUp}
                onSubmit={handleOnSubmitMailPopUp}
            />
        </main>
    );
}

export default Hotel;
