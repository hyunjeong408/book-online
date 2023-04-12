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
import Board from './pages/Board';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import KakaoLogin from './pages/KakaoLogin';
import Review from './pages/Review';
import Sentence from './pages/Sentence';
import BoardDetail from './pages/BoardDetail';
import BoardWrite from './pages/BoardWrite';
import SentenceWrite from './pages/SentenceWrite';
import ReviewWrite from './pages/ReviewWrite';
import ReviewDetail from './pages/ReviewDetail';

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
        <Route path="board" element={<Board />}/>
        <Route path="board/detail/:id" element={<BoardDetail />}/>
        <Route path="board/write" element={<BoardWrite />}/>
        <Route path="review" element={<Review />} />
        <Route path="review/detail/:id" element={<ReviewDetail />}/>
        <Route path="review/write" element={<ReviewWrite />}/>
        <Route path="sentence" element={<Sentence />} />
        <Route path="sentence/write" element={<SentenceWrite />} />
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
