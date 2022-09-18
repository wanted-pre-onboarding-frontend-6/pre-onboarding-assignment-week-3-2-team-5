import { combineReducers } from 'redux';
import { commentReducer } from './comment';

export const rootReducer = combineReducers({
  comment: commentReducer.reducer,
});
