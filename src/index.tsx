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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="today" element={<Today />} />
        <Route path="new" element={<New />} />
        <Route path="best" element={<Best />} />
        <Route path="steady" element={<Steady />} />
        <Route path="read" element={<Detail />} />
        <Route path="about" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
