import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayMode: 'grid' 
};

const displayModeSlice = createSlice({
  name: 'displayMode',
  initialState,
  reducers: {
    setDisplayMode: (state, action) => {
      state.displayMode = action.payload;
    }
  }
});

export const { setDisplayMode } = displayModeSlice.actions;
export default displayModeSlice.reducer;