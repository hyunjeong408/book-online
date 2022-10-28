import React from "react";
import BookSlider from "./BookSlider";
import styles from './main-blocks-css/PopularBox.module.css'

export default () => {
    return (
        <div className={styles['popular-box']}>
            <p className={styles['box-title']}>
                지금 인기 있는 책
            </p>
            <div className={styles['books']}>
                <BookSlider/>
            </div>

        </div>
    )
}