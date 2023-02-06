import React, { ChangeEvent, useState, useEffect } from 'react';
import styles from './css/Login.module.css';
import { REST_API_KEY, REDIRECT_URI } from '../kakaoLoginInfo.js'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
  const navigate = useNavigate();
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  }
  let [joinModalOpen, setJoinModalOpen] = useState(false);
  let [loginErr, setLoginErrMsg] = useState(false);
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  let [name, setName] = useState("");
  const inputID = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }
  const inputPW = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  }
  const inputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const clickLoginBtn = () => {
    axios.post('/auth/login', {
      user_email: id,
      user_pw: pw
    })
    .then((res)=>{
        setLoginErrMsg(false);
        console.log(res.data.accessTokenExpiresIn);
        localStorage.clear();
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('expirationTime', res.data.accessTokenExpiresIn);
        navigate('/')
    })
    .catch((err)=>{
      if(err.response.status === 401){
        console.log("401 Error");

      }
      setLoginErrMsg(true);
    })
    setJoinModalOpen(false);
  }
  const clickJoinBtn = () => {
    axios.post('/auth/join', {
      user_name: name,
      user_email: id,
      user_pw: pw
    })
    .then(function(response){
      console.log(response);
      return response.data;
    })
    .catch(function(error){
      console.log('실패함')
    })
    setJoinModalOpen(false);
  }
  return (
    <div className={styles['layout']}>
        <Header category="로그인"/>
        <Modal isOpen={joinModalOpen} className={styles['joinModalBox']} ariaHideApp={false}>
          <p>회원가입</p>
          <input type="text" onChange={inputName} placeholder="이름"></input>
          <input type="text" onChange={inputID} placeholder="아이디"></input>
          <input type="password" onChange={inputPW} placeholder="비밀번호"></input>
          <div className={styles['btnBox']}>
            <button onClick={clickJoinBtn}>가입하기</button>
            <button onClick={()=>setJoinModalOpen(false)}>닫기</button>  
          </div>
          
        </Modal>
        <div className={styles['mainBox']}>
            <div className={styles['loginBox']}>
            <input type="text" onChange={inputID} className={styles['inputBox']} placeholder="아이디"/>
            <input type="password" onChange={inputPW} className={styles['inputBox']} placeholder="비밀번호"/>
            {
              (loginErr)? <div className={styles['errMsg']}>아이디/비밀번호가 잘못되었습니다.</div>:null
            }
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