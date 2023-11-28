
import { createSlice } from '@reduxjs/toolkit';

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: {
    user: {},
    english: [],
    vietnamese: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addWord: (state, action) => {
      const { english, vietnamese } = action.payload;
      state.english.push(english);
      state.vietnamese.push(vietnamese);
    },
  },
});

export const { setUser, addWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
