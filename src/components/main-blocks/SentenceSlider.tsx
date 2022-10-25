import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import * as data from '../sentences.json';
import './main-blocks-css/SentenceBox.css'
const sentencesJSON = JSON.stringify(data);
const books = JSON.parse(sentencesJSON).sentences;

type Sentence = {
    id: number,
    bookId: number,
    content: string,
    like: number,
    registerBy: string
}

const StyledSentenceSlider = styled(Slider)`
    .slick-slide{
      outline: none;
      width: 30%;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .slick-slide slick-active{
        height:80px;
    }
    .slick-prev:before, .slick-next:before {
        color: black;
    }
    .slick{
        dots: false;
    }
    
`;

export default function SentenceSlider() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div style={{height: "100%"}}>
        <StyledSentenceSlider {...settings}>
            {books.map((sentence: Sentence)=>{
                return(
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <div className="sentence-height">
                            <div className="sentence-line-clamp">
                                {sentence.content}
                            </div>
                        </div>
                    </div>
                )
            })}
        </StyledSentenceSlider>
      </div>
    );
}