import { useCommentService } from 'context/CommentConext';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import pageActiveUtils from 'utils/pageActive.util';

interface StyleProps {
  active?: boolean;
}

function PageList({ page, setPage, limit }: any) {
  const { getALLComments } = useCommentService();
  const { comments } = useSelector((state: any) => state.comment);

  // page state
  const [pageList, setPageList] = useState<any>([]);

  // mount page active
  useEffect(() => {
    getALLComments()
      .then((res: any) => {
        const totalPageCount = Math.ceil(res.data.length / limit);
        const totalPageList = Array(totalPageCount)
          .fill(totalPageCount)
          .map((v, index) => ({ page: index + 1, active: false }));

        pageActiveUtils(parseInt(page), totalPageList);
        setPageList(totalPageList);
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }, [page, comments]);

  // onclikc page navigate
  const onPageClickHabdler = useCallback((e: any) => {
    const newpage = parseInt(e.target.innerText);
    setPage(newpage);
  }, []);

  // render
  return (
    <PageListStyle>
      {pageList.map((v: any) => (
        <Page key={v.page} active={v.active} onClick={onPageClickHabdler}>
          {v.page}
        </Page>
      ))}
    </PageListStyle>
  );
}

export default React.memo(PageList);

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button<StyleProps>`
  background: #ffffff;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: #556786;
        color: #fff;
  `}
  margin-right: 3px;
`;
