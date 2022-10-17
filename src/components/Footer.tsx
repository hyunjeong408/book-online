import React from "react";
import './css/Footer.css'

export default () => {
    return (
        <div className="footer">
            <div className="info">
                <p className="info-title">성균관대학교 소프트웨어학과</p>
                <p>
                    16419 경기도 수원시 장안구 서부로 2066 성균관대학교 자연과학캠퍼스 소프트웨어융합대학<br/>
                    프로젝트 진행자: 이현정 gnlgus48@g.skku.edu<br/>
                    학번: 2019314656
                </p>
            </div>
            <div className="contact">
                <p className="contact-title">
                    고객문의
                </p>
                <p>
                    인문사회캠퍼스 02.760.0114<br/>
                    자연과학캠퍼스 031.290.5114
                </p>
            </div>
        </div>
    );
}