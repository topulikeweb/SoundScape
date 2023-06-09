import { configureStore } from '@reduxjs/toolkit';
import MusicSlice from '@/store/moudle/musicUrl';

const store = configureStore({
  reducer: {
    music: MusicSlice,
  },
});

export default store;
