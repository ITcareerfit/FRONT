import React, { useEffect, useState } from "react";
import { Header, DoughnutGraph, BarGraph, LineGraph } from "../../components";

const Trend = () => {

    const percentage = '16.7';
    const language = 'Python';
    const reason = 'AI 관련 채용이 대폭 증가함';

    useEffect(() => {
        document.getElementsByClassName('headerTrend')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerTrend')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerTrend')[0].style.color = 'rgb(101, 111, 119)';
    }, []);

    return (
        <>
            <Header />
            <div className="languageTrend">
                <div className="basicPage">
                    <div className="trendPage">
                        <div className="trendText">
                            <div className="trendTitle">
                                2023년 3월
                                <div className="trendPurple">
                                    프로그래밍 언어 트렌드
                                </div>
                            </div>
                            <span className="trendBold">2023년 3월 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendLanguage">"{language}"</span>이 {percentage}%로 1위를 차지하였습니다.
                            <br /><br />
                            전월에 비하여 <span className="trendBold">{reason}</span>에 따라 {language}의 수요가 증가하는 추세를 보였습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                        <div className="trendGraph">
                            <DoughnutGraph labels={['C', 'Python', 'C++', 'Java', '기타']} label={'2023년 3월'} datas={[25, 57, 40, 38, 53]} title={'2023 상반기 직종별 IT Trend'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobTrend">
                <div className="basicPage">
                    <BarGraph />
                </div>
            </div>
            <div className="jobTypeTrend">
                <div className="basicPage">
                    <LineGraph />
                </div>
            </div>
        </>
    );
};

export default Trend;
