import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bankReducer from '../features/bank/BankSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bank: bankReducer
  },
});
