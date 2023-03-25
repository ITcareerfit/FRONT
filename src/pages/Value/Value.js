import React, { useState } from "react";
import { FilterValue, Header } from "../../components";
// import { useNavigate } from "react-router-dom";

const Value = () => {
    // const navigate = useNavigate();
    const [open, setOpen] = useState('');

    return (
        <>
            <Header />
            <div className="valuePage">
                <div className="basicPage">
                    <div className="valueBox">
                        <div className="valueHeader">
                            <span className="valueUserText">사용자</span> 님의 가치관을 선택해주세요.
                        </div>
                        <div className="valueExplain">
                            수익성, 안정성, 연봉, 사내문화, 성장가능성을 토대로 추천해드립니다.
                        </div>

                        <FilterValue name={'수익성'} className={'selectValue profitability'} mainClassName={'profitability'} selectBase={'2022년 기준 매출액'} option={['1억', '2억', '3억']} open={[open, setOpen]} />

                        <FilterValue name={'안정성'} className={'selectValue stability'} mainClassName={'stability'} selectBase={'설립년차, 사원 수'} option={['50%', '70%', '100%']} open={[open, setOpen]} />

                        <FilterValue name={'급여'} className={'selectValue pay'} mainClassName={'pay'} selectBase={'신입 초봉 기준'} option={['1000만원', '2000만원', '3000만원']} open={[open, setOpen]} />

                        <FilterValue name={'사내문화'} className={'selectValue culture'} mainClassName={'culture'} selectBase={'0~5기준'} option={['0', '1', '2', '3', '4', '5']} open={[open, setOpen]} />

                        <FilterValue name={'성장가능성'} className={'selectValue grow'} mainClassName={'grow'} selectBase={'3년치 매출액 변동률'} option={['10%', '20%', '30%']} open={[open, setOpen]} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Value;
