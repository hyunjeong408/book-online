import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import * as data from '../sentences.json';
import styles from './main-blocks-css/SentenceBox.module.css'
import { Sentence } from "../SentenceList";
import axios from "axios";

const StyledSentenceSlider = styled(Slider)`
    .slick-slide{
      outline: none;
      width: 30%;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
    .slick-slide slick-active{
        width: 30%;
        height:80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-prev:before, .slick-next:before {
        color: indigo;
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
    const [init, setInit] = useState(false);
    const [recSentences, setRecStc] = useState([]);
    let token = localStorage.getItem('token');

    if(!init){
        if(token==null){
            token = "";
        }
        axios.get('/sentence/recommend',{
            params: { 
                token: token
            },
        })
        .then((res)=>{
            setInit(true);
            setRecStc(res.data);
        })
        .catch((err)=>{
        });
    }


    return (
      <div>
        <StyledSentenceSlider {...settings}>
            {recSentences.map((sentence: Sentence)=>{
                return(
                    <div key={sentence.id} className={styles['box-outside']}>
                        <div className={styles['box-height']}>
                            <div className={styles['line-clamp']}>
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