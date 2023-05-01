import React from "react";
import { useGood } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";

const InfoApply = ({ cpImg, title, infoCpName }) => {
    const navigate = useNavigate();
    const good = useGood;

    const infoId = useParams().infoId;
    const userNum = sessionStorage.getItem('userNum');

    return (
        <div className="infoApply infoBoxTool">
            <div className="infoApplyIn">
                <div className="infoApplyHeader">
                    <img className="infoApplyCompanyImg" src={cpImg} alt="company" />
                    <img className="goodBtn infoGoodBtn" src={require('../../assets/images/good.png')} alt="good" onClick={(event) => good(event, infoId, userNum)} />
                </div>
                <div className="infoApplyJobName">
                    {title}
                </div>
                <div className="infoApplyCompanyName">
                    {infoCpName}
                </div>
                <button className="btn infoBtn purpleBtn" onClick={() => navigate('/login')}>지원하기</button>
            </div>
        </div>
    );
};

export default InfoApply;
