import React, { useEffect, useState } from "react";
// import cookies from "react-cookies";
import { Header, FilterValue } from "../../components";
import { useNavigate } from "react-router-dom";

const ValueMain = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('사용자');
    const [profit, setProfit] = useState(-1);
    const [stable, setStable] = useState(-1);
    const [pay, setPay] = useState(-1);
    const [culture, setCulture] = useState(-1);
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
                setCulture(parseFloat(sessionStorage.getItem('culture')));
                setGrow(parseFloat(sessionStorage.getItem('grow')));
            }
        }
        else {
            document.getElementsByClassName('valueBoldGrayText')[0].style.color = 'rgb(111, 108, 217)';
        }
    }, []);

    useEffect(() => {
        // 로그인 안해도 저장
        const valueGroup = [profit, stable, pay, culture, grow];
        const max = Math.max(...valueGroup);
        let maxGroup = [];
        for (let i = 0; i < 5; i++) {
            if (valueGroup[i] === max) maxGroup.push(i);
        }

        if (maxGroup.length === 5 || maxGroup.length === 4) maxGroup = [];

        sessionStorage.setItem('profit', profit);
        sessionStorage.setItem('stable', stable);
        sessionStorage.setItem('pay', pay);
        sessionStorage.setItem('culture', culture);
        sessionStorage.setItem('grow', grow);
        sessionStorage.setItem('big', maxGroup);
    }, [profit, stable, pay, culture, grow]);

    const valueCheck = () => { // useValueCheck으로 hook화 & value페이지에도 적용
        if (profit === -1 || stable === -1 || pay === -1 || culture === -1 || grow === -1) {
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
                        <div className="valueBox">
                            <div className="valueHeader">
                                <span className="valueBoldGrayText">{userName}</span> 님의 가치관을 선택해주세요.
                            </div>
                            <div className="valueExplain">
                                수익성, 안정성, 급여, 사내문화, 성장가능성을 토대로 추천해드립니다.
                            </div>

                            <div className="valueMainBox">

                                <FilterValue name={'수익성'} className={'selectValue profit'} mainClassName={'profit'} selectBase={'2022년 기준 매출액'} option={['1억', '2억', '3억']} result={setProfit} open={[open, setOpen]} />

                                <FilterValue name={'안정성'} className={'selectValue stable'} mainClassName={'stable'} selectBase={'설립년차, 사원 수'} option={['50%', '70%', '100%']} result={setStable} open={[open, setOpen]} />

                                <FilterValue name={'급여'} className={'selectValue pay'} mainClassName={'pay'} selectBase={'신입 초봉 기준'} option={['1000만원', '2000만원', '3000만원']} result={setPay} open={[open, setOpen]} />

                                <FilterValue name={'사내문화'} className={'selectValue culture'} mainClassName={'culture'} selectBase={'0~5기준'} option={['0', '1', '2', '3', '4', '5']} result={setCulture} open={[open, setOpen]} />

                                <FilterValue name={'성장가능성'} className={'selectValue grow'} mainClassName={'grow'} selectBase={'3년치 매출액 변동률'} option={['10%', '20%', '30%']} result={setGrow} open={[open, setOpen]} />

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
