import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { addComment, commentActions, editComment } from 'store/reducers/comment';
import { getComments } from 'store/reducers/comments';
import styled from 'styled-components';

function Form() {
  const INITIAL_COMMENT = {
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  };
  const [commentInput, setCommentInput] = useState(INITIAL_COMMENT);
  const dispatch = useDispatch();
  const { editMode, comment } = useAppSelector((state) => state.comment);

  useEffect(() => {
    setCommentInput(comment);
  }, [comment]);

  const onChangeInputHanler = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setCommentInput({ ...commentInput, [name]: value });
  };

  const onSubmitCommentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editMode === 'post') {
      await dispatch(addComment(commentInput));
    } else if (editMode === 'edit') {
      await dispatch(editComment(commentInput));
      dispatch(commentActions.formMode('post'));
    }
    setCommentInput(INITIAL_COMMENT);
    dispatch(getComments());
  };

  return (
    <FormStyle>
      <form onSubmit={onSubmitCommentHandler}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={commentInput.profile_url}
          onChange={onChangeInputHanler}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          onChange={onChangeInputHanler}
          value={commentInput.author}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={commentInput.content}
          onChange={onChangeInputHanler}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={commentInput.createdAt}
          onChange={onChangeInputHanler}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
