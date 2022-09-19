import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from 'utils/async.util';

type Comment = {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};

type AsyncUtilType = {
  loading: boolean;
  done: boolean;
  error: any;
};

interface StateType {
  comments: Comment[];
  addComment: AsyncUtilType;
  getComments: AsyncUtilType;
  updateComment: AsyncUtilType;
  deleteComment: AsyncUtilType;
}

const initialState: StateType = {
  comments: [],
  addComment: {
    loading: false,
    done: false,
    error: null,
  },
  getComments: {
    loading: false,
    done: false,
    error: null,
  },
  updateComment: {
    loading: false,
    done: false,
    error: null,
  },
  deleteComment: {
    loading: false,
    done: false,
    error: null,
  },
};

export const commentReducer = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    // addComment
    addCommnet: (state) => {
      reducerUtils.loading(state.addComment);
    },

    addCommentSuccess: (state, action) => {
      reducerUtils.success(state.addComment);
      state.comments.unshift(action.payload);
    },

    addCommentFailure: (state, action) => {
      reducerUtils.error(state.addComment, action);
    },

    // getComments
    getComments(state) {
      reducerUtils.loading(state.getComments);
    },

    getCommentsSuccess: (state, action) => {
      reducerUtils.success(state.getComments);
      state.comments = action.payload;
    },

    getCommentsFailure: (state, action) => {
      reducerUtils.error(state.getComments, action);
    },

    // deleteComment
    deleteComment: (state) => {
      reducerUtils.loading(state.deleteComment);
    },

    deleteCommentSucces: (state, action) => {
      console.log(action.payload);
      reducerUtils.success(state.deleteComment);
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },

    deleteCommentFailure: (state, action) => {
      reducerUtils.error(state.deleteComment, action);
    },

    // updateComment
    updateComment: (state) => {
      reducerUtils.loading(state.updateComment);
    },

    updateCommentSuccess: (state, action) => {
      reducerUtils.success(state.updateComment);
      const comment = state.comments.find((comment) => comment.id === action.payload.id);
      if (comment) {
        comment.content = action.payload.content;
      }
    },

    updateCommentFailure: (state, action) => {
      reducerUtils.error(state.updateComment, action);
    },
  },
});

export const {
  addCommnet,
  addCommentSuccess,
  addCommentFailure,
  getComments,
  getCommentsSuccess,
  getCommentsFailure,
  deleteComment,
  deleteCommentSucces,
  deleteCommentFailure,
  updateComment,
  updateCommentSuccess,
  updateCommentFailure,
} = commentReducer.actions;
