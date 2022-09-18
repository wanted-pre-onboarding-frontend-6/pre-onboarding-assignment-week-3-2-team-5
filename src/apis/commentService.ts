interface ParamsType {
  params: string | object;
  data?: any;
  commentId?: number | undefined;
}

class CommentService {
  http: any;

  constructor(http: any) {
    this.http = http;
    console.log(this.http);
  }

  public createComment({ data }: ParamsType) {
    return this.http.post('/comments', data);
  }

  public getComments({ params }: ParamsType) {
    return this.http.get('/comments', params);
  }

  public updateComment({ commentId, data }: ParamsType) {
    return this.http.put(`/comments/${commentId}`, data);
  }

  public deleteComment({ commentId }: ParamsType) {
    return this.http.delete(`/comments/${commentId}`);
  }
}
export default CommentService;
