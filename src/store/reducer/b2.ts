import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numbers: [],
};

const numberListSlice = createSlice({
  name: 'numberList',
  initialState,
  reducers: {
    generateRandomNumbers: (state:any) => {
      const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
      state.numbers = randomNumbers;
    },
  },
});

export const { generateRandomNumbers } = numberListSlice.actions;

export default numberListSlice.reducer;