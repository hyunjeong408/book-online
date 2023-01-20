import React from "react";
import BoardBestBox from "./BoardBestBox";
import styles from './main-blocks-css/TopBox.module.css';
import ReviewBestBox from "./ReviewBestBox";
import ReviewBox from "./ReviewBox";

export default () => {
    return(
        <div className={styles['top-box']}>
            <ReviewBox/>
            <BoardBestBox/>
            <ReviewBestBox/>
        </div>
    )
}