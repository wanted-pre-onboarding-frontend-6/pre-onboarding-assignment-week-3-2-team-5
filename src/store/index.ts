import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './reducers/comments';
import commentReducer from './reducers/comment';
import logger from 'redux-logger';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    comment: commentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
