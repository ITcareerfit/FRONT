import React, { useEffect, useState } from "react";
import cookies from "react-cookies";
import { CompanyValue, FilterValue, Header, MyValue } from "../../components";
import { useNavigate } from "react-router-dom";

const Value = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('사용자');
    const [profit, setProfit] = useState(0);
    const [stable, setStable] = useState(0);
    const [pay, setPay] = useState(0);
    const [culture, setCulture] = useState(0);
    const [grow, setGrow] = useState(0);
    const [open, setOpen] = useState('');
    const [type, setType] = useState('');

    sessionStorage.clear();
    sessionStorage.setItem('userPK', 'known@user.com');

    useEffect(() => {
        document.getElementsByClassName('headerValues')[0].style.fontSize = '18px';
        document.getElementsByClassName('headerValues')[0].style.fontWeight = 'bold';
        document.getElementsByClassName('headerValues')[0].style.color = 'rgb(101, 111, 119)';

        if (sessionStorage.getItem('userPK')) {
            setUserName(sessionStorage.getItem('userPK'));

            if (cookies.load('profit')) setProfit(parseInt(cookies.load('profit')));
            if (cookies.load('stable')) setStable(parseInt(cookies.load('stable')));
            if (cookies.load('pay')) setPay(parseInt(cookies.load('pay')));
            if (cookies.load('culture')) setCulture(parseInt(cookies.load('culture')));
            if (cookies.load('grow')) setGrow(parseInt(cookies.load('grow')));

            document.getElementsByClassName('valueDisplay')[0].style.filter = 'none';
            document.getElementsByClassName('valuePosts')[0].style.filter = 'none';
            document.getElementsByClassName('noUserValueDisplay')[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName('valueBoldGrayText')[0].style.color = 'rgb(111, 108, 217)';
        }
    }, []);

    // type 문구 작성
    useEffect(() => {
        const valueGroup = [profit, stable, pay, culture, grow];
        const valueText = ['수익', '안정', '급여', '사내문화', '성장'];
        const max = Math.max(...valueGroup);
        let maxGroup = [];
        for (let i = 0; i < 5; i++) {
            if (valueGroup[i] === max) maxGroup.push(i);
        }

        if (maxGroup.length === 5) setType('균일');
        else if (maxGroup.length === 4) setType('복합');
        else {
            let text = '';
            for (let i = 0; i < maxGroup.length; i++) {
                text = text + valueText[maxGroup[i]];
                if (i !== maxGroup.length - 1) text = text + ' ';
            }
            setType(text);
        }

    }, [profit, stable, pay, culture, grow]);

    return (
        <>
            <Header />
            <div className="basicPage">
                <div className="valuePageHeader">
                    <div className="valueBox valueBoxLeft">
                        <div className="valueHeader">
                            <span className="valueBoldGrayText">{userName}</span> 님의 가치관을 선택해주세요.
                        </div>
                        <div className="valueExplain">
                            수익성, 안정성, 급여여, 사내문화, 성장가능성을 토대로 추천해드립니다.
                        </div>

                        <FilterValue name={'수익성'} className={'selectValue profit'} mainClassName={'profit'} selectBase={'2022년 기준 매출액'} option={['1억', '2억', '3억']} result={setProfit} open={[open, setOpen]} />

                        <FilterValue name={'안정성'} className={'selectValue stable'} mainClassName={'stable'} selectBase={'설립년차, 사원 수'} option={['50%', '70%', '100%']} result={setStable} open={[open, setOpen]} />

                        <FilterValue name={'급여'} className={'selectValue pay'} mainClassName={'pay'} selectBase={'신입 초봉 기준'} option={['1000만원', '2000만원', '3000만원']} result={setPay} open={[open, setOpen]} />

                        <FilterValue name={'사내문화'} className={'selectValue culture'} mainClassName={'culture'} selectBase={'0~5기준'} option={['0', '1', '2', '3', '4', '5']} result={setCulture} open={[open, setOpen]} />

                        <FilterValue name={'성장가능성'} className={'selectValue grow'} mainClassName={'grow'} selectBase={'3년치 매출액 변동률'} option={['10%', '20%', '30%']} result={setGrow} open={[open, setOpen]} />

                    </div>

                    <div className="valueDisplay">
                        <div className="valueDisplayExplain">
                            <span className="valueBoldGrayText">{userName}</span> 님은&nbsp;
                            <span className="valueText">"{type}형"</span> 입니다.
                            <div className="myValueRadar">
                                <MyValue myValue={[profit, stable, pay, culture, grow]} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="noUserValueDisplay">
                    로그인하고 <br />
                    결과를 확인해 보세요.
                    <br />
                    <button className="btn noUserValueBtn purpleBtn" onClick={() => { navigate('/login'); }}>로그인 하기</button>
                </div>

                <div className="valueSearchText">
                    <span className="valueBoldGrayText">{userName}</span>님과 맞는 기업
                </div>

                <div className="postGroup valuePosts">
                    <CompanyValue img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'드림어스컴퍼니'} myValue={[profit, stable, pay, culture, grow]} companyValue={[58, 90, 40, 60, 76]} />

                    <CompanyValue img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'드림어스컴퍼니'} myValue={[profit, stable, pay, culture, grow]} companyValue={[58, 90, 40, 60, 76]} />

                    <CompanyValue img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'드림어스컴퍼니'} myValue={[profit, stable, pay, culture, grow]} companyValue={[58, 90, 40, 60, 76]} />

                    <CompanyValue img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'드림어스컴퍼니'} myValue={[profit, stable, pay, culture, grow]} companyValue={[58, 90, 40, 60, 76]} />
                </div>
            </div>
        </>
    );
};

export default Value;
