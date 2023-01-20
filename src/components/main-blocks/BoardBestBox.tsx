import React from "react";
import styles from './main-blocks-css/BestBox.module.css'
import * as data from '../books.json'

const writingsJSON = JSON.stringify(data);
const writings = JSON.parse(writingsJSON).books;

type Writing = {
    title: string;
    id: number; //rec
    price: number; //reply
}

const Writings: React.FC<{writings: Writing[]}> = ({writings}) => {
    return(
        <div className={styles['writing-list']}>
            {writings.map((writing: Writing)=>{
                return(
                <div key={writing.id}className={styles['list-item']}>
                    <div className={styles['writing-title']}>
                        {writing.title} <span className={styles['writing-reply']}>{parseInt((writing.price/100).toString())}</span>
                    </div>
                    <div className={styles['writing-recnum']}>
                        {writing.id}
                    </div>
                </div>)
            })}
        </div>
    )
}

export default () => {
    return (
        <div className={styles['best-box']}>
            <div className={styles['box-title']}>
                BEST 리뷰
            </div>
            <Writings writings={writings}/>
        </div>
    )
}