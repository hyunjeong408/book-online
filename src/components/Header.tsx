import React from "react"
import Nav from "./Nav"
import styles from './css/Header.module.css'
import Menu from "./Menu";

type Page = {
    category: string;
}
function Header (page: Page) {
    return (
        <div className={styles['headerBody']}>
            <Nav/>
            <Menu category={page.category}/>
        </div>
    );
}


export default Header;