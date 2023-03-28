import React from "react";
// import { useNavigate } from "react-router-dom";

const InfoApply = ({ img, job, company }) => {
    // const navigate = useNavigate();

    const good = (event) => {
        event.target.src === require("../../assets/images/good.png")
            ? event.target.src = require("../../assets/images/redGood.png")
            : event.target.src = require("../../assets/images/good.png");
    };

    return (
        <div className="infoApply infoBoxTool">
            <div className="infoIn">
                <div className="infoApplyHeader">
                    <img className="infoApplyCompanyImg" src={img} alt="company" />
                    <img className="goodBtn infoGoodBtn" src={require('../../assets/images/good.png')} alt="good" onClick={good} />
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
