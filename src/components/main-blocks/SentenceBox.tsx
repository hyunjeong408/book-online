import React from "react";
import styles from './main-blocks-css/SentenceBox.module.css'
import SentenceSlider from "./SentenceSlider";

export default () => {
    return (
        <div className={styles['sentence-box']}>
            <p className={styles['box-title']}>
                한 줄 읽기
            </p>
            <div className={styles['sentences']}>
                <SentenceSlider/>
            </div>

        </div>
    )
}