import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Board.module.css';
import {Post} from '../components/BoardList';
import { useLocation } from "react-router";

interface RouteState {
    state: Post;
}

//title/updateDate/content/id/writer
function BoardDetail(){
    const post = (useLocation() as RouteState).state;
    return (
        <div className={styles['layout']}>
            <Header category="자유게시판"/>
            <div className={styles['page-title']}>자유게시판</div>
            <div className={styles['board-detail-box']}>
                <div className={styles['board-info-box-a']}>
                    <div className={styles['board-title']}>제목</div>
                    <div className={styles['board-hits']}>조회 | 226</div>
                </div>
                <div className={styles['board-info-box-b']}>
                    <div className={styles['board-writer']}>글쓴이</div>
                    <div className={styles['board-info-detail-box']}>
                        <div className={styles['board-info-rec']}>
                            <img src="/assets/thumb-icon.svg" alt="board-rec-num"></img>
                            <div className={styles['board-info-txt']}>226</div>
                        </div>
                        <div className={styles['board-info-reply']}>
                            <img src="/assets/comment-icon.svg" alt="board-reply-num"></img>
                            <div className={styles['board-info-txt']}>10</div>
                        </div>
                    </div>
                </div>
                <div className={styles['board-division-line']}></div>
                <div className={styles['board-contents']}>내용</div>
                <div className={styles['board-rec-btn-box']}>
                    <img src="/assets/round-thumb.svg" alt="board-rec-btn"></img>
                </div>
                <div className={styles['board-btn-box']}>
                    <button>목록</button>
                    <button>삭제</button>
                </div>
                <div className={styles['board-reply-box']}>
                    <div className={styles['board-reply-write-box']}>댓글 작성</div>
                    <div className={styles['board-reply']}></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default BoardDetail;