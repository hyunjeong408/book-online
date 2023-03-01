import { post } from 'jquery';
import React from 'react';
import styles from '../pages/css/Board.module.css';
import BoardListComponent from './BoardListComponent';

export type Post = {
    id: number;
    title: string;
    content: string;
    updateDate: Date;
    writer: string;
}

const BoardList: React.FC<{list: Post[]}> = ({ list }) => {
    return(
        <table className={styles['board-list-table']}>
            <thead className={styles['board-list-head']}>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>글쓴이</th>
                </tr>  
            </thead>
            <tbody className={styles['board-list-body']}>
                {
                    list.map((post: Post)=>(
                        // <div className={styles['board-list-component']}><BoardListComponent key={post.id} post={post}></BoardListComponent></div>
                        <BoardListComponent key={post.id} post={post}></BoardListComponent>
                    ))
                }
            </tbody>
        </table>
    )
}

export default BoardList;