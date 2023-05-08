import React, { useEffect, useState } from "react";
import MyValue from "../MyValue";

const CompanyValue = ({ cpImg, infoCpName, myValue, companyValue }) => {
    const [similar, setSimilar] = useState([]);
    const [type, setType] = useState('');

    useEffect(() => {
        const valueText = ['수익성', '안정성', '급여', '규모/형태', '성장가능성'];
        let diff = [0, 0, 0, 0, 0];
        for (let i = 0; i < 5; i++) {
            diff[i] = Math.abs(myValue[i] - companyValue[i]);
        }
        const min = Math.min(...diff);

        let minGroup = [];
        for (let i = 0; i < 5; i++) {
            if (diff[i] === min) minGroup.push(i);
        }

        if (minGroup.length === 5) setType('모두');
        else {
            let text = '';
            for (let i = 0; i < minGroup.length; i++) {
                text = text + valueText[minGroup[i]];
                if (i !== minGroup.length - 1) text = text + ' ';
            }
            setSimilar(minGroup);
            setType(text);
        }

    }, [companyValue, myValue]);

    return (
        <div className="companyValuePost">
            <div className="companyValueLeft">
                <div className="companyValueIn">
                    <img className="companyValueImg" src={cpImg} alt="company" />
                    <div className="companyValueName">
                        {infoCpName}
                    </div>

                    <div className="companyValueDetail">
                        <div className="companyValueTitle">
                            수익성
                        </div>
                        <div className="companyValueAnswer">
                            {companyValue[0]}%
                        </div>
                    </div>
                    <div className="companyValueDetail">
                        <div className="companyValueTitle">
                            안정성
                        </div>
                        <div className="companyValueAnswer">
                            {companyValue[1]}%
                        </div>
                    </div>
                    <div className="companyValueDetail">
                        <div className="companyValueTitle">
                            급여
                        </div>
                        <div className="companyValueAnswer">
                            {companyValue[2]}%
                        </div>
                    </div>
                    <div className="companyValueDetail">
                        <div className="companyValueTitle">
                            규모/형태
                        </div>
                        <div className="companyValueAnswer">
                            {companyValue[3]}%
                        </div>
                    </div>
                    <div className="companyValueDetail">
                        <div className="companyValueTitle">
                            성장가능성
                        </div>
                        <div className="companyValueAnswer">
                            {companyValue[4]}%
                        </div>
                    </div>
                </div>
                <div className="goCompany">
                    채용정보 보기
                    <img className="mypageCompanySelect" src={require('../../assets/images/blueSelect.png')} alt="select" />
                </div>
            </div>
            <div className="companyValueRight">
                <div className="companyValueInRight">
                    <div className="companyValueText">
                        <span className="valueBoldGrayText">{infoCpName}</span>는&nbsp;
                        <span className="companyValueMax">"{type}"</span> 부분에서 높은 일치율을 보입니다.
                    </div>
                    <div className="companyRadar">
                        <MyValue myValue={[myValue[0], myValue[1], myValue[2], myValue[3], myValue[4]]} companyValue={[companyValue[0], companyValue[1], companyValue[2], companyValue[3], companyValue[4]]} similar={similar} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyValue;
