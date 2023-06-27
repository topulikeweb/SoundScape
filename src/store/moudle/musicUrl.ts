import { createSlice } from '@reduxjs/toolkit';

const music = createSlice({
  name: 'music',
  initialState: {
    musicUrl: '',
    musicInfo: '',
  },
  reducers: {
    // 播放的音乐地址
    changeMusicUrl(state, { payload }) {
      state.musicUrl = payload;
    },
    // 获取播放音乐的信息
    getMusicInfo(state, { payload }) {
      state.musicInfo = payload;
    },
  },
});
export const { changeMusicUrl, getMusicInfo } = music.actions;
export default music.reducer;
