import React, { ChangeEvent, useState } from 'react';
import styles from '../pages/css/Sentence.module.css';
import { Sentence } from './SentenceList';

const SentenceCard: React.FC<{sc: Sentence}> = ({ sc }) => {
    let [likeClicked, setLikeClicked] = useState(false);
    const clickLike = () => {
        likeClicked? setLikeClicked(false):setLikeClicked(true);
    }
    return(
        <div className={styles['sentence-card']}>
            <div className={styles['card-info-a']}>
                <div className={styles['card-tag']}>#{sc.hashtag.tagName}</div>
                <div className={styles['card-like']}>
                    {
                        likeClicked?
                        <button onClick={clickLike}><img src="/assets/heart-clicked.svg" alt="heart-clicked"></img></button>
                        :<button onClick={clickLike}><img src="/assets/heart-unclicked.svg" alt="heart-unclicked"></img></button>
                    }
                    <div className={styles['card-like-txt']}>{sc.likeNum}</div>
                </div>
            </div>
            <div className={styles['card-content']}>
                {sc.content}
            </div>
            <div className={styles['card-info-b']}>
                {sc.title} | {sc.bookWriter}
            </div>
        </div>
    )
}

export default SentenceCard;