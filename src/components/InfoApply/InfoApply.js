import React from "react";
import { useGood } from "../../hooks";
import { useParams } from "react-router-dom";

const InfoApply = ({ cpImg, title, infoCpName, url }) => {
    const good = useGood;

    const infoId = useParams().infoId;
    const userNum = sessionStorage.getItem('userNum');

    const goUrl = () => {
        url ? window.location.href = url : alert('지원이 불가능합니다.');
    };

    return (
        <div className="infoApply infoBoxTool">
            <div className="infoApplyIn">
                <div className="infoApplyHeader">
                    {cpImg
                        ? <img className="infoApplyCompanyImg" src={cpImg} alt="companyImg" />
                        : <img className="infoApplyCompanyImg" src={require('../../assets/images/logo.png')} alt="companyImg" />}
                    <img className="goodBtn infoGoodBtn" src={require('../../assets/images/good.png')} alt="good" onClick={(event) => good(event, infoId, userNum)} />
                </div>
                <div className="infoApplyJobName">
                    {title}
                </div>
                <div className="infoApplyCompanyName">
                    {infoCpName}
                </div>
                <button className="btn infoBtn purpleBtn" onClick={goUrl}>지원하기</button>
            </div>
        </div>
    );
};

export default InfoApply;
