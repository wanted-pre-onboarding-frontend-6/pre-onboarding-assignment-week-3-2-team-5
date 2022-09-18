import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './reducers/comments';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
