import React from "react";
import styles from './css/Layout.module.css'
import Footer from "./Footer";
import Header from "./Header";
import PopularBox from "./main-blocks/PopularBox";
import ReviewBox from "./main-blocks/ReviewBox";
import SentenceBox from "./main-blocks/SentenceBox";

type Page = {
    category: string;
}

export default (page: Page) => {
    if (page){
        return (
            <div className={styles['layout']}>
                <Header category={page.category}/>
                <PopularBox/>
                <SentenceBox/>
                <ReviewBox/>
                <Footer/>
            </div>
        );
    }
    else{
        return (
            <div className={styles['layout']}>
                <Header category="Best"/>
                <PopularBox/>
                <SentenceBox/>
                <ReviewBox/>
                <Footer/>
            </div>
        );
    }
    
}