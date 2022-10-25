import React from "react";
import './main-blocks-css/ReviewBox.css'

export default () => {
    return (
        <div className="review-box">
            <p className="box-title">
                비평: 이달의 책
            </p>
            <div className="book-of-the-month">
                <div className="book-img">
                    <img src="assets/books/first.jpg"/>
                </div>
                <div className="book-info">
                    <p className="book-title">
                        마인 Mine
                    </p>
                    <p className="book-writer">
                        마이클 헬러, 제임스 살츠먼
                    </p>
                    <div className="book-content-height">
                        <div className="book-content-line-clamp">
                    역사, 심리, 행동경제학의 대가들이 추천한 올해의 책!<br/>
                    - &lt;총 균 쇠&gt; 재레드 다이아몬드, &lt;넛지&gt; 캐스 선스타인, &lt;설득의 심리학&gt; 로버트 치알디니 추천<br/>
                    - 아마존 70주 연속 분야 베스트셀러<br/>
                    - 뉴욕 타임스, 하버드비즈니스리뷰 추천 도서<br/>
                    <br/>
                    왜 빈 그네는 먼저 온 아이부터 타는 걸까?<br/>
                    왜 머리카락은 팔 수 있는데 장기 거래는 불법일까?<br/>
                    <br/>
                    왜 빈 그네는 먼저 온 아이부터 타는 걸까?<br/>
                    왜 머리카락은 팔 수 있는데 장기 거래는 불법일까?<br/><br/>

                    </div></div>
                </div>
            </div>

        </div>
    )
}