import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../redux/dataSlice'; // Replace with the correct path to your dataSlice

const store = configureStore({
  reducer: {
    data: dataReducer, // Mount the data slice reducer
  },
});

export default store;
