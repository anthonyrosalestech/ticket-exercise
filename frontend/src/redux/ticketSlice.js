import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: "",
  //   title: "",
  //   author: "",
  //   content: "",
  //   publication_date: "",
  // },
];

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    loadTickets: (state, action) => {
      state.push(...action.payload);
    },
    addTicket: (state, action) => {
      if (!action.payload.name) state.push(action.payload);
    },
  },
});

export const { addTicket, loadTickets } = ticketSlice.actions;
export default ticketSlice.reducer;
