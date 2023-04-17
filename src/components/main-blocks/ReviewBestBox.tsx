import React, {useState} from "react";
import styles from './main-blocks-css/BestBox.module.css'
import * as data from '../books.json'
import { Sentence } from "../SentenceList";
import { Review } from "../ReviewList";
import axios from "axios";

const HotReviews: React.FC<{reviews: Review[]}> = ({reviews}) => {
    return(
        <div className={styles['writing-list']}>
            {reviews.map((review: Review)=>{
                return(
                <div key={review.reviewId}className={styles['list-item']}>
                    <div className={styles['writing-title']}>
                        {review.title}
                    </div>
                    <div className={styles['writing-recnum']}>
                        {review.likeNum}
                    </div>
                </div>)
            })}
        </div>
    )
}

export default () => {
    const [reviews, setReviews] = useState([]);
    const [init, setInit] = useState(false);
    if(!init){
        axios.get('/review/hot')
        .then((res)=>{
            setInit(true);
            setReviews(res.data);
        })
        .catch((err)=>{
        });
    }
    return (
        <div className={styles['best-box']}>
            <div className={styles['box-title']}>
                BEST 리뷰
            </div>
            <HotReviews reviews={reviews}/>
        </div>
    )
}