import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { Link } from "react-router-dom";

import styles from './css/Menu.module.css'
import * as data from './links.json'

const linkString = JSON.stringify(data);
const menuLinks = JSON.parse(linkString).menus;

type Link = {
    label: string;
    href: string;
}

type Page = {
    category: string;
}

const Links: React.FC<{links: Link[], page: Page}> = ({links, page}) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link)=>{
                if(page.category==link.label){
                    return(
                        <Link key={link.label} className={styles['link']} to={link.href} style={{color: "#ed1c24"}}>{link.label}</Link>
                    )
                }
                else{
                    return(
                        <Link key={link.label} className={styles['link']} to={link.href}>{link.label}</Link>
                    )
                }
            })}
        </div>
    )
}

const Menu = (page: Page) => {
    return(
        <div className={styles['menu']}>
            <img className={styles['btn-menu-full']} src="assets/menu-unselect.svg" alt="menu-unselect"></img>
            <Links links={menuLinks} page={page}/>
        </div>
    );
}

export default Menu;