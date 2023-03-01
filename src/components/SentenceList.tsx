import React from 'react';
import styles from '../pages/css/Sentence.module.css';
import SentenceCard from './SentenceCard';

export type SentenceComponent = {
    id: number;
    title: string;
    writer: string;
    content: string;
    like: number;
    tag: string;
    registerby: string;
}

const SentenceList: React.FC<{list: SentenceComponent[]}> = ({ list }) => {
    return(
        <div className={styles['sentence-card-list']}>
            {
                list.map((sentence: SentenceComponent)=>(
                    <SentenceCard key={sentence.id} sc={sentence}></SentenceCard>
                ))
            }
        </div>
    )
}

export default SentenceList;