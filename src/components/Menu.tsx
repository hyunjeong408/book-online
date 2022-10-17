import React from "react";
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
                    <div key={link.href} className='link'>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

const Menu = () => {
    return(
        <div className="menu">
            <img className="btn-menu-full" src="assets/menu-unselect.svg"></img>
            <Links links={menuLinks}/>
        </div>
    );
}

export default Menu;