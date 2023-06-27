import { createSlice } from '@reduxjs/toolkit';

const MusicList = createSlice({
  name: 'MusicList',
  initialState: {
    MusicList: [],
  },
  reducers: {
    changeMusicList(state, { payload }) {
      state.MusicList = payload;
    },
  },
});

export const { changeMusicList } = MusicList.actions;
export default MusicList.reducer;
