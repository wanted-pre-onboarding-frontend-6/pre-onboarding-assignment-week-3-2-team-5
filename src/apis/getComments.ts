import client from './client';

interface GetCommentsRequest {
  _page: number;
  _limit: number;
  _order: 'asc' | 'desc';
  _sort: 'id' | 'name' | 'email' | 'body';
}

export const getComments = async ({ _page, _limit, _order, _sort }: GetCommentsRequest) => {
  const response = await client.get(
    `comments?_page=${_page}&_limit=${_limit}&_order=${_order}&_sort=${_sort}`,
  );
  return response.data;
};
