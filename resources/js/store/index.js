import { configureStore } from '@reduxjs/toolkit'
import passengerReducer from './passengerSlice'
import flightReducer from './flightSlice'
import hotelReducer from './hotelSlice'

export const store = configureStore({
  reducer: {
    passenger: passengerReducer,
    flight: flightReducer,
    hotel: hotelReducer,
  },
})