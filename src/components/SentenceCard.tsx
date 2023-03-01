import React, { ChangeEvent, useState } from 'react';
import styles from '../pages/css/Sentence.module.css';
import { SentenceComponent } from './SentenceList';

const SentenceCard: React.FC<{sc: SentenceComponent}> = ({ sc }) => {
    let [likeClicked, setLikeClicked] = useState(false);
    const clickLike = () => {
        likeClicked? setLikeClicked(false):setLikeClicked(true);
    }
    return(
        <div className={styles['sentence-card']}>
            <div className={styles['card-info-a']}>
                <div className={styles['card-tag']}>#{sc.tag}</div>
                <div className={styles['card-like']}>
                    {
                        likeClicked?
                        <button onClick={clickLike}><img src="/assets/heart-clicked.svg" alt="heart-clicked"></img></button>
                        :<button onClick={clickLike}><img src="/assets/heart-unclicked.svg" alt="heart-unclicked"></img></button>
                    }
                    <div className={styles['card-like-txt']}>{sc.like}</div>
                </div>
            </div>
            <div className={styles['card-content']}>
                {sc.content}
            </div>
            <div className={styles['card-info-b']}>
                {sc.title} | {sc.writer}
            </div>
        </div>
    )
}

export default SentenceCard;