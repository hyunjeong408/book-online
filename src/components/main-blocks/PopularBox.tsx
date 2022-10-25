import React from "react";
import BookSlider from "./BookSlider";
import './main-blocks-css/PopularBox.css'

export default () => {
    return (
        <div className="popular-box">
            <p className="box-title">
                지금 인기 있는 책
            </p>
            <div className="books">
                <BookSlider/>
            </div>

        </div>
    )
}