import React from "react";
import { useGood } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";

const MypagePost = ({ infoId, infoCpName, title, minCareer, maxCareer, infoLoc }) => {
    const good = useGood;
    const navigate = useNavigate();

    const userNum = useParams().userNum; // url의 params 가져오기

    const go = () => navigate(`/info/${infoId}`);

    return (
        <div className="mypagePost">
            <div className="mypagePostHeader">
                <div className="mypagePostCompany" onClick={go}>{infoCpName}</div>
                <img className="goodBtn mypageGood" src={require('../../assets/images/redGood.png')} alt="good" onClick={(event) => good(event, infoId, userNum)} />
            </div>
            <div className="mypagePostTitle" onClick={go}>
                {title}
            </div>
            <div className="mypagePostDetail" onClick={go}>
                <div className="mypagePostDetailBox">
                    <img className="postDetailImg" src={require('../../assets/images/career.png')} alt="career" />
                    &nbsp;{minCareer}{maxCareer}
                </div>
                <div className="mypagePostDetailBox">
                    <img className="postDetailImg postAreaImg" src={require('../../assets/images/area.png')} alt="area" />
                    {infoLoc}
                </div>
            </div>
        </div>
    );
};

export default MypagePost;
