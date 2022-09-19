import Http from 'apis/base';
import CommentService from 'apis/commentService';
import CommentProvider from 'context/CommentConext';
import MainPage from 'pages';
import { Provider } from 'react-redux';
import createStore from 'store/store';

function App() {
  const store = createStore();
  const http = new Http(process.env.REACT_APP_API_URL);
  const commentServcie = new CommentService(http);

  return (
    <Provider store={store}>
      <CommentProvider CommentService={commentServcie}>
        <MainPage />
      </CommentProvider>
    </Provider>
  );
}

export default App;
