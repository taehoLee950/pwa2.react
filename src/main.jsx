// const { createRoot } = require("react-dom/client");
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // 모듈 방식으로 불러오기
import Router from './routes/Router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
  </StrictMode>
);
