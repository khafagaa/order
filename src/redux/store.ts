import {configureStore} from '@reduxjs/toolkit';
import history from '@redux/Historymovies/history.reducer';
import loading from '@redux/Loading/loading.reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
export const store = configureStore({
  reducer: {
    history: history,
    loading: loading,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
