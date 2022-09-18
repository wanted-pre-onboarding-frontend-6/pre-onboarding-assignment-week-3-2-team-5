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
const commentService = new CommentService(http);

// servcie

// saga
function* addCommentSaga(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(commentService.createComment, action.payload);
    yield put(addCommentSuccess(response.data));
  } catch (err: any) {
    yield put(addCommentFailure(err));
  }
}

function* getCommentsSaga(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(commentService.getComments, action.payload);
    yield put(getCommentsSuccess(response.data));
  } catch (err: any) {
    yield put(getCommentsFailure(err));
  }
}

function* deleteCommentsSaga(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(commentService.deleteComment, action.payload);
    yield put(deleteCommentSucces(response.data));
  } catch (err: any) {
    yield put(deleteCommentFailure(err));
  }
}

function* updateCommentsSaga(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(commentService.updateComment, action.payload);
    yield put(updateCommentSuccess(response.data));
  } catch (err: any) {
    yield put(updateCommentFailure(err));
  }
}

// watch
function* watchAddCommn() {
  yield takeLatest(addCommnet, addCommentSaga);
}
function* watchGetCommn() {
  yield takeLatest(getComments, getCommentsSaga);
}
function* watchDeleteCommn() {
  yield takeLatest(deleteComment, deleteCommentsSaga);
}
function* watchUpdateCommn() {
  yield takeLatest(updateComment, updateCommentsSaga);
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
