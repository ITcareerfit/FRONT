import React, { useEffect, useState } from "react";
// import cookies from "react-cookies";
import { Header, FilterValue } from "../../components";
import { useNavigate } from "react-router-dom";

const ValueMain = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('사용자');
    const [profit, setProfit] = useState(0);
    const [stable, setStable] = useState(0);
    const [pay, setPay] = useState(0);
    const [culture, setCulture] = useState(0);
    const [grow, setGrow] = useState(0);
    const [open, setOpen] = useState('');

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        document.getElementsByClassName('headerValues')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerValues')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerValues')[0].style.color = 'rgb(101, 111, 119)';

        if (sessionStorage.getItem('userPK')) {
            setName(sessionStorage.getItem('name'));

            // 5가지 가치 처리방법 어떻게? 로그인때 전달? -> change
            if (sessionStorage.getItem('profit')) setProfit(parseFloat(sessionStorage.getItem('profit')));
            if (sessionStorage.getItem('stable')) setStable(parseFloat(sessionStorage.getItem('stable')));
            if (sessionStorage.getItem('pay')) setPay(parseFloat(sessionStorage.getItem('pay')));
            if (sessionStorage.getItem('culture')) setCulture(parseFloat(sessionStorage.getItem('culture')));
            if (sessionStorage.getItem('grow')) setGrow(parseFloat(sessionStorage.getItem('grow')));
        }
        else {
            document.getElementsByClassName('valueBoldGrayText')[0].style.color = 'rgb(111, 108, 217)';
        }
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem('userPK')) {
            const valueGroup = [profit, stable, pay, culture, grow];
            const max = Math.max(...valueGroup);
            let maxGroup = [];
            for (let i = 0; i < 5; i++) {
                if (valueGroup[i] === max) maxGroup.push(i);
            }

            if (maxGroup.length === 5 || maxGroup.length === 4) maxGroup = [];

            // 5가지 가치 처리방법에 따라 달라짐 -> change
            sessionStorage.getItem('profit', profit);
            sessionStorage.getItem('stable', stable);
            sessionStorage.getItem('pay', pay);
            sessionStorage.getItem('culture', culture);
            sessionStorage.getItem('grow', grow);
            sessionStorage.getItem('big', maxGroup);
        }
    }, [profit, stable, pay, culture, grow]);


    return (
        <>
            <Header />
            <div className="valueMainPage">
                <div className="basicPage">
                    <div className="valuePageHeader">
                        <div className="valueBox">
                            <div className="valueHeader">
                                <span className="valueBoldGrayText">{name}</span> 님의 가치관을 선택해주세요.
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

                                <button className="btn valueMainBtn purpleBtn" onClick={() => navigate('/value')}>결과 확인하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ValueMain;
