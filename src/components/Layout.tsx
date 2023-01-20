import React from "react";
import styles from './css/Layout.module.css'
import Footer from "./Footer";
import Header from "./Header";
import PopularBox from "./main-blocks/PopularBox";
import ReviewBox from "./main-blocks/ReviewBox";
import SentenceBox from "./main-blocks/SentenceBox";
import TopBox from "./main-blocks/TopBox";

type Page = {
    category: string;
}

export default (page: Page) => {
    if (page){
        return (
            <div className={styles['layout']}>
                <Header category={page.category}/>
                <TopBox/>
                <SentenceBox/>
                <PopularBox/>
                <Footer/>
            </div>
        );
    }
    else{
        return (
            <div className={styles['layout']}>
                <Header category="Best"/>
                <TopBox/>
                <SentenceBox/>
                <PopularBox/>
                <Footer/>
            </div>
        );
    }
    
}