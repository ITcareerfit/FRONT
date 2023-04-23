import React from "react";
// import axios from "axios";
import { useGood } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";

const MypagePost = ({ pk, company, title, career, area }) => {
    const good = useGood;
    const navigate = useNavigate();

    const userPK = useParams().userPK; // url의 params 가져오기

    const go = () => navigate(`/info/${pk}`);

    return (
        <div className="mypagePost">
            <div className="mypagePostHeader">
                <div className="mypagePostCompany" onClick={go}>{company}</div>
                <img className="goodBtn mypageGood" src={require('../../assets/images/redGood.png')} alt="good" onClick={(event) => good(event, pk, userPK)} />
            </div>
            <div className="mypagePostTitle" onClick={go}>
                {title}
            </div>
            <div className="mypagePostDetail" onClick={go}>
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
