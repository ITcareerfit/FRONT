import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, DoughnutGraph, BarGraph, LineGraph } from "../../components";

const Trend = () => {
    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(4);
    const [language, setLanguage] = useState('');
    const [lanPercentage, setLanPercentage] = useState('');
    // const [lanReason, setLanReason] = useState('');
    const [doughnutLabel, setDoughnutLabel] = useState([]);
    const [doughnutDatas, setDoughnutDatas] = useState([]);
    const [doughnutSize, setDoughnutSize] = useState([]);
    // const [jobTitle, setJobTitle] = useState('');
    const [job, setJob] = useState('');
    const [barLabels, setBarLabels] = useState([]);
    const [barLabel, setBarLabel] = useState([]);
    const [barDatas, setBarDatas] = useState([]);
    const [jobPercentage, setJobPercentage] = useState('');
    // const [jobReason, setJobReason] = useState('');
    // const [jobTypeTitle, setJobTypeTitle] = useState('');
    // const [jobTypeTrend, setJobTypeTrend] = useState('');
    // const [jobType, setJobType] = useState('');
    // const [jobTypePercentage, setJobTypePercentage] = useState('');
    // const [jobTypeLanguage, setJobTypeLanguage] = useState('');
    // const [jobTypeReason, setJobTypeReason] = useState('');

    // const language = 'Python';
    // const lanPercentage = '16.7';
    const lanReason = 'AI 관련 채용이 대폭 증가함';
    const jobTitle = '2023년 상반기 IT 직무 트렌드';
    // const job = 'AI';
    // const jobPercentage = '11.7';
    const jobReason = 'ChatGPT의 수요가 증가함';
    const jobTypeTitle = '2023년 상반기 IT 직무별';
    const jobTypeTrend = '백엔드';
    const jobType = 'Spring framework';
    const jobTypePercentage = '33.6';
    const jobTypeLanguage = 'Java';
    const jobTypeReason = '는 대규모 프로젝트에서 안정성과 확장성이 뛰어나며, 개발 생산성과 유지 보수성도 높은';

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        document.getElementsByClassName('headerTrend')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerTrend')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerTrend')[0].style.color = 'rgb(101, 111, 119)';
    }, []);

    useEffect(() => {
        setYear(2023); // change after
        setMonth(4); // change after

        axios.post(`${process.env.REACT_APP_SERVER_URL}/trend`, {
            year: year,
            month: month,
            jobList: ['프론트엔드', 'ios', '서버/백엔드'],
            jobTypeTrend: null
        }).then((res) => {
            setLanguage(res.data.trend1.language);
            let dnLabel = [];
            let dnDatas = [];
            for (let i = 0; i < res.data.trend1.lan_list.length; i++) {
                dnLabel.push(res.data.trend1.lan_list[i].techName);
                dnDatas.push(res.data.trend1.lan_list[i].total);
            }
            dnLabel.push('기타..');
            dnDatas.push(res.data.trend1.etc);
            setLanPercentage(Math.round(res.data.trend1.lan_list[0].total / res.data.trend1.total * 100));
            setDoughnutLabel(dnLabel);
            setDoughnutDatas(dnDatas);
            setDoughnutSize([0, res.data.trend1.lan_list.length]);

            setJob(res.data.trend2.job);
            let bLabels = [];
            let bDatas1 = [];
            let bDatas2 = [];
            let bDatas3 = [];
            for (let i = 0; i < res.data.trend2.job1.length; i++) {
                bLabels.push(res.data.trend2.job1[i].month);
                bDatas1.push(res.data.trend2.job1[i].total);
                bDatas2.push(res.data.trend2.job2[i].total);
                bDatas3.push(res.data.trend2.job3[i].total);
            }
            setBarDatas([bDatas1, bDatas2, bDatas3]);
            setBarLabels(bLabels);
            setBarLabel([res.data.trend2.job1[0].posName, res.data.trend2.job2[0].posName, res.data.trend2.job3[0].posName]);
            setJobPercentage(Math.round(Math.max(res.data.trend2.job1[res.data.trend2.job1.length - 1].total, res.data.trend2.job2[res.data.trend2.job1.length - 1].total, res.data.trend2.job3[res.data.trend2.job1.length - 1].total) / (res.data.trend2.job1[res.data.trend2.job1.length - 1].total + res.data.trend2.job2[res.data.trend2.job1.length - 1].total + res.data.trend2.job3[res.data.trend2.job1.length - 1].total) * 100));
        }).catch((err) => {
            console.log(err);
        });

    }, [month, year]);

    return (
        <>
            <Header />

            <div className="languageTrend">
                <div className="basicPage trendTool">
                    <div className="trendPage">
                        <div className="trendText languageText">
                            <div className="trendTitle">
                                {year}년 {month}월
                                <div className="trendPurple">
                                    프로그래밍 언어 트렌드
                                </div>
                            </div>
                            <span className="trendBold">{year}년 {month}월 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{language}"</span>이(가) 약 {lanPercentage}%로 1위를 차지하였습니다.
                            <br /><br />
                            전월에 비하여 <span className="trendBold">{lanReason}</span>에 따라 {language}의 수요가 증가하는 추세를 보였습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                        <div className="doughnutGraph">
                            <DoughnutGraph labels={doughnutLabel} label={`${year}년 ${month}월`} datas={doughnutDatas} title={'2023년 3월 프로그래밍 언어 트랜드'} size={doughnutSize} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="jobTrend">
                <div className="basicPage trendSection">
                    <div className="trendPage">
                        <div className="trendGraph">
                            <BarGraph labels={barLabels} label={barLabel} datas={barDatas} title={jobTitle} />
                        </div>
                        <div className="trendText jobText">
                            <div className="trendTitle jobTitle">
                                {jobTitle}
                            </div>
                            <span className="trendBold">{year}년 {month}월 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{job}"</span>이(가) 약 {jobPercentage}%로 1위를 차지하였습니다.
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
                            <span className="trendBold">{year}년 {month}월 채용공고 데이터</span>
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
