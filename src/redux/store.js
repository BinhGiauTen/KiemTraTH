
import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './Slices';

const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});

export default store;
