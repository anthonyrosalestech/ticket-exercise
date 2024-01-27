import {configureStore} from "@reduxjs/toolkit";
import ticketReducer from './ticketSlice.js'

export const store = configureStore({
  reducer: {
    ticket: ticketReducer, 
  }
})