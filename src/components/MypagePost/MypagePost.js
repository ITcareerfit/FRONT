import React from "react";
// import { useNavigate } from "react-router-dom";

const MypagePost = ({ company, title, career, area }) => {
    // const navigate = useNavigate();

    const good = (event) => {
        event.target.src === require("../../assets/images/good.png")
            ? event.target.src = require("../../assets/images/redGood.png")
            : event.target.src = require("../../assets/images/good.png");
    };

    return (
        <div className="mypagePost">
            <div className="mypagePostHeader">
                <div className="mypagePostCompany">{company}</div>
                <img className="goodBtn mypageGood" src={require('../../assets/images/redGood.png')} alt="good" onClick={good} />
            </div>
            <div className="mypagePostTitle">
                {title}
            </div>
            <div className="mypagePostDetail">
                <div className="mypagePostDetailBox">
                    <img className="postDetailImg" src={require('../../assets/images/career.png')} alt="career" />
                    &nbsp;{career}
                </div>
                <div className="mypagePostDetailBox">
                    <img className="postDetailImg postAreaImg" src={require('../../assets/images/area.png')} alt="area" />
                    {area}
                </div>
            </div>
        </div>
    );
};

export default MypagePost;
