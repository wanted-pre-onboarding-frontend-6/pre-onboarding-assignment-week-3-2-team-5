import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commentApi } from 'api/baseApi';

interface InitialState {
  comments: Comment[];
  isLoading: boolean;
  error: string | undefined;
}

export const getComments = createAsyncThunk('comments/getComments', async () => {
  try {
    const response = await commentApi.get('/comments');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState: InitialState = {
  comments: [],
  isLoading: false,
  error: '',
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default commentSlice.reducer;
