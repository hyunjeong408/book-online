import React from "react";
import './css/Layout.css'
import Footer from "./Footer";
import Header from "./Header";
import PopularBox from "./main-blocks/PopularBox";
import ReviewBox from "./main-blocks/ReviewBox";
import SentenceBox from "./main-blocks/SentenceBox";

export default () => {
    return (
        <div className="layout">
            <Header/>
            <PopularBox/>
            <SentenceBox/>
            <ReviewBox/>
            <Footer/>
        </div>
    );
}