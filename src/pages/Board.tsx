import React from 'react';
import BoardList from '../components/BoardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Board.module.css';
import * as data from '../components/boards.json'
import {useNavigate} from "react-router-dom";

const linkString = JSON.stringify(data);
const boardPosts = JSON.parse(linkString).boards;

function Board() {
  const navigate = useNavigate();

  const boardWrite = ()=>{
    navigate('/board/write');
  }
  
  return (
    <div className={styles['layout']}>
      <Header category="자유게시판"/>
      <div className={styles['page-title']}>자유게시판</div>
      <div className={styles['board-div']}>
        <BoardList list={boardPosts}/>
      </div>
      <div className={styles['bottom-bar']}>
        <button className={styles['writing-btn']} onClick={()=>boardWrite()}>글쓰기</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Board;