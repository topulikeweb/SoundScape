import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 10,
  },
  reducers: {
    changeMessage(state, { payload }) {
      state = state + payload;
    },
  },
});
export const { changeMessage } = counterSlice.actions;
export default counterSlice.reducer;
