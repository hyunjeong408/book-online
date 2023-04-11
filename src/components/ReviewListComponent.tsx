import React from 'react';
import styles from '../pages/css/Review.module.css';
import {NavigateFunction, useNavigate} from "react-router-dom";
import { Review } from './ReviewList';

export type ReviewProps = {
    review: Review;
}

export default function ReviewListComponent ({ review }: ReviewProps): React.ReactElement{
  const navigate: NavigateFunction = useNavigate();
  const openBoardDetail = ()=>{
    navigate({
      pathname: "/review/detail"
    },
    { state: review});
  }
  return (
    <tr className={styles['board-list-component']} onClick={openBoardDetail}>
      <td>{review.reviewId}</td>
      <td>{review.title}</td>
      <td>{review.updateDate.toString()}</td>
      <td>{review.writer.userName}</td>
      <td>{review.likeNum}</td>
      <td>{review.hits}</td>
    </tr>
  );
};