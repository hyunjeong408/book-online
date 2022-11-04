import React from 'react';
import styles from './css/Login.module.css';
import { REST_API_KEY, REDIRECT_URI } from '../../kakaoLoginInfo.js'

function Login() {
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  }
  return (
    <div className="Today">
      Hello!!!!! Login page
    </div>
  );
}

export default Login;