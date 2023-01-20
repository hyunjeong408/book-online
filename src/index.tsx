import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Today from './pages/Today';
import New from './pages/New';
import Best from './pages/Best';
import Steady from './pages/Steady';
import Read from './pages/Read';
import MyPage from './pages/MyPage';
import Detail from './pages/Detail';
import Login from './pages/Login';
import KakaoLogin from './pages/KakaoLogin';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="best" element={<Today />} />
        <Route path="board" element={<New />} />
        <Route path="review" element={<Best />} />
        <Route path="read" element={<Detail />} />
        <Route path="about" element={<MyPage />} />
        <Route path="login" element={<Login />} />
        <Route path="kakaoLogin" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
