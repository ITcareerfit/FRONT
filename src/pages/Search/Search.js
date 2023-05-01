import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, Filter, FilterInput, Post, FilterMany, Pagination } from "../../components";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const [result, setResult] = useState(null);
    const [removeResult, setRemoveResult] = useState(null);
    const [viewResult, setViewResult] = useState([]);
    const [open, setOpen] = useState('');
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [job, setJob] = useState([]);
    const [stack, setStack] = useState([]);
    const [company, setCompany] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [employee, setEmployee] = useState('');
    const [pay, setPay] = useState('');
    const [career, setCareer] = useState('');

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        document.getElementsByClassName('headerSearchImg')[0].style.width = '30px';
        document.getElementsByClassName('headerSearchImg')[0].style.height = '30px';
        document.getElementsByClassName('headerPost')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerPost')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerPost')[0].style.color = 'rgb(101, 111, 119)';
    }, []);

    useEffect(() => {
        // axios get 으로 해당 페이지 채용정보 받아오기
        axios.get(`${process.env.REACT_APP_SERVER_URL}/search?page=${page}&size=20`
        ).then((res) => {
            setMaxPage(res.data.totalPages);
            setPosts(res.data.content);
        }).catch((err) => {
            console.log(err);
        });

        navigate(`?page=${page}`);
    }, [navigate, page]);

    useEffect(() => {
        // result가 이미 viewResult에 있으면 안들어가게 하기
        if (result !== null && !viewResult.includes(result)) setViewResult([result, ...viewResult]);

        // radio에서 한 개만 선택되도록 하기
        if (removeResult !== null) {
            const newViewResult = viewResult.filter(data => data[0] !== removeResult[0]);
            setRemoveResult(null);
            setViewResult(newViewResult);
        }
    }, [result, removeResult, viewResult]);

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/search`, {
            job: String(job).split('^'), // string으로 변환 후 ^ 기준으로 나누기 -> 배열화
            stack: String(stack).split('^'),
            company: String(company).split('^'),
            jobType: String(jobType).split('^'),
            employee: employee,
            pay: pay,
            career: career
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

    }, [job, stack, company, jobType, employee, pay, career]);

    const removeSearchResult = (remove) => {
        const num = viewResult.indexOf(remove);
        setViewResult((current) => {
            const newViewResult = [...current];
            newViewResult.splice(num, 1); // num위치부터 1개의 요소를 삭제
            setResult(null); // result를 null로 할당해야 가장 최근에 추가한 검색어가 또 들어가지 않음

            return newViewResult;
        }); // setViewResult가 가리키는 배열이 바뀌어야 렌더링이 올바르게 수행됨
    };

    return (
        <>
            <Header />
            <div className="filterBoxGroup">
                <div className="filterBox">
                    <div className="searchHeader">
                        채용 공고 검색
                        <img className="searchHeaderImg" src={require('../../assets/images/purpleSearch.png')} alt='search' />
                    </div>

                    <div className="searchFilter">
                        <FilterMany className={'selectGroup selectJob selectLeft'} mainClassName={'selectJob'} selectBase={'직무'} option={['DBA', 'ERP', 'iOS', 'QA', 'VR/AR/3D', '개발PM', '게임 서버', '게임 클라이언트', '그래픽스', '데브옵스', '데이터 엔지니어링', '로보틱스 미들웨어', '머신러닝', '모바일 게임', '블록체인', '사물인터넷(IoT)', '서버/백엔드', '시스템 소프트웨어', '시스템/네트워크', '안드로이드', '웹 퍼블리싱', '웹 풀스택', '응용 프로그램', '인공지능(AI)', '인터넷 보안', '임베디드 소프트웨어', '크로스 플랫폼', '프론트엔드']} result={setResult} viewResult={viewResult} send={setJob} open={[open, setOpen]} />
                        {/* setResult를 인자로 보내서 Filter에서의 값 변화 가능하게함 */}

                        <FilterInput className={'selectGroup selectMiddle'} mainClassName={'selectStack'} inputClassName={'selectBase selectInput selectStack'} placeholder={'기술 스택'} result={setResult} viewResult={viewResult} send={[stack, setStack]} />

                        <FilterInput className={'selectGroup selectRight'} mainClassName={'selectCompany'} inputClassName={'selectBase selectInput selectCompany'} placeholder={'기업명'} result={setResult} viewResult={viewResult} send={[company, setCompany]} />
                    </div>

                    <div className="searchFilter">
                        <FilterMany className={'selectGroup selectJobType selectLeft'} mainClassName={'selectJobType'} selectBase={'업종'} option={['IT/웹/통신', '기관/협회', '유통/무역/운송', '서비스업', '제조/화학', '미디어/디자인', '은행/금융업', '건설업', '의료/제약/복지', '교육업']} result={setResult} viewResult={viewResult} send={setJobType} open={[open, setOpen]} />

                        <Filter className={'selectGroup selectEmployee selectMiddle'} mainClassName={'selectEmployee'} selectBase={'사원 수'} option={['5명 이상', '20명 이상', '50명 이상', '100명 이상']} result={setResult} viewResult={viewResult} remove={setRemoveResult} send={setEmployee} open={[open, setOpen]} />

                        <Filter className={'selectGroup selectPay selectMiddle'} mainClassName={'selectPay'} selectBase={'급여'} option={['3000만원 이상', '4000만원 이상', '5000만원 이상', '6000만원 이상', '7000만원 이상']} result={setResult} viewResult={viewResult} remove={setRemoveResult} send={setPay} open={[open, setOpen]} />

                        <Filter className={'selectGroup selectCareer selectRight'} mainClassName={'selectCareer'} selectBase={'경력'} option={['신입', '1년 경력', '2년 경력', '3년 경력', '4년 경력']} result={setResult} viewResult={viewResult} remove={setRemoveResult} send={setCareer} open={[open, setOpen]} />
                    </div>

                    <div className="searchResult">
                        <span className="searchResultBox searchResultFirst" />
                        {/* height값 주기 위해 안보이는 span 설정 */}

                        {viewResult.map((v, index) => {
                            return (
                                <span key={v + index} className="searchResultBox" style={{ 'backgroundColor': v[1], 'color': v[2] }}>
                                    {v[0]}
                                    <span className="xText" onClick={() => removeSearchResult(v)}>×</span>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="basicPage searchPage">

                <div className="filterSearchNum">
                    {/* num change after */}
                    검색 결과 60기업
                </div>
                <div className="postGroup">
                    {/* 20개씩 페이징처리 */}

                    {posts
                        ? posts.map((v, index) => {
                            return (
                                <Post key={v + index} infoId={v.infoId} cpImg={v.infoCpName.cpImg} infoCpName={v.infoCpName.cpName} title={v.title} deadline={v.deadline} minCareer={v.minCareer} maxCareer={v.maxCareer} infoLoc={v.infoLoc} infoTech={v.infoTech} />
                            );
                        })
                        : null}
                </div>

                <Pagination maxPage={maxPage} page={[page, setPage]} />
            </div>
        </>
    );
};

export default Search;
