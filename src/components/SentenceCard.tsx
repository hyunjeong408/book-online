import React, { ChangeEvent, useState } from 'react';
import styles from '../pages/css/Sentence.module.css';
import { Sentence } from './SentenceList';
import axios from 'axios';

const SentenceCard: React.FC<{sc: Sentence}> = ({ sc }) => {
    let [likeClicked, setLikeClicked] = useState(false);
    let [init, setInit] = useState(true);
    let [likeNum, setLikeNum] = useState(sc.likeNum);
    const token = localStorage.getItem('token');

    const clickLike = () => {
        const updateLike = {
            post_id: sc.id,
            writer_token: token,
            update_n: 0
        }
        if(likeClicked){//true->false(취소)
            setLikeNum(likeNum-1);
            updateLike.update_n = -1;
            axios.put('/sentence/detail/like', updateLike)
            .then((res)=>{
                setLikeClicked(false);
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        else{
            setLikeNum(likeNum+1);
            updateLike.update_n = 1;
            axios.put('/sentence/detail/like', updateLike)
            .then((res)=>{
                setLikeClicked(true);
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        // likeClicked? setLikeClicked(false):setLikeClicked(true);
    }
    if(init){
        axios.get('/sentence/detail/',{
            params: { 
                id: sc.id,
                token: token
            },
          })
        .then((res)=>{
            console.log(res.data);
            setInit(false);
            if(res.data){
                setLikeClicked(true);
            }
        })
        .catch((err)=>{
        });
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
                    <div className={styles['card-like-txt']}>{likeNum}</div>
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