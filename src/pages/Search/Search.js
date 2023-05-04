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
    const [num, setNum] = useState(0);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [job, setJob] = useState([]);
    const [stack, setStack] = useState([]);
    const [company, setCompany] = useState('');
    const [type, setType] = useState('');
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

    // useEffect(() => {
    //     // axios get 으로 해당 페이지 채용정보 받아오기
    //     if (viewResult.length === 0) {
    //         axios.get(`${process.env.REACT_APP_SERVER_URL}/search?page=${page}&size=20`
    //         ).then((res) => {
    //             setNum(res.data.totalElements);
    //             setMaxPage(res.data.totalPages);
    //             setPosts(res.data.content);
    //         }).catch((err) => {
    //             console.log(err);
    //         });

    //         window.scrollTo(0, 0); // 맨 위로 이동
    //         navigate(`?page=${page}`);
    //     }

    // }, [viewResult, navigate, page]);

    useEffect(() => {
        // result가 이미 viewResult에 있을때 없애기
        if (result !== null) {
            let newViewResult = viewResult.filter(data => data[0] !== result[0]); // data!==result는 안됨 -> 참조값이 달라서 항상 다른값

            // input, radio에서 한 개만 선택되도록 하기
            if (removeResult !== null) {
                newViewResult = newViewResult.filter(data => data[0] !== removeResult[0]);
                setRemoveResult(null);
            }

            newViewResult.unshift(result); // 맨 앞에 삽입
            setResult(null);
            setViewResult(newViewResult);
        }
    }, [result, removeResult, viewResult]);

    useEffect(() => {
        let dataJob, dataStack, dataCompany, dataType, dataEmployee, dataPay, dataCareer;

        job.length === 0 ? dataJob = null : dataJob = String(job).split('^'); // string으로 변환 후 ^ 기준으로 나누기 -> 배열화
        stack.length === 0 ? dataStack = null : dataStack = String(stack).split('^');
        company === '' ? dataCompany = null : dataCompany = company;
        type === ''
            ? dataType = null
            : type === '정규직'
                ? dataType = 1
                : dataType = 0;
        employee === ''
            ? dataEmployee = 0
            : dataEmployee = employee.slice(0, -4); // 숫자만 추출 위해 뒤의 문자열은 제거
        pay === ''
            ? dataPay = -1
            : dataPay = pay.slice(0, -5);
        career === ''
            ? dataCareer = -1
            : career === '신입'
                ? dataCareer = 100
                : dataCareer = career.slice(0, -4);

        if (dataJob !== null || dataStack !== null || dataCompany !== null || dataType !== null || dataEmployee !== 0 || dataPay !== -1 || dataCareer !== -1) {
            // 검색 목록 있을때
            axios.post(`${process.env.REACT_APP_SERVER_URL}/search?page=${page}&size=20`, {
                job: dataJob,
                stack: dataStack,
                company: dataCompany,
                jobType: dataType,
                employee: dataEmployee,
                pay: dataPay,
                career: dataCareer
            }).then((res) => {
                setNum(res.data.total);
                setPosts(res.data.postDto);
                res.data.total % 20 === 0 ? setMaxPage(Math.floor(res.data.total / 20)) : setMaxPage(Math.floor(res.data.total / 20) + 1); // Math.floor는 몫만 추출
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/search?page=${page}&size=20`
            ).then((res) => {
                setNum(res.data.totalElements);
                setMaxPage(res.data.totalPages);
                setPosts(res.data.content);
            }).catch((err) => {
                console.log(err);
            });
        }

        window.scrollTo(0, 0); // 맨 위로 이동
        navigate(`?page=${page}`);

    }, [page, navigate, job, stack, company, type, employee, pay, career]);

    useEffect(() => {
        if (page > maxPage) setPage(1);
    }, [page, maxPage]);

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

                        <FilterMany className={'selectGroup selectStack selectMiddle'} mainClassName={'selectStack'} selectBase={'기술 스택'} option={['react', 'Java', 'Python']} result={setResult} viewResult={viewResult} send={setStack} open={[open, setOpen]} />

                        <FilterInput className={'selectGroup selectRight'} mainClassName={'selectCompany'} inputClassName={'selectBase selectInput selectCompany'} placeholder={'기업명'} result={setResult} viewResult={viewResult} remove={setRemoveResult} send={[company, setCompany]} />
                    </div>

                    <div className="searchFilter">
                        <Filter className={'selectGroup selectType selectLeft'} mainClassName={'selectType'} selectBase={'고용형태'} option={['정규직', '계약직']} result={setResult} viewResult={viewResult} remove={setRemoveResult} send={setType} open={[open, setOpen]} />

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
                    검색 결과 {num}개
                </div>
                <div className="postGroup">
                    {/* 20개씩 페이징처리 */}

                    {posts
                        ? posts.map((v, index) => {
                            return (
                                <Post key={v + index} infoId={v.infoId} cpImg={v.infoCpName.cpImg} infoCpName={v.infoCpName.cpName} title={v.title} deadline={v.deadline} minCareer={v.minCareer} maxCareer={v.maxCareer} infoLoc={v.infoLoc} infoTech={v.infoTechList} />
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
