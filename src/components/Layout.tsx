import React from "react";
import './css/Layout.css'
import Footer from "./Footer";
import Header from "./Header";

export default () => {
    return (
        <div className="layout">
            <Header/>
            <div className="mainBody">
                Hello<br/>
                Hi
            </div>
            <Footer/>
        </div>
    );
}