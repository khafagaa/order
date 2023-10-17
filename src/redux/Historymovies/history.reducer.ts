import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {HistoryState, movieType} from 'src/types/movie.type';

const initialState: HistoryState = {
  history: [],
};

const history = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<movieType>) => {
      state.history.push(action.payload);
    },
    removeHistory: (state, action: PayloadAction<string>) => {
      state.history = state.history.filter(val => val.id !== action.payload);
    },
  },
});
export default history.reducer;
export const {removeHistory} = history.actions;
