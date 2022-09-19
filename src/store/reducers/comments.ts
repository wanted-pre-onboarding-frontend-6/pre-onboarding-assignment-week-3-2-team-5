import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commentApi } from 'api/baseApi';
import { CommentsInitial } from 'types/comment';

export const getComments = createAsyncThunk('comments/getComments', async () => {
  try {
    const response = await commentApi.get('/comments?_page=1&_limit=4&_order=desc&_sort=id');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState: CommentsInitial = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.fulfilled.type]: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export default commentsSlice.reducer;
