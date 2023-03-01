import React, { ChangeEvent, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Board.module.css';
import {useNavigate} from "react-router-dom";

function BoardWrite(){
    const navigate = useNavigate();

    let [title, setTitle] = useState("");
    let [contents, setContents] = useState("");
    const [date,setDate] = useState(new Date());
    const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    	setTitle(e.target.value)
    }
    const inputContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    	setContents(e.target.value)
    }
    const register = ()=>{
        setDate(new Date());
        navigate('/board');
    }
    return (
        <div className={styles['layout']}>
            <Header category="자유게시판"/>
            <div className={styles['page-title']}>자유게시판</div>
            <div className={styles['page-title-bw']}>글쓰기</div>
            <div className={styles['board-write-box']}>
                <div className={styles['board-write-title']}>
                    <input type="text" onChange={inputTitle} placeholder="제목"></input>
                </div>
                <div className={styles['board-write-contents']}>
                    <textarea value={contents} onChange={(e)=>inputContents(e)} placeholder="내용"></textarea>
                </div>
                <div className={styles['board-write-btn-box']}>
                    <button className={styles['btn-to-list']} onClick={()=>{navigate('/board');}}>목록</button>
                    <button className={styles['btn-to-post']} onClick={register}>등록</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default BoardWrite;