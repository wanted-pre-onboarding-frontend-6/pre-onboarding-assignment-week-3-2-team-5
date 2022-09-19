import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { RootState } from 'store/reducers';
import { getComments } from 'store/reducers/comments';
import styled from 'styled-components';
import { commentActions, deleteComment, getComment } from 'store/reducers/comment';

function CommentList() {
  const dispatch = useDispatch();
  const comments = useAppSelector((state: RootState) => state.comments.comments);

  const editModeHandler = (id: string) => {
    dispatch(commentActions.formMode('edit'));
    dispatch(getComment(id));
  };

  const deleteCommentHandler = (id: any) => {
    dispatch(deleteComment(id));
    dispatch(getComments());
  };

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <div>
      {comments.map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />
          <Author>{comment.author}</Author>
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <Button>
            <button onClick={() => editModeHandler(comment.id)}>수정</button>
            <button onClick={() => deleteCommentHandler(comment.id)}>삭제</button>
          </Button>
        </Comment>
      ))}
    </div>
  );
}
export default CommentList;

const Comment = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 3px 5px rgba(0, 0, 0, 0.24);
  margin: 15px;
  padding: 15px 25px;
  text-align: left;
  border-radius: 10px;
  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const Author = styled.span`
  font-weight: bold;
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
