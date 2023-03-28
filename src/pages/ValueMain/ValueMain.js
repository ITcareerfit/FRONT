import React, { useEffect, useState } from "react";
import cookies from "react-cookies";
import { Header, FilterValue } from "../../components";
import { useNavigate } from "react-router-dom";

const ValueMain = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('사용자');
    const [profit, setProfit] = useState(0);
    const [stable, setStable] = useState(0);
    const [pay, setPay] = useState(0);
    const [culture, setCulture] = useState(0);
    const [grow, setGrow] = useState(0);
    const [open, setOpen] = useState('');

    sessionStorage.clear();
    // cookies.remove('profit');
    // cookies.remove('stable');
    // cookies.remove('pay');
    // cookies.remove('culture');
    // cookies.remove('grow');
    sessionStorage.setItem('userPK', 'known@user.com');

    useEffect(() => {
        document.getElementsByClassName('headerValues')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerValues')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerValues')[0].style.color = 'rgb(101, 111, 119)';

        if (sessionStorage.getItem('userPK')) {
            setUserName(sessionStorage.getItem('userPK'));
        }
        else {
            document.getElementsByClassName('valueBoldGrayText')[0].style.color = 'rgb(111, 108, 217)';
        }
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem('userPK')) {
            cookies.save('profit', profit);
            cookies.save('stable', stable);
            cookies.save('pay', pay);
            cookies.save('culture', culture);
            cookies.save('grow', grow);
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

                                <button className="btn valueMainBtn purpleBtn" onClick={() => { navigate('/value'); }}>결과 확인하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ValueMain;
