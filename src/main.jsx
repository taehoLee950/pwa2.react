// const { createRoot } = require("react-dom/client");
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // 모듈 방식으로 불러오기
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
