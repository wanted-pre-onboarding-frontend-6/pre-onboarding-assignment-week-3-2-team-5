import { combineReducers } from '@reduxjs/toolkit';
import comments from './comments';
import comment from './comment';

const rootReducer = combineReducers({
  comments,
  comment,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
