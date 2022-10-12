import React from 'react'
import styles from './Nav.module.css'
import * as data from './links.json'

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

const SearchBox = () => {
    return(
        <div className={styles['search-wrapper']}>
            <div className={styles['input-holder']}>
                <input type="text" className={styles['search-input']} placeholder="Type to search" />
                <button className={styles['search-icon']}><img src="assets/search-icon.svg" alt='search-icon-logo'></img></button>
            </div>
        </div>
    )
}


const Nav = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <span>Logo</span>
            </div>
            <div className={styles['side-navbar']}>
                <Links links={links}/>
                <SearchBox />
            </div>
        </nav>
    )
}

export default Nav