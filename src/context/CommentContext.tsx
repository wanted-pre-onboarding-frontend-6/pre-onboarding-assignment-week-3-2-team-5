import { ReactNode, useReducer, createContext, useContext, Context } from 'react';

// type
type StateType = {
  loading: boolean;
  done: boolean;
  data: any;
  error: any;
};

type ServiceType = {
  addComment: (data: any) => Promise<void>;
  getComment: (data: any) => Promise<void>;
  deletComment: (data: any) => Promise<void>;
  updateComment: (data: any) => Promise<void>;
};

// context
const CommentServiceContext = createContext<any>({} as ServiceType);
export const useCommentService = () => useContext<any>(CommentServiceContext);

// provider
const IssueProvider = ({
  CommentService,
  children,
}: {
  CommentService: any;
  children: ReactNode;
}) => {
  // services
  const addComment = (data: any) => {
    return CommentService.addComment(data);
  };

  const getComment = (data: any) => {
    return CommentService.getComment(data);
  };

  const deletComment = (data: any) => {
    return CommentService.deletComment(data);
  };

  const updateComment = (data: any) => {
    return CommentService.updateComment(data);
  };

  const service = {
    addComment,
    getComment,
    deletComment,
    updateComment,
  };

  return (
    <CommentServiceContext.Provider value={service}>{children}</CommentServiceContext.Provider>
  );
};
export default IssueProvider;
