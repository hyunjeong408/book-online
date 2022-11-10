import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Booklist.module.css';

function Best() {
  return (
    <div className={styles['layout']}>
      <Header category="베스트셀러"/>
      <div className={styles['have-sidebar']}>
            <div className={styles['sidebar']}>
                <div className={styles['side-menu']}></div>
                <div className={styles['side-btn']}></div>
            </div>
            <div className={styles['list']}>
                <div className={styles['book-slide']}>

                </div>
                <div className={styles['book-list']}>

                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Best;