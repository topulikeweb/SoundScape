import { configureStore } from '@reduxjs/toolkit';
import MusicSlice from '@/store/moudle/musicUrl';
import MusicList from '@/store/moudle/musicList';

const store = configureStore({
  reducer: {
    music: MusicSlice,
    List: MusicList,
  },
});

export default store;
