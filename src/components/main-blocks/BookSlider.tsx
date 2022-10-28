import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import * as data from '../books.json';
import styles from './main-blocks-css/PopularBox.module.css'
const bookListString = JSON.stringify(data);
const books = JSON.parse(bookListString).books;

type Book = {
    id: number;
    title: string;
    price: number;
    writer: string;
    publish: string;
    pub_timestamp: any;
    transmit: string;
    image: string;
}

const StyledBookSlider = styled(Slider)`
    .slick-slide{
      outline: none;
      width: 30%;
      height: 230px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .slick-slide slick-active{
        height:220px%;
    }
    .slick-prev:before, .slick-next:before {
        color: black;
    }
    
`;

// const BookSlide: React.FC<{books: Book[]}> = ({books}) => {
//     return (
//         <div>
//             {books.map((book: Book)=>{
//                 console.log(book.title);
//                 return(
//                     <img key={book.id} src={book.image} style={{width: "50px"}}></img>
//                 )
//             })}
//         </div>
//     )
// }

export default function BookSlider() {
//   render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div style={{height: "100%"}}>
        <StyledBookSlider {...settings}>
            {books.map((book: Book)=>{
                return(
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <img key={book.id} src={book.image} style={{height: '180px', boxShadow:"2.5px 2.5px 5px grey"}}></img>
                        </div>
                        <div className={styles['title-height']}>
                            <div className={styles['line-clamp']}>
                                {book.title}
                            </div>
                        </div>
                    </div>
                )
            })}
        </StyledBookSlider>
      </div>
    );
//   }
}