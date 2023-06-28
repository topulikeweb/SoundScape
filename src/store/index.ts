import { configureStore } from '@reduxjs/toolkit';
import MusicSlice from '@/store/moudle/musicUrl';
import MusicList from '@/store/moudle/musicList';
import Theme from '@/store/moudle/theme';

const store = configureStore({
  reducer: {
    music: MusicSlice,
    List: MusicList,
    Theme: Theme,
  },
});

export default store;
