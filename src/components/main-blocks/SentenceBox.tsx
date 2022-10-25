import React from "react";
import './main-blocks-css/SentenceBox.css'
import SentenceSlider from "./SentenceSlider";

export default () => {
    return (
        <div className="sentence-box">
            <p className="box-title">
                한 줄 읽기
            </p>
            <div className="sentences">
                <SentenceSlider/>
            </div>

        </div>
    )
}