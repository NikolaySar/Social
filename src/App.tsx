import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Layout from './Layout.tsx';
import GlobalStyle from './GlobalStyle.tsx';
import store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Layout />
    </Provider>
  </React.StrictMode>
);
