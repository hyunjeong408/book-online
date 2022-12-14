import React from 'react'
import styles from './css/Nav.module.css'
import * as data from './links.json'
import SearchBox from './SearchBox';

const linkString = JSON.stringify(data);
const links = JSON.parse(linkString).links;

type Link = {
    label: string;
    href: string;
}

const Links: React.FC<{links: Link[]}> = ({links}) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link)=>{
                return(
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}


function Nav() {
    return(
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img src="assets/logo.svg" alt="main-logo"></img>
            </div>
            <div className={styles['side-navbar']}>
                <Links links={links}/>
                <SearchBox/>
            </div>
        </nav>
    )
}

export default Nav