import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/basic.css'; // 여기서 import css 하면 전체 파일 적용됨 -> 모든 파일은 root안에서 생성되기 때문

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 
  // react.strictMode가 렌더링 두번씩 발생하게 함
  <App />
  // </React.StrictMode>
);
