import React from "react";
import './css/Layout.css'
import Footer from "./Footer";
import Header from "./Header";

export default () => {
    return (
        <div className="layout">
            <Header/>
            <Footer/>
        </div>
    );
}