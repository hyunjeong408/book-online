import React from 'react';
import Header from '../components/Header';
import styles from './css/Booklist.module.css';

function Today() {
  return (
    <div className={styles['layout']}>
        <Header category="오늘의 책"/>
        Hello!!!!! Today page
    </div>
  );
}

export default Today;