import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import PageList from './components/PageList';
import queryString from 'query-string';
import { getComments } from 'reducer/comment';
import Order from './components/Order';
import { useNavigate } from 'react-router-dom';
import CommentList from './components/CommentList';

const MainPage = () => {
  // edit
  const [editMode, setEditMode] = useState(false);
  const [editState, setEditstate] = useState(null);

  // utils
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // comment state selector
  const addCommentState = useSelector((state: any) => state.comment.addComment);
  const updateCommentState = useSelector((state: any) => state.comment.updateComment);
  const deleteCommentState = useSelector((state: any) => state.comment.deleteComment);

  // page condition state
  const [page, setPage] = useState(queryString.parse(window.location.search).page || 1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState('createdAt');
  const [order, setOrder] = useState('desc');

  // comment read
  useEffect(() => {
    const params = {
      _page: page,
      _limit: limit,
      _sort: sort,
      _order: order,
    };
    dispatch({ type: getComments.type, payload: { params } });
  }, [page, limit, order]);

  // page change
  useEffect(() => {
    navigate(`?page=${page}`);
    window.scrollTo(0, 0);
  }, [page]);

  // add done
  useEffect(() => {
    if (addCommentState.done) {
      setPage(1);
      alert('등록 완료되었습니다');
      window.scrollTo(0, 0);
    }
  }, [addCommentState]);

  // uppdat done
  useEffect(() => {
    if (updateCommentState.done) {
      setEditMode(false);
      setEditstate(null);
      alert('수정되었습니다.');
    }
  }, [updateCommentState]);

  // delete done
  useEffect(() => {
    if (deleteCommentState.done) {
      setPage(1);
    }
  }, [deleteCommentState]);

  return (
    <>
      <Order
        limit={limit}
        sort={sort}
        order={order}
        setLimit={setLimit}
        setSort={setSort}
        setOrder={setOrder}
      />
      <CommentList setEditstate={setEditstate} setEditMode={setEditMode} />
      <PageList page={page} setPage={setPage} limit={limit} />
      <Form
        editState={editState}
        editMode={editMode}
        setEditstate={setEditstate}
        setEditMode={setEditMode}
      />
    </>
  );
};
export default MainPage;