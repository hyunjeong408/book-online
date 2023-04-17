import React, {useState} from "react";
import styles from './main-blocks-css/BestBox.module.css'
import * as data from '../books.json'
import { Post } from "../BoardList";
import axios from "axios";

const HotBoards: React.FC<{boards: Post[]}> = ({boards}) => {
    return(
        <div className={styles['writing-list']}>
            {boards.map((board: Post)=>{
                return(
                <div key={board.id}className={styles['list-item']}>
                    <div className={styles['writing-title']}>
                        {board.title}
                    </div>
                    <div className={styles['writing-recnum']}>
                        {board.recNum}
                    </div>
                </div>)
            })}
        </div>
    )
}

export default () => {
    const [boards, setBoards] = useState([]);
    const [init, setInit] = useState(false);
    if(!init){
        axios.get('/board/hot')
        .then((res)=>{
            setInit(true);
            setBoards(res.data);
        })
        .catch((err)=>{
        });
    }

    return (
        <div className={styles['best-box']}>
            <div className={styles['box-title']}>
                BEST 게시글
            </div>
            <HotBoards boards={boards}/>
        </div>
    )
}