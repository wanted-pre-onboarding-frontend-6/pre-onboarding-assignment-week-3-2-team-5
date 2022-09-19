import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'saga';
import { rootReducer } from 'reducer';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: process.env.NODE_ENV === 'production' ? [sagaMiddleware] : [sagaMiddleware, logger],
  });
  sagaMiddleware.run(rootSaga);

  return store;
};
export default createStore;
