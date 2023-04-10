import React, { useState } from 'react';
import BoardList from '../components/BoardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Sentence.module.css';
import {useNavigate} from "react-router-dom";
import SentenceList from '../components/SentenceList';
import * as data from '../components/sentences.json'
import axios from "axios";

const linkString = JSON.stringify(data);

function Sentence() {
    const navigate = useNavigate();
    const [sentences, setSentences] = useState(null);

    const sentenceWrite = ()=>{
    navigate('/sentence/write');
    }

    axios.get('/sentence/')
    .then((res)=>{
        setSentences(res.data); 
    })
    .catch((err)=>{
        if(err.response.status === 401){
        console.log("401 Error");

        }
    });

    return (
    <div className={styles['layout']}>
        <Header category="한 줄 읽기"/>
        <div className={styles['page-title']}>한 줄 읽기</div>
        <div className={styles['board-div']}>
            {sentences &&(
            <SentenceList list={sentences}/>
            )}
        </div>
        <div className={styles['bottom-bar']}>
            <button className={styles['writing-btn']} onClick={()=>sentenceWrite()}>글쓰기</button>
        </div>
        <Footer/>
    </div>
    );
}

export default Sentence;