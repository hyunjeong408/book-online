import React, { useState } from 'react';
import BoardList, { Post } from '../components/BoardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Board.module.css';
import * as data from '../components/boards.json'
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Board() {
  const navigate = useNavigate();

  const boardWrite = ()=>{
    navigate('/board/write');
  }

  const [posts, setPosts] = useState(null);
  const [init, setInit] = useState(false);
  // let posts: Post[];

  if(!init){
    axios.get('/board/')
    .then((res)=>{
      setInit(true);
      setPosts(res.data);
    })
    .catch((err)=>{
    });
  }
  
  return (
    <div className={styles['layout']}>
      <Header category="자유게시판"/>
      <div className={styles['page-title']}>자유게시판</div>
      <div className={styles['board-div']}>
        {posts &&(
          <BoardList list={posts}/>
        )}
      </div>
      <div className={styles['bottom-bar']}>
        <button className={styles['writing-btn']} onClick={()=>boardWrite()}>글쓰기</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Board;