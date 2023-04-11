import React from 'react';
import styles from '../pages/css/Board.module.css';
import {Post} from './BoardList'
import {NavigateFunction, useNavigate} from "react-router-dom";
import axios from "axios";

export type PostProps = {
    post: Post;
}

export default function BoardListComponent ({ post }: PostProps): React.ReactElement{
  const navigate: NavigateFunction = useNavigate();
  const postId = {
    id: post.id,
    updateNum: 1
  }
  const openBoardDetail = ()=>{
    axios.put('/board/detail/hit', postId)
    .then((res)=>{
    })
    .catch((err)=>{
      if(err.response.status === 401){
        console.log("401 Error");

      }
    });
    navigate({
      pathname: `/board/detail/:${post.id}`
    },
    {state: post});
  }
  return (
    <tr className={styles['board-list-component']} onClick={openBoardDetail}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.updateDate.toString()}</td>
      <td>{post.writer.userName}</td>
      <td>{post.recNum}</td>
      <td>{post.hits}</td>
    </tr>
  );
};