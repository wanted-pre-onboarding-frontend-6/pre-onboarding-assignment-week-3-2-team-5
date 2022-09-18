import { combineReducers } from '@reduxjs/toolkit';
import comments from './comments';

const rootReducer = combineReducers({
  comments,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
