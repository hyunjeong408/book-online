import React, {ChangeEvent, useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Review.module.css';
import {useNavigate} from "react-router-dom";
import TagDropdown from '../components/TagDropdown';
import axios from "axios";

function ReviewWrite(){
    const navigate = useNavigate();

    let [title, setTitle] = useState("");
    let [bookTitle, setBookTitle] = useState("");
    let [bookWriter, setBookWriter] = useState("");
    let [tag, setTag] = useState(0);
    let [contents, setContents] = useState("");
    const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    	setTitle(e.target.value)
    }
    const inputBookTitle = (e: ChangeEvent<HTMLInputElement>) => {
    	setBookTitle(e.target.value)
    }
    const inputBookWriter = (e: ChangeEvent<HTMLInputElement>) => {
    	setBookWriter(e.target.value)
    }
    const selectTag = (id: number, value: string)=>{
        console.log(id, value);
        setTag(id);
    }
    const inputContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
    }
    const register = ()=>{
        const token = localStorage.getItem('token');
        console.log("register: ", tag);
        axios.post('/review/post', {
            title: title,
            content: contents,
            bookTitle: bookTitle,
            bookWriter: bookWriter,
            tag: tag,
            writer_token: token
          })
          .then((res)=>{
              console.log(res.data);
              navigate('/review');
          })
          .catch((err)=>{
            console.log(err);
          })
    }
    return (
        <div className={styles['layout']}>
            <Header category="리뷰"/>
            <div className={styles['page-title']}>리뷰</div>
            <div className={styles['page-title-bw']}>글쓰기</div>
            <div className={styles['sentence-write-box']}>
                <div className={styles['sentence-write-title']}>
                    <input type="text" onChange={inputTitle} placeholder="제목"></input>
                </div>
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
                    <textarea value={contents} onChange={(e)=>inputContents(e)} placeholder="내용"></textarea>
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
export default ReviewWrite;