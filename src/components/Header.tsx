import React from "react"
import Nav from "./Nav"
import styles from './css/Header.module.css'
import Menu from "./Menu";

export default () => {
    return (
        <div className={styles['headerBody']}>
            <Nav/>
            <Menu/>
        </div>
    );
}