import React, { useEffect, useState } from "react";
import { Header, FilterValue, Modal, ValueTable } from "../../components";
import { useNavigate } from "react-router-dom";

const ValueMain = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [userName, setUserName] = useState('사용자');
    const [profit, setProfit] = useState(-1);
    const [stable, setStable] = useState(-1);
    const [pay, setPay] = useState(-1);
    const [scale, setScale] = useState(-1);
    const [grow, setGrow] = useState(-1);
    const [open, setOpen] = useState('');

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        document.getElementsByClassName('headerValues')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerValues')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerValues')[0].style.color = 'rgb(101, 111, 119)';

        if (sessionStorage.getItem('userNum')) {
            setUserName(sessionStorage.getItem('userName'));

            if (sessionStorage.getItem('profit')) {
                setProfit(parseFloat(sessionStorage.getItem('profit')));
                setStable(parseFloat(sessionStorage.getItem('stable')));
                setPay(parseFloat(sessionStorage.getItem('pay')));
                setScale(parseFloat(sessionStorage.getItem('scale')));
                setGrow(parseFloat(sessionStorage.getItem('grow')));
            }
        }
        else {
            document.getElementsByClassName('valueBoldGrayText')[0].style.color = 'rgb(111, 108, 217)';
        }
    }, []);

    useEffect(() => {
        // 로그인 안해도 저장
        const valueGroup = [profit, stable, pay, scale, grow];
        const max = Math.max(...valueGroup);
        let maxGroup = [];
        for (let i = 0; i < 5; i++) {
            if (valueGroup[i] === max) maxGroup.push(i);
        }

        if (maxGroup.length === 5 || maxGroup.length === 4) maxGroup = [];

        sessionStorage.setItem('profit', profit);
        sessionStorage.setItem('stable', stable);
        sessionStorage.setItem('pay', pay);
        sessionStorage.setItem('scale', scale);
        sessionStorage.setItem('grow', grow);
        sessionStorage.setItem('big', maxGroup);
    }, [profit, stable, pay, scale, grow]);

    const valueCheck = () => { // useValueCheck으로 hook화 & value페이지에도 적용
        if (profit === -1 || stable === -1 || pay === -1 || scale === -1 || grow === -1) {
            alert('모든 가치관을 설정해주세요.');
        }
        else {
            // axios로 값 보내기
            navigate('/value');
        }
    };

    return (
        <>
            <Header />
            <div className="valueMainPage">
                <div className="basicPage">
                    <div className="valuePageHeader">
                        <Modal open={modalOpen} className="modal" setOpen={setModalOpen}>
                            <div className="valueModal">
                                <div className="valueModalBox">
                                    <ValueTable />
                                </div>
                            </div>
                        </Modal>
                        <div className="valueBox">
                            <div className="valueHeader">
                                <span className="valueBoldGrayText">{userName}</span> 님의 가치관을 선택해주세요.
                                <img className="valueImg" src={require('../../assets/images/explain.png')} alt="explain" onClick={() => setModalOpen(!modalOpen)} />
                            </div>
                            <div className="valueExplain">
                                수익성, 안정성, 급여, 규모/형태, 성장가능성을 토대로 추천해드립니다.<br />
                                ※ 최근 3개년 기업 재무상태표, 손익계산서 (전자공시시스템) 기반으로 합니다.
                            </div>

                            <div className="valueMainBox">

                                <FilterValue name={'수익성'} className={'selectValue profit'} mainClassName={'profit'} selectBase={'매출액순이익률, 매출액영업이익률, ROE'} option={[['웹젠', '넥슨 코리아'], ['아프리카 티비', '지어소프트'], ['카카오', '코나아이'], ['위메이드플레이', '위세아이'], ['엔텔스', '오픈베이스']]} result={setProfit} open={[open, setOpen]} />

                                <FilterValue name={'안정성'} className={'selectValue stable'} mainClassName={'stable'} selectBase={'유동성비율, 부채비율, 자기자본비율'} option={[['하이브랩', '사람인'], ['지니뮤직', '헥토파이셜'], ['현대이지웰', '라온피'], ['SK텔레콤', '아'], ['브리지텍', '케이아이엔엑']]} result={setStable} open={[open, setOpen]} />

                                <FilterValue name={'급여'} className={'selectValue pay'} mainClassName={'pay'} selectBase={'신입 초봉 기준'} option={[['구글코리아', '네이버'], ['우아한형제들', '넥슨코리아'], ['한국정보통신', '버킷플레이스'], ['예스24', '아프리카 티비'], ['아이티센', '더존비즈온']]} result={setPay} open={[open, setOpen]} />

                                <FilterValue name={'규모/형태'} className={'selectValue scale'} mainClassName={'scale'} selectBase={'사원 수, 기업형태'} option={[['SK텔레콤', '엘지유플러스'], ['케이티알파', '웹젠'], ['캘럭시아머니트리', '오픈베이스'], ['위메이드플레이', '커넥트웨이브'], ['투비소프트', '엠로']]} result={setScale} open={[open, setOpen]} />

                                <FilterValue name={'성장가능성'} className={'selectValue grow'} mainClassName={'grow'} selectBase={'영업이익, 매출액, 당기순이익증가율'} option={[['라온피플', '네온위즈'], ['인베니아', '더존비즈'], ['투비소프트', '대신정보통신'], ['핑거', '콤텍시스'], ['브리지텍', '에프엔가이']]} result={setGrow} open={[open, setOpen]} />

                                <button className="btn valueMainBtn purpleBtn" onClick={valueCheck}>결과 확인하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ValueMain;
