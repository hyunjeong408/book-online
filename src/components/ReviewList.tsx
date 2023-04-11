import { post } from 'jquery';
import React from 'react';
import styles from '../pages/css/Review.module.css';
import BoardListComponent from './BoardListComponent';
import { Hashtag } from './SentenceList';
import { Writer } from './BoardList';
import ReviewListComponent from './ReviewListComponent';

export type Review = {
    title: string;
    bookTitle: string;
    bookWriter: string;
    content: string;
    hits: number;
    reviewId: number;
    updateDate: Date;
    writer: Writer;
    sentenceId: number;
    hashtag: Hashtag;
    likeNum: number;
}

const ReviewList: React.FC<{list: Review[]}> = ({ list }) => {
    return(
        <table className={styles['board-list-table']}>
            <thead className={styles['board-list-head']}>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>글쓴이</th>
                    <th>추천수</th>
                    <th>조회수</th>
                </tr>  
            </thead>
            <tbody className={styles['board-list-body']}>
                {
                    list.map((review: Review)=>(
                        <ReviewListComponent key={review.reviewId} review={review}></ReviewListComponent>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ReviewList;