import React from 'react';
import BoardList from '../components/BoardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Sentence.module.css';
import {useNavigate} from "react-router-dom";
import SentenceList from '../components/SentenceList';
import * as data from '../components/sentences.json'

const linkString = JSON.stringify(data);
const sentences = JSON.parse(linkString).sentences;

function Sentence() {
    const navigate = useNavigate();

    const sentenceWrite = ()=>{
    navigate('/sentence/write');
    }
    return (
    <div className={styles['layout']}>
        <Header category="한 줄 읽기"/>
        <div className={styles['page-title']}>한 줄 읽기</div>
        <div className={styles['board-div']}>
            <SentenceList list={sentences}/>
        </div>
        <div className={styles['bottom-bar']}>
            <button className={styles['writing-btn']} onClick={()=>sentenceWrite()}>글쓰기</button>
        </div>
        <Footer/>
    </div>
    );
}

export default Sentence;