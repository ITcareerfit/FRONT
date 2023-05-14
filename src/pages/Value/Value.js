import React, { useEffect, useState } from "react";
// import cookies from "react-cookies";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CompanyValue, FilterValue, Header, Modal, MyValue, ValueTable } from "../../components";

const Value = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('사용자');
    const [modalOpen, setModalOpen] = useState(false);
    const [profit, setProfit] = useState(-1);
    const [stable, setStable] = useState(-1);
    const [pay, setPay] = useState(-1);
    const [scale, setScale] = useState(-1);
    const [grow, setGrow] = useState(-1);
    const [big, setBig] = useState([]);
    const [open, setOpen] = useState('');
    const [type, setType] = useState('');
    const [company1, setCompany1] = useState(null);
    const [company2, setCompany2] = useState(null);
    const [company3, setCompany3] = useState(null);
    const [company4, setCompany4] = useState(null);
    const [company5, setCompany5] = useState(null);

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
                setBig(sessionStorage.getItem('big'));
            }

            document.getElementsByClassName('valueDisplay')[0].style.filter = 'none';
            document.getElementsByClassName('valuePosts')[0].style.filter = 'none';
            document.getElementsByClassName('noUserValueDisplay')[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName('valueBoldGrayText')[0].style.color = 'rgb(111, 108, 217)';
        }
    }, [company1]);

    // type 문구 작성
    useEffect(() => {
        const valueGroup = [profit, stable, pay, scale, grow];
        const valueText = ['수익', '안정', '급여', '규모/형태', '성장'];
        const max = Math.max(...valueGroup);
        let maxGroup = [];
        for (let i = 0; i < 5; i++) {
            if (valueGroup[i] === max) maxGroup.push(i);
        }

        if (maxGroup.length === 5) {
            setBig([]);
            setType('균일');
        }
        else if (maxGroup.length === 4) {
            setBig([]);
            setType('복합');
        }
        else {
            let text = '';
            for (let i = 0; i < maxGroup.length; i++) {
                text = text + valueText[maxGroup[i]];
                if (i !== maxGroup.length - 1) text = text + ' ';
            }
            setBig(maxGroup);
            setType(text);
        }

        sessionStorage.setItem('profit', profit);
        sessionStorage.setItem('stable', stable);
        sessionStorage.setItem('pay', pay);
        sessionStorage.setItem('scale', scale);
        sessionStorage.setItem('grow', grow);
        sessionStorage.setItem('big', maxGroup);
    }, [profit, stable, pay, scale, grow]);

    const valuePost = () => {
        if (sessionStorage.getItem('userNum') && sessionStorage.getItem('profit') && sessionStorage.getItem('stable') && sessionStorage.getItem('pay') && sessionStorage.getItem('scale') && sessionStorage.getItem('grow')) {
            // axios로 profit stable, pay, scale, grow 보내고 그에 걸맞는 기업 노출
            axios.post(`${process.env.REACT_APP_SERVER_URL}/value`, {
                userNum: 0,
                profit: 40,
                stable: 40,
                pay: 40,
                scale: 40,
                grow: 40
                // userNum: sessionStorage.getItem('userNum'),
                // profit: profit,
                // stable: stable,
                // pay: pay,
                // scale: scale,
                // grow: grow

                // profit: sessionStorage.getItem('profit'),
                // stable: sessionStorage.getItem('stable'),
                // pay: sessionStorage.getItem('pay'),
                // scale: sessionStorage.getItem('scale'),
                // grow: sessionStorage.getItem('grow'),
            }).then((res) => {
                setCompany1(res.data.company1);
                setCompany2(res.data.company2);
                setCompany3(res.data.company3);
                setCompany4(res.data.company4);
                setCompany5(res.data.company5);
            }).catch((err) => {
                console.log(err);
            });
        }
        else alert('모든 가치관을 설정해주세요.');
    };

    return (
        <>
            <Header />
            <div className="basicPage">
                <div className="valuePageHeader">
                    <Modal open={modalOpen} className="modal" setOpen={setModalOpen}>
                        <div className="valueModal">
                            <div className="valueModalBox">
                                <ValueTable />
                            </div>
                        </div>
                    </Modal>
                    <div className="valueBox valueBoxLeft">
                        <div className="valueHeader">
                            <span className="valueBoldGrayText">{userName}</span> 님의 가치관을 선택해주세요.
                            <img className="valueImg" src={require('../../assets/images/explain.png')} alt="explain" onClick={() => setModalOpen(!modalOpen)} />
                        </div>
                        <div className="valueExplain">
                            수익성, 안정성, 급여, 규모/형태, 성장가능성을 토대로 추천해드립니다.
                        </div>

                        <FilterValue name={'수익성'} className={'selectValue profit'} mainClassName={'profit'} selectBase={'2022년 기준 매출액'} option={[['웹젠', '넥슨 코리아'], ['아프리카 티비', '지어소프트'], ['카카오', '코나아이'], ['위메이드플레이', '위세아이'], ['엔텔스', '오픈베이스']]} result={setProfit} open={[open, setOpen]} />

                        <FilterValue name={'안정성'} className={'selectValue stable'} mainClassName={'stable'} selectBase={'설립년차, 사원 수'} option={[['하이브랩', '사람인'], ['지니뮤직', '헥토파이셜'], ['현대이지웰', '라온피'], ['SK텔레콤', '아'], ['브리지텍', '케이아이엔엑']]} result={setStable} open={[open, setOpen]} />

                        <FilterValue name={'급여'} className={'selectValue pay'} mainClassName={'pay'} selectBase={'신입 초봉 기준'} option={[['second', '아아'], ['second', '아아'], ['second', '아아'], ['second', '아아'], ['second', '아아']]} result={setPay} open={[open, setOpen]} />

                        <FilterValue name={'규모/형태'} className={'selectValue scale'} mainClassName={'scale'} selectBase={'0~5기준'} option={[['second', '아아'], ['second', '아아'], ['second', '아아'], ['second', '아아'], ['second', '아아']]} result={setScale} open={[open, setOpen]} />

                        <FilterValue name={'성장가능성'} className={'selectValue grow'} mainClassName={'grow'} selectBase={'3년치 매출액 변동률'} option={[['라온피플', '네온위즈'], ['인베니아', '더존비즈'], ['투비소프트', '대신정보통신'], ['핑거', '콤텍시스'], ['브리지텍', '에프엔가이']]} result={setGrow} open={[open, setOpen]} />
                    </div>

                    <div className="valueDisplay">
                        <div className="valueDisplayExplain">
                            <span className="valueBoldGrayText">{userName}</span> 님은&nbsp;
                            <span className="valueText">"{type}형"</span> 입니다.
                            <div className="myValueRadar">
                                <MyValue myValue={[profit, stable, pay, scale, grow]} big={big} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="noUserValueDisplay">
                    로그인하고 <br />
                    결과를 확인해 보세요.
                    <br />
                    <button className="btn noUserValueBtn purpleBtn" onClick={() => navigate('/login')}>로그인 하기</button>
                </div>

                <div className="valueSearchText">
                    <div className="valueBtnBox">
                        <button className="btn valueBtn purpleBtn" onClick={valuePost}>공고 확인</button>
                    </div>
                    <span className="valueBoldGrayText">{userName}</span>님과 맞는 기업
                </div>

                <div className="postGroup valuePosts">
                    {company1
                        ? <>
                            <CompanyValue cpImg={company1.cpImg} infoCpName={company1.cpName} myValue={[profit, stable, pay, scale, grow]} companyValue={[company1.profit, company1.stable, company1.pay, company1.scale, company1.grow]} />

                            <CompanyValue cpImg={company2.cpImg} infoCpName={company2.cpName} myValue={[profit, stable, pay, scale, grow]} companyValue={[company2.profit, company2.stable, company2.pay, company2.scale, company2.grow]} />

                            <CompanyValue cpImg={company3.cpImg} infoCpName={company3.cpName} myValue={[profit, stable, pay, scale, grow]} companyValue={[company3.profit, company3.stable, company3.pay, company3.scale, company3.grow]} />

                            <CompanyValue cpImg={company4.cpImg} infoCpName={company4.cpName} myValue={[profit, stable, pay, scale, grow]} companyValue={[company4.profit, company4.stable, company4.pay, company4.scale, company4.grow]} />

                            <CompanyValue cpImg={company5.cpImg} infoCpName={company5.cpName} myValue={[profit, stable, pay, scale, grow]} companyValue={[company5.profit, company5.stable, company5.pay, company5.scale, company5.grow]} />
                        </>
                        : null}
                </div>
            </div>
        </>
    );
};

export default Value;
