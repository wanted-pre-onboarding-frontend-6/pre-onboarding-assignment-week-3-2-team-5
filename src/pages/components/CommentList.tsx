import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from 'reducer/comment';
import styled from 'styled-components';

function CommentList({ setEditstate, setEditMode }: any) {
  // util
  const dispatch = useDispatch();

  // cooment select
  const { comments } = useSelector((state: any) => state.comment);

  // delete
  const onDeletHandler = useCallback((id: number) => {
    dispatch({
      type: deleteComment.type,
      payload: { commentId: id },
    });
  }, []);

  // render
  return (
    <>
      {comments.map((comment: any, key: number) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <Button>
            <a
              onClick={() => {
                setEditMode(true);
                setEditstate(comment);
              }}
            >
              수정
            </a>
            <a onClick={() => onDeletHandler(comment.id)}>삭제</a>
          </Button>
          <hr />
        </Comment>
      ))}
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
