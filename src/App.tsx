import MainPage from 'pages';
import { Provider } from 'react-redux';
import createStore from 'store/store';

function App() {
  const store = createStore();

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
