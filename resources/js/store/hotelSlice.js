import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import ResvoyageService from '../services/ResvoyageService';

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        city: '',
        request: {
            adu: 1,
            chi: 0,
            rms: 1
        },
        dates: [format(new Date(), 'MM/dd/yyyy'), format(new Date().setDate(new Date().getDate() + 1), 'MM/dd/yyyy')],
        loading: false,
        hotels: [],
        sessionId: '',
        hotel: {
            Id: '',
        },
        error: false,
        errorMessage: ''
    },
    reducers: {
        setCity: (state, { payload }) => {
            state.city = payload;
        },
        setRequest: (state, { payload }) => {
            state.request = payload;
        },
        setDates: (state, { payload }) => {
            state.dates = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setSessionId: (state, { payload }) => {
            state.sessionId = payload;
        },
        setHotels: (state, { payload }) => {
            state.hotels = payload;
            state.loading = false;
        },
        setHotel: (state, { payload }) => {
            state.hotel = payload;
            state.loading = false;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setErrorMessage: (state, { payload }) => {
            state.errorMessage = payload;
        },
        handleRequestChange: (state, { payload }) => {
            if (payload.key in state.request) {
                if (payload.inc) {
                    state.request[payload.key]++;
                } else {
                    state.request[payload.key]--;
                }
            }
        },
    }
});

export const {
    setCity,
    setRequest,
    setDates,
    setLoading,
    setSessionId,
    setHotels,
    setHotel,
    setError,
    setErrorMessage,
    handleRequestChange
} = hotelSlice.actions;

export const searchHotelsAsync = payload => async dispatch => {
    dispatch(setLoading(true));
    let result = ResvoyageService.getHotels(payload);
    result
        .then(res => {
            dispatch(setHotels(res.Hotels));
            dispatch(setSessionId(res.SessionId));
            dispatch(setError(false));
        })
        .catch(reason => {
            dispatch(setHotels([]));
            dispatch(setSessionId(''));
            dispatch(setError(true));
            dispatch(setErrorMessage(reason.message === '400' ? 'Bad Request!' : 'Net connection error!'));
        });
};

export const searchHotelAsync = payload => async dispatch => {
    dispatch(setLoading(true));
    let result = ResvoyageService.getHotelDetail(payload);
    result
        .then(res => {
            dispatch(setHotel({...res.Hotels[0], MinPrice: res.MinPrice, MaxPrice: res.MaxPrice, PaginationData: res.PaginationData}));
            dispatch(setError(false));
        })
        .catch(reason => {
            dispatch(setHotel({ Id: '' }));
            dispatch(setError(true));
        });
};

export default hotelSlice.reducer;
