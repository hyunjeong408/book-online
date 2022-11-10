import React, { ChangeEvent, useState } from 'react';
import styles from './css/Login.module.css';
import { REST_API_KEY, REDIRECT_URI } from '../kakaoLoginInfo.js'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from 'react-modal';

function Login() {
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  }
  let [joinModalOpen, setJoinModalOpen] = useState(false);
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const inputID = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }
  const inputPW = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  }
  const clickLoginBtn = () => {
    console.log(id, pw);
  }
  return (
    <div className={styles['layout']}>
        <Header category="로그인"/>
        <Modal isOpen={joinModalOpen} className={styles['joinModalBox']}>
          <p>회원가입</p>
          <input type="text" placeholder="이름"></input>
          <input type="text" placeholder="아이디"></input>
          <input type="password" placeholder="비밀번호"></input>
          <button onClick={()=> setJoinModalOpen(false)}>Modal Open</button>
        </Modal>
        <div className={styles['mainBox']}>
            <div className={styles['loginBox']}>
            <input type="text" onChange={inputID} className={styles['inputBox']} placeholder="아이디"/>
            <input type="password" onChange={inputPW} className={styles['inputBox']} placeholder="비밀번호"/>
            <button id="login-btn" onClick={clickLoginBtn} className={styles['loginBtn']}>로그인</button>
            <button id="join-btn" onClick={()=>setJoinModalOpen(true)} className={styles['joinBtn']}>회원가입</button>
          </div>
          <div className={styles['otherBox']}>
            <p className={styles['otherBoxTitle']}>SNS 계정으로 로그인/가입</p>
            <div className={styles['snsBox']}>
              <button id="kakao-btn" className={styles['snsBtn']} onClick={handleLogin}><img src="assets/kakao_login_medium.png" alt="kakao-login-m"></img></button>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Login;