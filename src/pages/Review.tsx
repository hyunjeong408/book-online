import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Board.module.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ReviewList from '../components/ReviewList';

function Review() {
  const navigate = useNavigate();

  const reviewWrite = ()=>{
    navigate('/review/write');
  }

  const [reviews, setReviews] = useState(null);

  axios.get('/review/')
  .then((res)=>{
    console.log(res.data);
    setReviews(res.data); 
  })
  .catch((err)=>{
    if(err.response.status === 401){
      console.log("401 Error");
    }
  });
  
  return (
    <div className={styles['layout']}>
      <Header category="리뷰"/>
      <div className={styles['page-title']}>자유게시판</div>
      <div className={styles['board-div']}>
        {reviews &&(
          <ReviewList list={reviews}/>
        )}
      </div>
      <div className={styles['bottom-bar']}>
        <button className={styles['writing-btn']} onClick={()=>reviewWrite()}>글쓰기</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Review;