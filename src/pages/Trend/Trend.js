import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, DoughnutGraph, BarGraph, LineGraph, ChooseMany, Choose } from "../../components";

const Trend = () => {
    const [month, setMonth] = useState(5);
    const [language, setLanguage] = useState('');
    const [lanPercentage, setLanPercentage] = useState('');
    // const [lanReason, setLanReason] = useState('');
    const [doughnutLabel, setDoughnutLabel] = useState([]);
    const [doughnutDatas, setDoughnutDatas] = useState([]);
    const [doughnutSize, setDoughnutSize] = useState([]);
    const [job, setJob] = useState('');
    const [barLabels, setBarLabels] = useState([]);
    const [barLabel, setBarLabel] = useState([]);
    const [barDatas, setBarDatas] = useState([]);
    const [jobPercentage, setJobPercentage] = useState('');
    // const [jobReason, setJobReason] = useState('');
    const [jobTypeLanguage, setJobTypeLanguage] = useState('');
    const [lineLabels, setLineLabels] = useState([]);
    const [lineLabel, setLineLabel] = useState([]);
    const [lineDatas, setLineDatas] = useState([]);
    // const [jobTypeReason, setJobTypeReason] = useState('');
    const [open, setOpen] = useState('');
    const [selectJob, setSelectJob] = useState([]);
    const [selectJobType, setSelectJobType] = useState('프론트엔드');

    const lanReason = 'AI 관련 채용이 증가함';
    const jobTitle = '2023년 상반기 IT 직무 트렌드';
    const jobReason = 'ChatGPT의 수요가 증가함';
    const jobTypeTitle = '2023년 상반기 IT 직무별';
    const jobTypeReason = '는 대규모 프로젝트에서 안정성과 확장성이 뛰어나며, 개발 생산성과 유지 보수성도 높은';

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        document.getElementsByClassName('headerTrend')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerTrend')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerTrend')[0].style.color = 'rgb(101, 111, 119)';
    }, []);

    useEffect(() => {
        let postSelectJob;
        if (selectJob.length !== 3) postSelectJob = ['프론트엔드', '서버/백엔드', 'ios'];
        else postSelectJob = selectJob;
        axios.post(`${process.env.REACT_APP_SERVER_URL}/trend`, {
            year: 2023,
            month: month,
            jobList: postSelectJob,
            jobTypeTrend: selectJobType
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
                bLabels.push(res.data.trend2.job1[i].month + '월');
                bDatas1.push(res.data.trend2.job1[i].total);
                bDatas2.push(res.data.trend2.job2[i].total);
                bDatas3.push(res.data.trend2.job3[i].total);
            }
            setBarDatas([bDatas1, bDatas2, bDatas3]);
            setBarLabels(bLabels);
            setBarLabel([res.data.trend2.job1[0].posName, res.data.trend2.job2[0].posName, res.data.trend2.job3[0].posName]);
            setJobPercentage(Math.round(Math.max(res.data.trend2.job1[res.data.trend2.job1.length - 1].total, res.data.trend2.job2[res.data.trend2.job1.length - 1].total, res.data.trend2.job3[res.data.trend2.job1.length - 1].total) / (res.data.trend2.job1[res.data.trend2.job1.length - 1].total + res.data.trend2.job2[res.data.trend2.job1.length - 1].total + res.data.trend2.job3[res.data.trend2.job1.length - 1].total) * 100));

            setJobTypeLanguage(res.data.trend3.stack[0]);
            let lLabels = [];
            let lDatas1 = [];
            let lDatas2 = [];
            let lDatas3 = [];
            for (let i = 0; i < res.data.trend3.stacks.length; i++) {
                if (i < Math.floor(res.data.trend3.stacks.length / 3)) {
                    lLabels.push(res.data.trend3.stacks[i].month + '월');
                    lDatas1.push(res.data.trend3.stacks[i].total);
                }
                else if (Math.floor(res.data.trend3.stacks.length / 3) <= i && i < 2 * Math.floor(res.data.trend3.stacks.length / 3)) lDatas2.push(res.data.trend3.stacks[i].total);
                else lDatas3.push(res.data.trend3.stacks[i].total);
            }
            setLineDatas([lDatas1, lDatas2, lDatas3]);
            setLineLabels(lLabels);
            setLineLabel(res.data.trend3.stack);
        }).catch((err) => {
            console.log(err);
        });

    }, [month, selectJob, selectJobType]);

    const changeBtn = (id) => {
        if (id < 3 || id > 5) alert('가능한 범위를 초과하였습니다.');
        else setMonth(id);
    };

    return (
        <>
            <Header />

            <div className="languageTrend">
                <div className="basicPage trendTool">
                    <div className="trendMonth">
                        <span className="trendBtn" id={month - 1} onClick={() => changeBtn(month - 1)}>
                            ◁
                        </span>
                        <span className="trendBtn" id={month + 1} onClick={() => changeBtn(month + 1)}>
                            ▷
                        </span>
                    </div>
                    <div className="trendPage">
                        <div className="trendText languageText">
                            <div className="trendTitle">
                                2023년 {month}월
                                <div className="trendPurple">
                                    프로그래밍 언어 트렌드
                                </div>
                            </div>
                            <span className="trendBold">2023년 {month}월 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{language}"</span>이(가) 약 {lanPercentage}%로 1위를 차지하였습니다.
                            <br /><br />
                            <span className="trendBold">{lanReason}</span>에 따라 {language}의 수요가 증가하는 추세를 보였습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                        <div className="doughnutGraph">
                            <DoughnutGraph labels={doughnutLabel} label={`2023년 ${month}월`} datas={doughnutDatas} title={`2023년 ${month}월 프로그래밍 언어 트랜드`} size={doughnutSize} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="jobTrend">
                <div className="basicPage trendSection">
                    <div className="trendPage">
                        <div className="trendGraph">
                            <div className="graphExplainTool">
                                <div className="trendExplain">※ 직무 3가지를 선택해주세요.</div>
                                <ChooseMany className={'mypagePos job trendSelectTool'} mainClassName={'mypagePos'} option={['DBA', 'ERP', 'iOS', 'QA', 'VR/AR/3D', '개발PM', '게임 서버', '게임 클라이언트', '그래픽스', '데브옵스', '데이터 엔지니어링', '로보틱스 미들웨어', '머신러닝', '모바일 게임', '블록체인', '사물인터넷(IoT)', '서버/백엔드', '시스템 소프트웨어', '시스템/네트워크', '안드로이드', '웹 퍼블리싱', '웹 풀스택', '응용 프로그램', '인공지능(AI)', '인터넷 보안', '임베디드 소프트웨어', '크로스 플랫폼', '프론트엔드']} open={[open, setOpen]} value={[selectJob, setSelectJob]} />
                            </div>
                            <div className="graphExplain">공고수</div>
                            <BarGraph labels={barLabels} label={barLabel} datas={barDatas} title={jobTitle} />
                        </div>
                        <div className="trendText jobText">
                            <div className="trendTitle jobTitle">
                                {jobTitle}
                            </div>
                            <span className="trendBold">2023년 {month}월 채용공고 데이터</span>
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
                                    "{selectJobType} 개발자" <span className="trendGray">트렌드</span>
                                </div>
                            </div>
                            <span className="trendBold">2023년 {month}월 채용공고 데이터</span>
                            를 기반으로 분석한 결과 <span className="trendItem">"{jobTypeLanguage}"</span>이(가) 1위를 차지하였습니다.
                            <br /><br />
                            <span className="trendBold">{jobTypeLanguage}</span>{jobTypeReason} 장점이 있습니다.
                            <div className="trendExtra">※ 매월 말 분석결과를 제공합니다.</div>
                        </div>
                        <div className="trendGraph">
                            <div className="graphExplainTool">
                                <div className="trendExplain">※ 직무 한가지를 선택해주세요.</div>
                                <Choose className={'mypagePos jobType trendSelectTool'} mainClassName={'jobType'} option={['DBA', 'ERP', 'iOS', 'QA', 'VR/AR/3D', '개발PM', '게임 서버', '게임 클라이언트', '그래픽스', '데브옵스', '데이터 엔지니어링', '로보틱스 미들웨어', '머신러닝', '모바일 게임', '블록체인', '사물인터넷(IoT)', '서버/백엔드', '시스템 소프트웨어', '시스템/네트워크', '안드로이드', '웹 퍼블리싱', '웹 풀스택', '응용 프로그램', '인공지능(AI)', '인터넷 보안', '임베디드 소프트웨어', '크로스 플랫폼', '프론트엔드']} open={[open, setOpen]} value={[selectJobType, setSelectJobType]} />
                            </div>
                            <div className="graphExplain">공고수</div>
                            <LineGraph labels={lineLabels} label={lineLabel} datas={lineDatas} title={`${selectJobType} 트렌드`} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Trend;
