import { ReactNode, createContext, useContext } from 'react';

// type
type StateType = {
  loading: boolean;
  done: boolean;
  data: any;
  error: any;
};

type ServiceType = {
  getALLComments: () => Promise<void>;
};

// context
const CommentServiceContext = createContext<any>({} as ServiceType);
export const useCommentService = () => useContext<any>(CommentServiceContext);

// provider
const CommentProvider = ({
  CommentService,
  children,
}: {
  CommentService: any;
  children: ReactNode;
}) => {
  // services

  const getALLComments = () => {
    return CommentService.getALLComments();
  };

  const service = {
    getALLComments,
  };

  return (
    <CommentServiceContext.Provider value={service}>{children}</CommentServiceContext.Provider>
  );
};
export default CommentProvider;
