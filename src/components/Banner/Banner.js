import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const setting = {
        dots: true,
        arrows: false, // 옆으로 넘기는 화살표 제거
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: (dots) => (
            <div
                style={{
                    display: 'flex',
                    top: '260px',
                    justifyContent: 'center',
                    margin: 0,
                    height: '20px',
                }}>
                <ul> {dots}</ul>
            </div>
        )
    };

    return (
        <Slider {...setting}>
            <div className="banner" id="firstBanner">
                <div className="bannerBox">
                    <div className="bannerLeft">
                        <div className="bannerTitle">
                            나의 가치관과 <br />
                            맞는 기업은 어디일까?
                        </div>
                        <div className="bannerAnswer">
                            수익성, 안정성, 연봉, 사내문화, 성장가능성을 토대로 추천해드립니다.
                        </div>
                        <button className="btn bannerBtn purpleBtn">가치관에 따른 일자리 추천</button>
                    </div>
                    <img className="bannerImg" src={require('../../assets/images/values.png')} alt="values" />
                </div>
            </div>
            <div className="banner" id="secondBanner" style={{ display: 'block' }}>
                <div className="bannerBox">
                    <div className="bannerLeft">
                        <div className="bannerTitle">
                            2023 IT 트렌드 <br />
                            DATA 분석
                        </div>
                        <div className="bannerAnswer">
                            AI를 활용하여 업종별 일자리 수요를 예측 해드립니다.
                        </div>
                        <button className="btn bannerBtn purpleBtn">업종별 IT 트렌드 분석</button>
                    </div>
                    <img className="bannerImg" src={require('../../assets/images/values.png')} alt="values" />
                </div>
            </div>
        </Slider>
    );
};

export default Banner;
