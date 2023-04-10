import React, {ChangeEvent, useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Sentence.module.css';
import {useNavigate} from "react-router-dom";
import TagDropdown from '../components/TagDropdown';

function SentenceWrite(){
    const navigate = useNavigate();

    let [bookTitle, setBookTitle] = useState("");
    let [bookWriter, setBookWriter] = useState("");
    let [contents, setContents] = useState("");
    const [date,setDate] = useState(new Date());
    const inputBookTitle = (e: ChangeEvent<HTMLInputElement>) => {
    	setBookTitle(e.target.value)
    }
    const inputBookWriter = (e: ChangeEvent<HTMLInputElement>) => {
    	setBookWriter(e.target.value)
    }
    const selectTag = (id: number, value: string)=>{
        console.log(id, value);
    }
    const inputContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.target.value.length>300){
            alert('300자 이하로 입력하세요');
        }
        else{
            setContents(e.target.value);
        }
    }
    const register = ()=>{
        setDate(new Date());
        navigate('/board');
    }
    return (
        <div className={styles['layout']}>
            <Header category="한 줄 읽기"/>
            <div className={styles['sentence-write-box']}>
                <div className={styles['sentence-write-info']}>
                    <div className={styles['sentence-write-info-input']}>
                        책제목
                        <input type="text" onChange={inputBookTitle} placeholder="제목"></input>
                    </div>
                    <div className={styles['sentence-write-info-input']}>
                        작가
                        <input type="text" onChange={inputBookWriter} placeholder="작가"></input>
                    </div>
                    <TagDropdown propFunction={selectTag}/>
                </div>
                <div className={styles['sentence-write-contents']}>
                    <textarea value={contents} onChange={(e)=>inputContents(e)} placeholder="내용" maxLength={300}></textarea>
                    <div className={styles['sentence-write-contents-limit']}>{contents.length}/300</div>
                </div>
                <div className={styles['sentence-write-btn-box']}>
                    <button className={styles['btn-to-list']} onClick={()=>{navigate('/sentence');}}>목록</button>
                    <button className={styles['btn-to-post']} onClick={register}>등록</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default SentenceWrite;