import React from 'react';
import Header from '../components/Header';
import styles from './css/Detail.module.css';

type Book = {
    title: string;
    author: string;
    publish: string;
    transmit?: string;
}

const b: Book = {
    title: "도드람리그",
    author: "도드람",
    publish: "V리그",
    transmit: "KBS N"
}

function Detail() {
  return (
    <div className={styles['layout']}>
        <Header category="책 상세"/>
        <div className={styles['book-main-info']}>
            <div className={styles['book-img']}>
                이미지
            </div>
            <div className={styles['book-about']}>
                <div className={styles['title']}>{b.title}</div>
                { b.transmit?
                    <div className={styles['about']}>{b.author} | {b.publish} | {b.transmit}</div>
                    :<div className={styles['about']}>{b.author} | {b.publish}</div>
                }
                <div className={styles['stars']}>별점</div>
                <div className={styles['detail']}>상세</div>
            </div>
            <div className={styles['buttons']}>
                <button>구매</button>
                <button>장바구니</button>
            </div>
        </div>
        <div className={styles['introduction']}>
            <div className={styles['title']}>
                작품 소개
            </div>
            소개소개소개
        </div>
        <div className={styles['review-by-publish']}>
            <div className={styles['title']}>
                출판사 서평
            </div>
            소개소개소개
        </div>
        <div className={styles['author-introduce']}>
            <div className={styles['title']}>
                저자 소개
            </div>
            소개소개소개
        </div>
        <div className={styles['book-critic']}>
            <div className={styles['title']}>
                비평
            </div>
            소개소개소개
        </div>
        <div className={styles['book-review']}>
            <div className={styles['title']}>
                리뷰
            </div>
            <div className={styles['write']}>
                남기기
            </div>
            <div className={styles['read']}>
                읽기
            </div>
        </div>

    </div>
  );
}

export default Detail;