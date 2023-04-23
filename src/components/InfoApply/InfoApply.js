import React from "react";
import { useGood } from "../../hooks";
import { useParams } from "react-router-dom";

const InfoApply = ({ img, job, company }) => {
    const good = useGood;

    const pk = useParams().infoPK;
    const userPK = sessionStorage.getItem('userPK');

    return (
        <div className="infoApply infoBoxTool">
            <div className="infoApplyIn">
                <div className="infoApplyHeader">
                    <img className="infoApplyCompanyImg" src={img} alt="company" />
                    <img className="goodBtn infoGoodBtn" src={require('../../assets/images/good.png')} alt="good" onClick={(event) => good(event, pk, userPK)} />
                </div>
                <div className="infoApplyJobName">
                    {job}
                </div>
                <div className="infoApplyCompanyName">
                    {company}
                </div>
                <button className="btn infoBtn purpleBtn">지원하기</button>
            </div>
        </div>
    );
};

export default InfoApply;
