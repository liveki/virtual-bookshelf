import React from 'react';
import Routes from './routes';
import './assets/styles/global.css';
import { Provider } from 'react-redux';
import store from './store';
const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
