import { commentApi } from 'api/baseApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CommentInitial } from 'types/comment';

export const getComment = createAsyncThunk('comment/getComment', async (commentId: any) => {
  try {
    const response = await commentApi.get(`/comments/${commentId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const editComment = createAsyncThunk('comment/editComment', async (comment: any) => {
  try {
    const response = await commentApi.put(`/comments/${comment.id}`, comment);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addComment = createAsyncThunk('comment/addComment', async (comment: any) => {
  try {
    const response = await commentApi.post('/comments', comment);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteComment = createAsyncThunk('comment/deleteComment', async (id: any) => {
  try {
    const response = await commentApi.delete(`/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState: CommentInitial = {
  comment: {
    id: '',
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  },
  editMode: 'post',
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    formMode: (state, action) => {
      state.editMode = action.payload;
    },
  },
  extraReducers: {
    [getComment.fulfilled.type]: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export default commentSlice.reducer;
export const commentActions = commentSlice.actions;
