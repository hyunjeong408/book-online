import React, { ChangeEvent, useState } from 'react';
import Header from '../components/Header';
import styles from './css/Mypage.module.css';

type Me = {
  name: string;
  buy: number;
  write: number;
  criticism: number;
}

const user: Me = {
  name: "김궤도",
  buy: 428,
  write: 226,
  criticism: 17
};

function MyPage() {
  let [text, setText] = useState("");

    const changeNameTxt = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const clickChangeBtn = () => {
        console.log(text);
    }
  return (
    <div className={styles['layout']}>
        <Header category="마이페이지"/>
        <div className={styles['my-page-title']}>
          마이페이지
        </div>
        <div className={styles['my-page-box']}>
          <div className={styles['profile-img-box']}>
            <div className={styles['profile-img']}></div>
          </div>
          <div className={styles['profile-info-box']}>
            <div className={styles['profile-name-change']}>
              <input type="text" onChange={changeNameTxt} className={styles['change-name']}/>
              <button className={styles['change-btn']}onClick={clickChangeBtn} >변경</button>
            </div>
            <div className={styles['profile-info']}>
              <div className={styles['profile-info-txt']}>
                구매한 권수
              </div>
              <div className={styles['profile-info-txt']}>
                {user.buy} 권
              </div>
              <div className={styles['profile-info-txt']}>
                작성한 리뷰
              </div>
              <div className={styles['profile-info-txt']}>
                {user.write} 건
              </div>
              <div className={styles['profile-info-txt']}>
                작성한 비평
              </div>
              <div className={styles['profile-info-txt']}>
                {user.criticism} 건
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MyPage;