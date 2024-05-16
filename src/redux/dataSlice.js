import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '', // Initial state of the data
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Reducer to update the state
    setData: (state, action) => {
     console.log('store ');
      state.value = action.payload;
    },
  },
});

// Export the action creator
export const { setData } = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;
