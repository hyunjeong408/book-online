import React from 'react';
import styles from '../pages/css/Sentence.module.css';
import SentenceCard from './SentenceCard';
import { Writer } from './BoardList';

export type Hashtag = {
    tagId: number;
    tagName: string;
}

export type Sentence = {
    sentenceId: number;
    writer: Writer;
    content: string;
    title: string;
    bookWriter: string;
    updateDate: Date;
    hashtag: Hashtag;
    likeNum: number;
}

const SentenceList: React.FC<{list: Sentence[]}> = ({ list }) => {
    return(
        <div className={styles['sentence-card-list']}>
            {
                list.map((sentence: Sentence)=>(
                    <SentenceCard key={sentence.sentenceId} sc={sentence}></SentenceCard>
                ))
            }
        </div>
    )
}

export default SentenceList;