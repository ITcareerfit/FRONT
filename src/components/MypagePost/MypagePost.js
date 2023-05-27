import React, { useEffect, useRef } from "react";
import { useGood } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";

const MypagePost = ({ infoId, infoCpName, title, minCareer, maxCareer, infoLoc }) => {
    const good = useGood;
    const navigate = useNavigate();
    const btn = useRef(null);

    const userNum = useParams().userNum; // url의 params 가져오기

    useEffect(() => {
        const goodPosts = sessionStorage.getItem('goodPosts').split(',');
        if (goodPosts.length !== 0 && goodPosts.indexOf(String(infoId)) !== -1) btn.current.src = require('../../assets/images/redGood.png');
        // infdexOf는 해당 값의 index값 반환, 없을 경우 -1 반환
    }, [infoId]);

    const go = () => navigate(`/info/${infoId}`);

    return (
        <div className="mypagePost">
            <div className="mypagePostHeader">
                <div className="mypagePostCompany" onClick={go}>{infoCpName}</div>
                <img className="goodBtn mypageGood" src={require('../../assets/images/good.png')} alt="good" onClick={(event) => good(event, infoId, userNum)} ref={btn} />
            </div>
            <div className="mypagePostTitle" onClick={go}>
                {title}
            </div>
            <div className="mypagePostDetail" onClick={go}>
                <div className="mypagePostDetailBox">
                    <img className="postDetailImg" src={require('../../assets/images/career.png')} alt="career" />&nbsp;
                    {minCareer === -1
                        ? '경력 무관'
                        : maxCareer === 0
                            ? '신입'
                            : `${minCareer}년 ~ ${maxCareer}년`}
                </div>
                <div className="mypagePostDetailBox">
                    <img className="postDetailImg postAreaImg" src={require('../../assets/images/area.png')} alt="area" />
                    {infoLoc
                        ? infoLoc.split(' ').map((v, index) => (
                            index <= 2
                                ? v + ' '
                                : null
                        ))
                        : ' -'}
                </div>
            </div>
        </div>
    );
};

export default MypagePost;
