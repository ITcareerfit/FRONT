import React, { useEffect, useState } from "react";
import { Header, Filter, FilterInput, Post, FilterMany } from "../../components";
// import { useNavigate } from "react-router-dom";

const Search = () => {
    // const navigate = useNavigate();

    const [result, setResult] = useState(null);
    const [removeResult, setRemoveResult] = useState(null);
    const [background, setBackground] = useState(null);
    const [text, setText] = useState(null);
    const [viewResult, setViewResult] = useState([]);
    const [colorSet, setColorSet] = useState([]);
    const [open, setOpen] = useState('');

    useEffect(() => {
        document.getElementsByClassName('headerSearchImg')[0].style.width = '30px';
        document.getElementsByClassName('headerSearchImg')[0].style.height = '30px';
        document.getElementsByClassName('headerPost')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerPost')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerPost')[0].style.color = 'rgb(101, 111, 119)';
    }, []);

    useEffect(() => {
        if (result != null && !viewResult.includes(result)) {
            setViewResult([result, ...viewResult]);
            setColorSet([[background, text], ...colorSet]);
        }
        // result가 이미 viewResult에 있으면 안들어가게 하기

        // radio에서 한 개만 선택되도록 하기
        if (removeResult !== null) {
            const newViewResult = viewResult.filter(data => data !== removeResult);
            // data가 removeResult라면 빼고 새 배열 생성
            setRemoveResult(null);
            setViewResult(newViewResult);
        }

    }, [result, removeResult, background, text, viewResult, colorSet]);

    const removeSearchResult = (name) => {
        const num = viewResult.indexOf(name);
        setViewResult((current) => {
            const newViewResult = [...current];
            newViewResult.splice(num, 1);
            // num위치부터 1개의 요소를 삭제
            setResult(null); // result를 null로 할당해야 가장 최근에 추가한 검색어가 또 들어가지 않음

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
                    <div className="searchHeader">
                        채용 공고 검색
                        <img className="searchHeaderImg" src={require('../../assets/images/purpleSearch.png')} alt='search' />
                    </div>

                    <div className="searchFilter">
                        <FilterMany className={'selectGroup selectJob selectLeft'} mainClassName={'selectJob'} selectBase={'직무'} option={['프론트엔드', '백엔드', 'AI']} result={[setResult, setBackground, setText]} viewResult={viewResult} open={[open, setOpen]} />
                        {/* setResult를 인자로 보내서 Filter에서의 값 변화 가능하게함 */}

                        <FilterInput className={'selectGroup selectMiddle'} mainClassName={'selectStack'} inputClassName={'selectBase selectInput selectStack'} placeholder={'기술 스택'} result={[setResult, setBackground, setText]} />

                        <FilterInput className={'selectGroup selectRight'} mainClassName={'selectCompany'} inputClassName={'selectBase selectInput selectCompany'} placeholder={'기업명'} result={[setResult, setBackground, setText]} />
                    </div>

                    <div className="searchFilter">
                        <FilterMany className={'selectGroup selectJobType selectLeft'} mainClassName={'selectJobType'} selectBase={'업종'} option={['요식', '금융', '문화예술']} result={[setResult, setBackground, setText]} viewResult={viewResult} open={[open, setOpen]} />

                        <Filter className={'selectGroup selectEmployee selectMiddle'} mainClassName={'selectEmployee'} selectBase={'사원 수'} option={['50명 이하', '500명 이하']} result={[setResult, setBackground, setText]} viewResult={viewResult} remove={setRemoveResult} open={[open, setOpen]} />

                        <Filter className={'selectGroup selectPay selectMiddle'} mainClassName={'selectPay'} selectBase={'급여'} option={['1000만원 이상', '2000만원 이상', '3000만원 이상', '4000만원 이상', '5000만원 이상']} result={[setResult, setBackground, setText]} viewResult={viewResult} remove={setRemoveResult} open={[open, setOpen]} />

                        <Filter className={'selectGroup selectCareer selectRight'} mainClassName={'selectCareer'} selectBase={'경력'} option={['1년이상', '2년이상', '3년이상']} result={[setResult, setBackground, setText]} viewResult={viewResult} remove={setRemoveResult} open={[open, setOpen]} />
                    </div>

                    <div className="searchResult">
                        <span className="searchResultBox searchResultFirst" />
                        {/* height값 주기 위해 안보이는 span 설정 */}

                        {viewResult.map((v, index) => {
                            return (
                                <span key={v + index} className="searchResultBox" style={{ 'backgroundColor': colorSet[index][0], 'color': colorSet[index][1] }}>
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
                    <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'레몬베이스'} job={'Frontend Software Engineer'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'레몬베이스'} job={'Frontend Software Engineer'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'레몬베이스'} job={'Frontend Software Engineer'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} Dday={4} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />
                </div>
            </div>
        </>
    );
};

export default Search;
