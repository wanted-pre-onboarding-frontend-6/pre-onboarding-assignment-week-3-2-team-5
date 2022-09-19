import client from './client';

export const getAllComments = async () => {
  const response = await client.get('comments');
  return response.data;
};
