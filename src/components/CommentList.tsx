import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { getComments } from 'store/reducers/comments';
import styled from 'styled-components';

function CommentList() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.comments.isLoading);
  const error = useSelector((state: RootState) => state.comments.error);
  const comments = useSelector((state: RootState) => state.comments.comments);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return;
  if (!comments) return null;

  return (
    <>
      {comments.map((comment: any) => {
        <Comment>
          <img src={comment.profile_url} alt="" />
          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <a>수정</a>
            <a>삭제</a>
          </Button>

          <hr />
        </Comment>;
      })}
    </>
  );
}
export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
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
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
