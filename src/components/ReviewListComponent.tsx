import React from 'react';
import styles from '../pages/css/Review.module.css';
import {NavigateFunction, useNavigate} from "react-router-dom";
import { Review } from './ReviewList';
import axios from "axios";

export type ReviewProps = {
    review: Review;
}

export default function ReviewListComponent ({ review }: ReviewProps): React.ReactElement{
  const navigate: NavigateFunction = useNavigate();
  const reviewId = {
    id: review.reviewId,
  }
  const openBoardDetail = ()=>{
    axios.put('/review/detail/hit', reviewId)
    .then((res)=>{
    })
    .catch((err)=>{
      console.log(err);
    });
    navigate({
      pathname: `/review/detail/:${review.reviewId}`
    },
    {state: review});
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