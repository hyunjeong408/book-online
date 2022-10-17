import React from "react"
import Nav from "./Nav"
import './css/Header.css'
import Menu from "./Menu";

export default () => {
    return (
        <div className="headerBody">
            <Nav/>
            <Menu/>
        </div>
    );
}