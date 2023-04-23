import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 전체 배경색을 바꾸고 싶다면 :root 또는 body로 조절하기
        document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to right, rgb(0, 177, 167) 50%, rgb(255, 180, 184) 50%)';
        // 수직으로, 각각의 색을 % 비율만큼 배정
    }, []);

    return (
        <>
            <Header />
            <div className="mainPage">
                <div className="mainBox">
                    <div className="mainTool mainLeft">
                        <div className="mainTitle">
                            나의 가치관과<br />
                            맞는 기업은 어디일까?
                        </div>
                        <div className="mainText">
                            수익성, 안정성, 연봉, 사내문화, 성장가능성을<br />
                            토대로 추천해드립니다.
                        </div>
                        <div className="mainImgBox">
                            <img className="mainImg" src={require('../../assets/images/values.png')} alt='value' />

                            <button className="btn mainBtn purpleBtn" onClick={() => navigate('/valueMain')}>기업 추천 받기</button>
                        </div>
                    </div>
                </div>
                <div className="mainBox">
                    <div className="mainTool mainRight">
                        <div className="mainTitle">
                            2023 IT 트렌드<br />
                            DATA 분석
                        </div>
                        <div className="mainText">
                            AI를 활용하여 업종별 일자리 수요를<br />
                            예측 해드립니다.
                        </div>
                        <div className="mainImgBox">
                            <img className="mainImg" src={require('../../assets/images/trend.png')} alt='value' />

                            <button className="btn mainBtn grayBtn" onClick={() => navigate('/trend')}>IT 트렌드 보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
