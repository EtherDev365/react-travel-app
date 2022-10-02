import {
    airport_search_url,
    token_url,
    flight_search_url,
    city_search_url,
    hotel_search_url,
    hotel_detail_url
} from '../constants';

const getToken = async () => {
    return await fetch(token_url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.status);
        })
        .then(response => {
            localStorage.setItem('resvoyage_token', response.Token);
            return response.Token;
        });
};
const getAirports = async airport => {
    const url = airport_search_url + airport.toLowerCase() + '&count=10';
    let token = localStorage.getItem('resvoyage_token');
    const requestOptions = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const res = await fetch(url, requestOptions);
    if (!res.ok) {
        throw new Error(res.status);
    }
    const data = await res.json();
    // console.log(data);
    return data;
};
const getCities = async city => {
    const url = city_search_url + city.toLowerCase();
    let token = localStorage.getItem('resvoyage_token');
    const requestOptions = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const res = await fetch(url, requestOptions);
    if (!res.ok) {
        throw new Error(res.status);
    }
    const data = await res.json();
    // console.log(data);
    return data;
};
const getFlights = async payload => {
    let token = localStorage.getItem('resvoyage_token');
    const requestOptions = {
        headers: { Authorization: `Bearer ${token}` }
    };

    // flight class param
    let flightClass = '';
    if (payload.flightClass === 0) flightClass = 'Economy';
    else if (payload.flightClass === 1) flightClass = 'Premium';
    else if (payload.flightClass === 2) flightClass = 'Business';
    else if (payload.flightClass === 3) flightClass = 'First';
    else flightClass = 'NoPreference';
    let flightClassParam = '&FlightClass=' + flightClass;

    // members param
    let membersParam = '';
    if (payload.members.adu !== 0) {
        membersParam += '&Adults=' + payload.members.adu;
    }

    if (payload.members.chi !== 0) {
        membersParam += '&Children=' + payload.members.chi;
    }

    if (payload.members.ifs + payload.members.ifl !== 0) {
        membersParam +=
            '&Infants=' + (payload.members.ifs + payload.members.ifl);
    }
    // date param
    let dateParam = '';
    if (payload.flightWay === 0) {
        dateParam = `&DepartureDate1=${
            payload.searchItems[0].dates[0]
        }&DepartureDate2=${payload.searchItems[0].dates[1]}`;
    } else {
        for (let i = 0; i < payload.searchItems.length; i++) {
            dateParam += `&DepartureDate${i + 1}=${
                payload.searchItems[i].date
            }`;
        }
    }

    // from param
    let fromParam = `?from1=${payload.searchItems[0].from.Code}`;
    for (let i = 1; i < payload.searchItems.length; i++) {
        fromParam += `&from${i + 1}=${payload.searchItems[i].from.Code}`;
    }

    // to param
    let toParam = '';
    for (let i = 0; i < payload.searchItems.length; i++) {
        toParam += `&to${i + 1}=${payload.searchItems[i].to.Code}`;
    }

    if (payload.flightWay === 0) {
        fromParam += `&from2=${payload.searchItems[0].to.Code}`;
        toParam += `&to2=${payload.searchItems[0].from.Code}`;
    }

    let url =
        flight_search_url +
        fromParam +
        toParam +
        dateParam +
        membersParam +
        flightClassParam;

    // return await fetch(url, {
    //     headers: { Authorization: `Bearer ${token}` }
    // })
    //     .then((res) => res.json())
    //     .then((response) => {
    //         return response.PricedItineraries;
    //     });

    const res = await fetch(url, requestOptions);
    if (!res.ok) {
        throw new Error(res.status);
    }
    const data = await res.json();
    // console.log(data);
    return data;
};
const getHotels = async payload => {
    let token = localStorage.getItem('resvoyage_token');
    const requestOptions = {
        headers: { Authorization: `Bearer ${token}` }
    };
    // date param
    let dateParam = `&CheckInDate=${payload.dates[0]}&CheckoutDate=${
        payload.dates[1]
    }`;

    // hotel city param
    let city_param = `HotelCityCode=${payload.city}`;

    // desire param
    let desireParam = '';
    if (payload.request.adu !== 0) {
        desireParam += '&Adults=' + payload.request.adu;
    }

    if (payload.request.chi !== 0) {
        desireParam += '&Children=' + payload.request.chi;
    }

    if (payload.request.rms !== 0) {
        desireParam += '&RoomCount=' + payload.request.rms;
    }

    let url = hotel_search_url + city_param + dateParam + desireParam;

    const res = await fetch(url, requestOptions);
    if (!res.ok) {
        throw new Error(res.status);
    }
    const data = await res.json();
    // console.log(data);
    return data;
};

const getHotelDetail = async payload => {
    let token = localStorage.getItem('resvoyage_token');
    const requestOptions = {
        headers: { Authorization: `Bearer ${token}` }
    };

    let url = `${hotel_detail_url}?SessionId=${payload.sessionId}&HotelId=${
        payload.hotelId
    }`;

    const res = await fetch(url, requestOptions);
    if (!res.ok) {
        throw new Error(res.status);
    }
    const data = await res.json();
    // console.log(data);
    return data;
};
export default {
    getAirports,
    getToken,
    getFlights,
    getHotels,
    getCities,
    getHotelDetail
};
