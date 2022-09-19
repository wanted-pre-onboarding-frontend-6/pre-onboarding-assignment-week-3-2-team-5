import Http from 'apis/base';
import CommentService from 'apis/commentService';
import { AxiosResponse } from 'axios';
import {
  addCommentFailure,
  addCommentSuccess,
  addCommnet,
  deleteComment,
  deleteCommentFailure,
  deleteCommentSucces,
  getCommentsFailure,
  getComments,
  getCommentsSuccess,
  updateComment,
  updateCommentFailure,
  updateCommentSuccess,
} from 'reducer/comment';
import { takeLatest, all, fork, call, put } from 'redux-saga/effects';

const http = new Http(process.env.REACT_APP_API_URL);
const commentServcie = new CommentService(http);

// handler

function getCommentsApi(payload: any) {
  return commentServcie.getComments(payload);
}

function addCommentApi(payload: any) {
  return commentServcie.createComment(payload);
}

function updateCommentApi(payload: any) {
  return commentServcie.updateComment(payload);
}

function deleteCommentApi(payload: any) {
  return commentServcie.deleteComment(payload);
}

// saga
function* addCommentSaga(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(addCommentApi, action.payload);
    yield put(addCommentSuccess(response.data));
  } catch (err: any) {
    yield put(addCommentFailure(err));
  }
}

function* getCommentsSaga(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(getCommentsApi, action.payload);
    yield put(getCommentsSuccess(response.data));
  } catch (err: any) {
    yield put(getCommentsFailure(err));
  }
}

function* updateCommentsSaga(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(updateCommentApi, action.payload);
    yield put(updateCommentSuccess(response.data));
  } catch (err: any) {
    yield put(updateCommentFailure(err));
  }
}

function* deleteCommentsSaga(action: any) {
  try {
    yield call(deleteCommentApi, action.payload);
    yield put(deleteCommentSucces(action.payload.commentId));
  } catch (err: any) {
    yield put(deleteCommentFailure(err));
  }
}

// watch
function* watchAddCommn() {
  yield takeLatest(addCommnet.type, addCommentSaga);
}
function* watchGetCommn() {
  yield takeLatest(getComments.type, getCommentsSaga);
}
function* watchDeleteCommn() {
  yield takeLatest(deleteComment.type, deleteCommentsSaga);
}
function* watchUpdateCommn() {
  yield takeLatest(updateComment.type, updateCommentsSaga);
}

// root
export default function* rootSaga() {
  yield all([
    fork(watchAddCommn),
    fork(watchGetCommn),
    fork(watchDeleteCommn),
    fork(watchUpdateCommn),
  ]);
}
