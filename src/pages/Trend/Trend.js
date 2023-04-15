import React, { useEffect } from "react";
import { Header, DoughnutGraph, BarGraph, LineGraph } from "../../components";

const Trend = () => {

    const date = '2023년 3월';
    const language = 'Python';
    const lanPercentage = '16.7';
    const lanReason = 'AI 관련 채용이 대폭 증가함';
    const jobTitle = '2023년 상반기 IT 직무 트렌드';
    const job = 'AI';
    const jobPercentage = '11.7';
    const jobReason = 'ChatGPT의 수요가 증가함';
    const jobTypeTitle = '2023년 상반기 IT 직무별';
    const jobTypeTrend = '백엔드';
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
                <div className="basicPage trendTool">
                    <div className="trendPage">
                        <div className="trendText languageText">
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
                        <div className="doughnutGraph">
                            <DoughnutGraph labels={['C', 'Python', 'C++', 'Java', '기타']} label={'2023년 3월'} datas={[25, 57, 40, 38, 53]} title={'2023년 3월 프로그래밍 언어 트랜드'} size={[1, 4]} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="jobTrend">
                <div className="basicPage trendSection">
                    <div className="trendPage">
                        <div className="trendGraph">
                            <BarGraph labels={['1월', '2월', '3월', '4월', '5월', '6월']} label={['BackEnd', 'FrontEnd', 'AI']} datas={[[25, 37, 40, 38, 53, 49, 58], [65, 49, 58, 55, 43, 48, 30], [50, 52, 48, 45, 54, 56, 52]]} title={jobTitle} />
                        </div>
                        <div className="trendText jobText">
                            <div className="trendTitle jobTitle">
                                {jobTitle}
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
                <div className="basicPage trendSection">
                    <div className="trendPage">
                        <div className="trendText jobTypeText">
                            <div className="trendTitle">
                                {jobTypeTitle}
                                <div className="trendPurple">
                                    "{jobTypeTrend} 개발자" <span className="trendGray">트렌드</span>
                                </div>
                            </div>
                            <span className="trendBold">{date} 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{jobType}"</span>이(가) {jobTypePercentage}%로 1위를 차지하였습니다.
                            <br /><br />
                            <span className="trendBold">{jobTypeLanguage}</span>{jobTypeReason} 장점이 있습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                        <div className="trendGraph">
                            <LineGraph labels={['1월', '2월', '3월', '4월', '5월', '6월', '7월']} label={['Spring', 'Node', 'Django']} datas={[[5, 4, 3, 4, 5, 3, 4], [7, 6, 7, 5, 3, 2, 4], [4, 5, 4, 3, 6, 5, 5]]} title={`${jobTypeTitle} 트렌드`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trend;
