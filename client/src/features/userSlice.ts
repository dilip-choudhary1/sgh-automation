
import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { userType } from '../types'


export interface user {
  value: userType
}


const initialState: user = {
  value: {
    name: "Vansh Agarwal",
    username: "vansh2308",
    dateJoined: new Date(),
    gender: "male",
    role: "admin",
    email: "agarwal.25@iitj.ac.in",
    contact: "+91 9571924777",
    activities: [
      {
        headline: "Dispatched product P031 to shipping",
        link: "/user/:userId/pipeline/:orderId",
        timestamp: new Date()
      },
      {
        headline: "Updated inventory C011 by 3 qty",
        link: "/user/:userId/inventory",
        timestamp: new Date()
      },
      {
        headline: "Dispatched product P031 to shipping",
        link: "/user/:userId/pipeline/:orderId",
        timestamp: new Date()
      },
      {
        headline: "Dispatched product P031 to shipping",
        link: "/user/:userId/pipeline/:orderId",
        timestamp: new Date()
      },
    ]
  },
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer