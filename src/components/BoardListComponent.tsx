import React from 'react';
import styles from '../pages/css/Board.module.css';
import {Post} from './BoardList'
import {NavigateFunction, useNavigate} from "react-router-dom";

export type PostProps = {
    post: Post;
}

export default function BoardListComponent ({ post }: PostProps): React.ReactElement{
  const navigate: NavigateFunction = useNavigate();
  const openBoardDetail = ()=>{
    navigate({
      pathname: "/board/detail"
    },
    { state: post});
  }
  return (
    <tr className={styles['board-list-component']} onClick={openBoardDetail}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.updateDate.toString()}</td>
      <td>{post.writer}</td>
    </tr>
  );
};