import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './css/Board.module.css';
import { useLocation } from "react-router";
import {useNavigate} from "react-router-dom";
import Modal from 'react-modal';
import axios from "axios";

function BoardDetail(){
    const location = useLocation();
    const detail = location.state;
    const navigate = useNavigate();

    let [modalOpen, setModalOpen] = useState(false);
    let [modalMsg, setModalMsg] = useState("");

    const goBackToBoardList = ()=>{
        navigate('/board');
    }

    const recommendPost = ()=>{
        const token = localStorage.getItem('token');
        const recInfo = {
            post_id: detail.id,
            writer_token: token
        }
        axios.put('/board/detail/recommend', recInfo)
        .then((res)=>{
            setModalOpen(true);
            if(res.data){
                setModalMsg("추천하였습니다.");
            }
            else{
                setModalMsg("이미 추천한 게시글입니다.");
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return (
        <div className={styles['layout']}>
            <Header category="자유게시판"/>
            <Modal isOpen={modalOpen} className={styles['modalBox']} ariaHideApp={false}>
                {modalMsg}
                <div className={styles['btnBox']}>
                    <button onClick={()=>setModalOpen(false)}>확인</button>  
                </div>
            
            </Modal>
            <div className={styles['page-title']}>자유게시판</div>
            <div className={styles['board-detail-box']}>
                <div className={styles['board-info-box-a']}>
                    <div className={styles['board-title']}>{detail.title}</div>
                    <div className={styles['board-hits']}>조회 | {detail.hits}</div>
                </div>
                <div className={styles['board-info-box-b']}>
                    <div className={styles['board-writer']}>{detail.writer.userName}</div>
                    <div className={styles['board-info-detail-box']}>
                        <div className={styles['board-info-rec']}>
                            <img src="/assets/thumb-icon.svg" alt="board-rec-num"></img>
                            <div className={styles['board-info-txt']}>{detail.recNum}</div>
                        </div>
                        <div className={styles['board-info-reply']}>
                            <img src="/assets/comment-icon.svg" alt="board-reply-num"></img>
                            <div className={styles['board-info-txt']}>0</div>
                        </div>
                    </div>
                </div>
                <div className={styles['board-division-line']}></div>
                <div className={styles['board-contents']}>{detail.content}</div>
                <div className={styles['board-rec-btn-box']}>
                    <img src="/assets/round-thumb.svg" alt="board-rec-btn" onClick={recommendPost}></img>
                </div>
                <div className={styles['board-btn-box']}>
                    <button onClick={()=>goBackToBoardList()}>목록</button>
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