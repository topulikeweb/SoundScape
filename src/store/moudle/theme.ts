import { createSlice } from '@reduxjs/toolkit';

const Theme = createSlice({
  name: 'Theme',
  initialState: {
    theme: {
      fontColor: 'aliceblue',
      darkColor: '#121212',
      darkBackGroundColor: '#000000',
      transparentWhite: '#494949',
    },
  },
  reducers: {
    // 改变主题颜色
    changeTheme(state, { payload }) {
      if (payload === 'dark') {
        state.theme.fontColor = 'aliceblue';
        state.theme.darkBackGroundColor = '#000000';
        state.theme.darkColor = '#121212';
        state.theme.transparentWhite = '#494949';
      } else {
        state.theme.darkBackGroundColor = '#eae5e5';
        state.theme.darkColor = '#ffffff';
        state.theme.transparentWhite = '#a1a1a1';
        state.theme.fontColor = '#000000';
      }
    },
  },
});

export const { changeTheme } = Theme.actions;
export default Theme.reducer;
