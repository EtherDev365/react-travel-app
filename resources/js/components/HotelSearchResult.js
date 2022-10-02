import React from 'react';
import useWindowSize from '../services/Hlp';
import { useSelector, useDispatch } from 'react-redux';
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";

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
    Skeleton,
    Stack,
    Card,
    CardMedia,
    CardContent,
    Box,
    Typography
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { base_url } from '../constants';
import tempData from '../data/hotels.json';
import errorImg from '../../images/dot-shape.png';

function HotelSearchResult() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();

    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true: false;
    const dispatch = useDispatch();
    const { hotels, error, loading, sessionId } = useSelector(state => state.hotel);
    let stars = [];
    for (const i in hotels) {
        stars[i] = 0;
        for(let j in hotels[i].HotelAwards) {
            let c = hotels[i].HotelAwards[j].Rating.split(' ')[0];
            if(isNumber(c))
                stars[i] += +c;
            else {
                stars[i] += 5;
            }
        }
    }
    const handleClick = id => {
        // let payload = {sessionId, hotelId};
        // dispatch(searchHotelDetailAsync(payload));
        // history.push(`/hotels/${id}?sessionId=${sessionId}`);
        navigate(`/hotels/${id}?sessionId=${sessionId}`);

    };

    return (
        <List
            sx={{ bgcolor: 'background.paper', marginTop: 5, marginX: 2, minHeight: 300 }}
            subheader={
                <ListSubheader component="div" sx={{ top: 68.5, color: '#333' }}>
                    {hotels.length} Hotels
                </ListSubheader>
            }
        >
            {hotels.length === 0 && !error && !loading && (
                <div className='w-full text-center text-2xl text-slate-500'>No data!</div>
            )}
            {/* {error && (
                <div className='w-full text-center text-2xl text-slate-500'>Net connection error!</div>
            )} */}
            {!loading && hotels.map((item, index) => (
                <Card
                    sx={{ display: phoneFlag ? '' : 'flex', mx: 1, mb: 2, mt: 1, cursor: 'pointer', borderRadius: '10px' }}
                    key={index}
                    variant="outlined"
                    onClick={() => handleClick(item.Id)}
                >
                    <CardMedia
                        component="img"
                        sx={{ width: phoneFlag ? '100%' : 256, height: 160 }}
                        loading="lazy"
                        image={item.HotelMainImage}
                        onError={(e) => { e.target.onerror = null; e.target.src = errorImg }}
                    />
                    <Stack
                        width={"100%"}
                        direction={phoneFlag? 'column': "row"}
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={phoneFlag? 0 : 3}
                    >
                        <CardContent sx={{ flex: '1 0 auto', maxWidth: 400, width: (phoneFlag? '100%' : 400) }}>
                            <Typography component="div" variant={phoneFlag? 'h6' : "h5"}>
                                {item.HotelName}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {item.ChainName}
                            </Typography>

                            {item.HotelAwards.length > 0 && (
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {(stars[index] / item.HotelAwards.length).toFixed(1)}&nbsp;
                                    <span>
                                        <svg width="16" height="25" fill="orange" className='inline mr-2'>
                                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                        </svg>
                                    </span>
                                    <span style={{color:'#1a73e8'}}>

                                    ({item.HotelAwards.length})
                                    </span>
                                </Typography>
                            )}
                            {item.HotelAddress && (
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {item.HotelAddress.StreetAddress}
                                </Typography>
                            )}

                        </CardContent>
                        <CardContent sx={{ flex: '1 0 auto', textAlign: (phoneFlag? 'left': 'right'), alignSelf: (phoneFlag? '': 'center') }}>
                            <Typography component="div" variant="h6">
                                {item.DailyRatePerRoom + ' ' + item.CurrencyCode}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {item.HotelPhone && `TEL: ${item.HotelPhone}`}
                            </Typography>
                        </CardContent>
                    </Stack>
                </Card>
            ))}
            {loading && (
                <Stack
                    direction='column'
                    spacing={1}
                    sx={{ pl: 2 }}
                    divider={<Divider variant="inset" orientation="horizontal" />}
                >
                    {[...Array(3)].map((value, index) => (
                        <Stack
                            key={index}
                            direction='row'
                            spacing={3}
                        >
                            <Skeleton variant="rectangular" width={200} height={200} animation="wave" sx={{ borderRadius: 1 }} />
                            <Stack
                                direction='column'
                                spacing={0.4}
                                justifyContent="top"
                                alignItems="flex-start"
                            >
                                <Skeleton variant="text" animation="wave" width={250}>
                                    <Typography component="div" variant="h3">.</Typography>
                                </Skeleton>
                                <Skeleton variant="text" animation="wave" width={200} />
                                <Skeleton variant="text" animation="wave" width={200} />
                                <Skeleton variant="text" animation="wave" width={200} />
                            </Stack>
                            <Stack
                                direction='column'
                                spacing={1}
                                justifyContent="center"
                                alignItems="flex-end"
                                sx={{ position: 'absolute', right: 10 }}
                            >
                                <Skeleton variant="text" animation="wave" width={150}>
                                    <Typography component="div" variant="h5">.</Typography>
                                </Skeleton>
                                <Skeleton variant="text" animation="wave" width={200} />
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            )}
            {/* <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop> */}
        </List>
    );
}

export default HotelSearchResult;
