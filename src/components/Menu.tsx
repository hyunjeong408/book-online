import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { Link } from "react-router-dom";

import './css/Menu.css'
import * as data from './links.json'

const linkString = JSON.stringify(data);
const menuLinks = JSON.parse(linkString).menus;

type Link = {
    label: string;
    href: string;
}

const Links: React.FC<{links: Link[]}> = ({links}) => {
    return (
        <div className='links-container'>
            {links.map((link: Link)=>{
                return(
                    <Link className="link" to={link.href}>{link.label}</Link>
                    // <div key={link.href} className='link'>
                    //     <a href={link.href}>
                    //         {link.label}
                    //     </a>
                    // </div>
                )
            })}
        </div>
    )
}

// const Links = () => {
//     return(
//         <div className='links-container'>
//             <Link className="link" to="/today">Invoices</Link>
//             <Link className="link" to="/new">Expenses</Link>
//             <Link className="link" to="/best">Invoices</Link>
//             <Link className="link" to="/expenses">Expenses</Link>
//             <Link className="link" to="/invoices">Invoices</Link>
//             <Link className="link" to="/expenses">Expenses</Link>
//         </div>
//     )
// }

const Menu = () => {
    return(
        <div className="menu">
            <img className="btn-menu-full" src="assets/menu-unselect.svg"></img>
            <Links links={menuLinks}/>
        </div>
    );
}

export default Menu;