import React from "react";
import styles from './main-blocks-css/SentenceBox.module.css'
import SentenceSlider from "./SentenceSlider";

export default () => {
    return (
        <div className={styles['sentence-box']}>
            <div className={styles['box-title']}>
                한 줄 읽기
            </div>
            <div className={styles['sentences']}>
                <SentenceSlider/>
            </div>

        </div>
    )
}