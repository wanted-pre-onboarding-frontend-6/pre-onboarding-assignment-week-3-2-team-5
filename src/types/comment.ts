export interface Comment {
  id: string;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface CommentInitial {
  comment: Comment;
  editMode: 'post' | 'edit';
}

export interface CommentsInitial {
  comments: Comment[];
}
