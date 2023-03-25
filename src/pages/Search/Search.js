import React, { useEffect, useState } from "react";
import { Header, Post, Filter } from "../../components";
// import { useNavigate } from "react-router-dom";

const Search = () => {
    // const navigate = useNavigate();

    const [result, setResult] = useState(null);
    const [background, setBackground] = useState(null);
    const [text, setText] = useState(null);
    const [viewResult, setViewResult] = useState([]);
    const [colorSet, setColorSet] = useState([]);

    useEffect(() => {
        document.getElementsByClassName('headerSearchImg')[0].style.width = '30px';
        document.getElementsByClassName('headerSearchImg')[0].style.height = '30px';
        document.getElementsByClassName('headerPost')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerPost')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerPost')[0].style.color = 'rgb(117, 117, 117)';
    }, []);

    useEffect(() => {
        if (result != null && !viewResult.includes(result)) {
            setViewResult([result, ...viewResult]);
            setColorSet([[background, text], ...colorSet]);
        }
        // result가 이미 viewResult에 있으면 안들어가게 하기

    }, [result, background, text, viewResult, colorSet]);

    // 첫번째 인자 삭제 안되는 문제 해결--------------------------------------------------
    const removeSearchResult = (name) => {
        const num = viewResult.indexOf(name);
        setViewResult((current) => {
            const newViewResult = [...current];
            newViewResult.splice(num, 1);
            // num위치부터 1개의 요소를 삭제
            return newViewResult;
        }); // setViewResult가 가리키는 배열이 바뀌어야 렌더링이 올바르게 수행됨
        setColorSet((current) => {
            const newColorSet = [...current];
            newColorSet.splice(num, 1);
            return newColorSet;
        });
    };

    return (
        <>
            <Header />
            <div className="filterBoxGroup">
                <div className="filterBox">
                    <div className="searchFilter">
                        <Filter className={'selectGroup selectJob selectLeft'} mainClassName={'selectJob'} selectBase={'직무'} img={"select"} option={['프론트엔드', '백엔드', 'AI']} result={[setResult, setBackground, setText]} />
                        {/* setResult를 인자로 보내서 Filter에서의 값 변화 가능하게함 */}

                        <Filter className={'selectGroup selectStack selectMiddle'} mainClassName={'selectStack'} selectBase={'기술 스택'} img={"search"} option={['프론트엔드', '백엔드', 'AI']} result={[setResult, setBackground, setText]} />

                        <Filter className={'selectGroup selectCompany selectRight'} mainClassName={'selectCompany'} selectBase={'기업 명'} img={"search"} option={['프론트엔드', '백엔드', 'AI']} result={[setResult, setBackground, setText]} />
                    </div>

                    <div className="searchFilter">
                        <Filter className={'selectGroup selectArea selectLeft'} mainClassName={'selectArea'} selectBase={'지역'} img={"select"} option={['서울', '경기', '부산']} result={[setResult, setBackground, setText]} />

                        <Filter className={'selectGroup selectEmployee selectMiddle'} mainClassName={'selectEmployee'} selectBase={'사원 수'} img={"select"} option={['50명 이하', '500명 이하']} result={[setResult, setBackground, setText]} />

                        <Filter className={'selectGroup selectPay selectMiddle'} mainClassName={'selectPay'} selectBase={'급여'} img={"select"} option={['1000만원 이상', '2000만원 이상', '3000만원 이상', '4000만원 이상', '5000만원 이상']} result={[setResult, setBackground, setText]} />

                        <Filter className={'selectGroup selectCareer selectRight'} mainClassName={'selectCareer'} selectBase={'경력'} img={"select"} option={['프론트엔드', '백엔드', 'AI']} result={[setResult, setBackground, setText]} />
                    </div>

                    <div className="searchResult">
                        {viewResult.map((v, index) => {
                            return (
                                <span key={v + index} className="searchResultBox" style={{ 'backgroundColor': colorSet[index][0], 'color': colorSet[index][1] }}>
                                    <span className="checkText">√</span>
                                    {/*  ∨ ν */}
                                    {v}
                                    <span className="xText" onClick={() => removeSearchResult(v)}>×</span>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="basicPage headerFarPage">
                <div className="filterSearchNum">
                    검색 결과 60기업
                </div>
                <div className="postGroup">
                    <Post company={'레몬베이스'} job={'Frontend Software Engineer'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    <Post company={'네모회사'} job={'백엔드 개발자'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />
                </div>
            </div>
        </>
    );
};

export default Search;
