import { createSlice } from '@reduxjs/toolkit'

export const passengerSlice = createSlice({
  name: 'passenger',
  initialState: {
    members: {
      adu: 1,
      chi: 0,
      ifs: 0,
      ifl: 0,
    }
  },
  reducers: {
    handleMembersChange: (state, {payload}) => {
      if (payload.key in state.members) {
        if (payload.inc) {
          state.members[payload.key]++;
        } else {
          state.members[payload.key]--;
        }
      }
    },
    setMembers: (state, {payload}) => {
      state.members = {...payload};
    },
  },
})

export const { handleMembersChange, setMembers } = passengerSlice.actions

export const selectPassengerMembers = (state) => state.passenger.members

export default passengerSlice.reducer
