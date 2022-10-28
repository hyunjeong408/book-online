import React from 'react'
import { MouseEvent, ChangeEvent, useState } from 'react';
import styles from './css/Nav.module.css'

export default () => {
    let [text, setText] = useState("");

    const searchText = (e) => {
        // console.log(event.target.value);
        const searchText = e.target.value;
        // setText(searchText);
        setText(e.target.value);
    }
    const clickSearchBtn = () => {
        console.log(text);
    }
    return(
        <div className={styles['search-wrapper']}>
            <div className={styles['input-holder']}>
                <input type="text" onChange={searchText} className={styles['search-input']} placeholder="Type to search" />
                <button className={styles['search-icon']}onClick={clickSearchBtn} ><img src="assets/search-icon.svg" alt='search-icon-logo'></img></button>
            </div>
        </div>
    )
}