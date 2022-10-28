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

const Links: React.FC<{links: Link[]}> = ({links}) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link)=>{
                return(
                    <Link className={styles['link']} to={link.href}>{link.label}</Link>
                )
            })}
        </div>
    )
}

const Menu = () => {
    return(
        <div className={styles['menu']}>
            <img className={styles['btn-menu-full']} src="assets/menu-unselect.svg"></img>
            <Links links={menuLinks}/>
        </div>
    );
}

export default Menu;