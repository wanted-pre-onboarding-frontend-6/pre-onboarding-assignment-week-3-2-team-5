import { useInput } from 'hooks/useInput';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommnet, updateComment } from 'reducer/comment';
import styled from 'styled-components';

function Form({ editState, editMode, setEditstate, setEditMode }: any) {
  // util
  const dispatch = useDispatch();

  // seletor
  const addCommentState = useSelector((state: any) => state.comment.addComment);

  // input state
  const [content, onChageContent, setContent] = useInput('');
  const [creatdAt, onChageCreatedAt, setCreatedAt] = useInput('');
  const [author, onChageAuthor, setAuthor] = useInput('');
  const [profileUrl, onChageProfileUrl, setProfileUrl] = useInput('');

  // eiditstate reset
  useEffect(() => {
    setContent(editState?.content || '');
    setCreatedAt(editState?.createdAt || '');
    setAuthor(editState?.author || '');
    setProfileUrl(editState?.profile_url || '');
  }, [editState]);

  // submit handler
  const onSubmitHandler = () => {
    if (editMode) {
      // edit dsipatch
      dispatch({
        type: updateComment.type,
        payload: {
          commentId: editState.id,
          data: {
            content: content,
            profile_url: profileUrl,
            author: author,
            createdAt: creatdAt,
          },
        },
      });
    } else {
      // add dsiaptch
      dispatch({
        type: addCommnet.type,
        payload: {
          data: {
            content: content,
            profile_url: profileUrl,
            author: author,
            createdAt: creatdAt,
          },
        },
      });
    }
  };

  // edit cancle handler
  const onEditCancleHandler = () => {
    setEditMode(false);
    setEditstate(null);
  };

  // addDone reset Input
  useEffect(() => {
    if (addCommentState.done) {
      setContent('');
      setCreatedAt('');
      setAuthor('');
      setProfileUrl('');
    }
  }, [addCommentState]);

  // render
  return (
    <FormStyle>
      <div>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={profileUrl}
          onChange={onChageProfileUrl}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={author}
          onChange={onChageAuthor}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={content}
          onChange={onChageContent}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={creatdAt}
          onChange={onChageCreatedAt}
          required
        />
        <br />
        <button onClick={onSubmitHandler}>{editMode ? '수정' : '등록'}</button>
        {editMode && <button onClick={onEditCancleHandler}>취소</button>}
      </div>
    </FormStyle>
  );
}
export default Form;

const FormStyle = styled.div`
  & > div {
    border-radius: 0.25rem;
    background: #e3ebf5;
    padding: 20px;
    margin-bottom: 50px;
  }
  & > div > textarea {
    padding: 15px 10px;
    border-radius: 0.25rem;
    outline-color: #5985c3;
    border: 0px;
    width: 97%;
    height: 50px;
    margin-bottom: 10px;
    resize: none;
  }
  & > div > input[type='text'] {
    border-radius: 0.25rem;
    padding: 10px;
    border: 0px;
    width: 97%;
    outline-color: #5985c3;
    margin-bottom: 15px;
  }
  & > div > button {
    background: #5985c3;
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 0;
    cursor: pointer;
  }
`;
