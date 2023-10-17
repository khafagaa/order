import {createSlice} from '@reduxjs/toolkit';
const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: {
    loading: false,
  },
  reducers: {
    accessLoading: (state, action) => {
      console.log(`eh da ${action.payload}`);
      state.loading = action.payload;
    },
  },
});
export default loadingSlice.reducer;
export const {accessLoading} = loadingSlice.actions;
