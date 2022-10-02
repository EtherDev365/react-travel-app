import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import ResvoyageService from '../services/ResvoyageService';

export const flightSlice = createSlice({
    name: 'flight',
    initialState: {
        flightWay: 0,
        flightClass: 0,
        searchItems: [
            {
                from: '',
                to: '',
                date: format(new Date(), 'MM/dd/yyyy'),
                dates: [format(new Date(), 'MM/dd/yyyy'), null]
            }
        ],
        initial: true,
        loading: false,
        flights: [],
        availableAirlines: [],
        prices: [],
        error: false,
        errorMessage: ''
    },
    reducers: {
        setFlightWay: (state, { payload }) => {
            state.flightWay = payload;
        },
        setFlightClass: (state, { payload }) => {
            state.flightClass = payload;
        },
        setFlightSearchItems: (state, { payload }) => {
            state.searchItems = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setFlights: (state, { payload }) => {
            state.flights = payload;
            state.loading = false;
        },
        setAvailableAirlines: (state, { payload }) => {
            state.availableAirlines = payload;
        },
        setPrices: (state, { payload }) => {
            state.prices = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setErrorMessage: (state, { payload }) => {
            state.errorMessage = payload;
        },
        setInitial: (state, { payload }) => {
            state.initial = payload;
        },
    }
});

export const {
    setFlightWay,
    setFlightClass,
    setFlightSearchItems,
    setLoading,
    setFlights,
    setError,
    setErrorMessage,
    setPrices,
    setAvailableAirlines,
    setInitial
} = flightSlice.actions;

export const searchFlightsAsync = payload => async dispatch => {
    dispatch(setLoading(true));
    let result = ResvoyageService.getFlights(payload);
    result
        .then(res => {
            dispatch(setFlights(res.PricedItineraries));
            dispatch(setPrices([res.MinPrice, res.MaxPrice]));
            let airlines = [];
            for (let i = 0; i < res.PricedItineraries.length; i++) {
                for (let j = 0; j < res.PricedItineraries[i].AirItinerary.OriginDestinationOptions.length; j++) {
                    for (let k = 0; k < res.PricedItineraries[i].AirItinerary.OriginDestinationOptions[j].FlightSegments.length; k++) {
                        if (res.PricedItineraries[i].AirItinerary.OriginDestinationOptions[j].FlightSegments[k].OperatingAirlineName !== "Unknown") {
                            let exist = airlines.indexOf(res.PricedItineraries[i].AirItinerary.OriginDestinationOptions[j].FlightSegments[k].MarketingAirlineName) > -1;
                            if (!exist)
                                airlines.push(res.PricedItineraries[i].AirItinerary.OriginDestinationOptions[j].FlightSegments[k].MarketingAirlineName);
                        }
                    }
                }
            }
            dispatch(setAvailableAirlines(airlines));
            dispatch(setError(false));
        })
        .catch(reason => {
            dispatch(setFlights([]));
            dispatch(setAvailableAirlines([]));
            dispatch(setPrices([]));
            dispatch(setError(true));
            dispatch(setErrorMessage(reason.message === '400' ? 'Bad Request!' : 'Net connection error!'));
        }).finally(() => dispatch(setInitial(false)));
};

export default flightSlice.reducer;
