import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Booklist.module.css';

function Steady() {
  return (
    <div className={styles['layout']}>
      <Header category="스테디셀러"/>
      <div className={styles['have-sidebar']}>
            <div className={styles['sidebar']}>
                <div className={styles['side-menu']}></div>
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

export default Steady;