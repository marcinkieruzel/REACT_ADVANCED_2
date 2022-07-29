import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reduce from 'lodash/reduce'
// import { fetchCount } from './counterAPI';

const initialState = {
  balans: 0,
  users: [],
  transactions: [],
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCredit: (state, action) => {
      console.log("Action", action);

      state.transactions = [
        ...state.transactions,
        { ...action.payload, type: "credit" },
      ];


      state.balans = state.balans - action.payload.amount


    //   state.balans = reduce(state.transactions, () => {

    //   }, 0)


    },
    addDeposit: (state, action) => {
      console.log("Action", action);

      state.transactions = [
        ...state.transactions,
        { ...action.payload, type: "deposit" },
      ];

      state.balans = state.balans + action.payload.amount

    },

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addCredit, addDeposit } = bankSlice.actions;

export const selectBank = (state) => state.bank;

export default bankSlice.reducer;
