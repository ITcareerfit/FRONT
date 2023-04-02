import React, { useEffect } from "react";
import { Header, DoughnutGraph, BarGraph, LineGraph } from "../../components";

const Trend = () => {

    const date = '2023년 3월';
    const language = 'Python';
    const lanPercentage = '16.7';
    const lanReason = 'AI 관련 채용이 대폭 증가함';
    const job = 'AI';
    const jobPercentage = '11.7';
    const jobReason = 'ChatGPT의 수요가 증가함';
    const jobType = 'Spring framework';
    const jobTypePercentage = '33.6';
    const jobTypeLanguage = 'Java';
    const jobTypeReason = '는 대규모 프로젝트에서 안정성과 확장성이 뛰어나며, 개발 생산성과 유지 보수성도 높은';

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
                            <span className="trendBold">{date} 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{language}"</span>이(가) {lanPercentage}%로 1위를 차지하였습니다.
                            <br /><br />
                            전월에 비하여 <span className="trendBold">{lanReason}</span>에 따라 {language}의 수요가 증가하는 추세를 보였습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                        <div className="trendGraph">
                            <DoughnutGraph labels={['C', 'Python', 'C++', 'Java', '기타']} label={'2023년 3월'} datas={[25, 57, 40, 38, 53]} title={'2023년 3월 프로그래밍 언어 트랜드'} size={[1, 4]} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="jobTrend">
                <div className="basicPage">
                    <div className="trendPage">
                        <div className="trendGraph">
                            <BarGraph />
                        </div>
                        <div className="trendText">
                            <div className="trendTitle">
                                2023년 3월
                                <div className="trendPurple">
                                    프로그래밍 언어 트렌드
                                </div>
                            </div>
                            <span className="trendBold">{date} 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{job}"</span>이(가) {jobPercentage}%로 1위를 차지하였습니다.
                            <br /><br />
                            전월에 비하여 {jobReason}에 따라 <span className="trendBold">{job} 관련 채용이 대폭 증가</span>하는 추세를 보였습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jobTypeTrend">
                <div className="basicPage">
                    <div className="trendPage">
                        <div className="trendText">
                            <div className="trendTitle">
                                2023년 상반기 IT 직무별
                                <div className="trendPurple">
                                    "백엔드 개발자" <span className="trendGray">트렌드</span>
                                </div>
                            </div>
                            <span className="trendBold">{date} 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{jobType}"</span>이(가) {jobTypePercentage}%로 1위를 차지하였습니다.
                            <br /><br />
                            <span className="trendBold">{jobTypeLanguage}</span>{jobTypeReason} 장점이 있습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                        <div className="trendGraph">
                            <LineGraph />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trend;
