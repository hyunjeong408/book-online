import React from 'react';
import BoardList from '../components/BoardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Board.module.css';

function Review() {
  return (
    <div className={styles['layout']}>
      <Header category="리뷰"/>
      <Footer/>
    </div>
  );
}

export default Review;