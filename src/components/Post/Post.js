import React, { useEffect, useRef } from "react";
import { useGood } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Post = ({ infoId, cpImg, infoCpName, title, deadline, minCareer, maxCareer, infoLoc, infoTech }) => {
    const good = useGood;
    const navigate = useNavigate();

    const btn = useRef(null);

    const userNum = sessionStorage.getItem('userNum');

    useEffect(() => {
        if (sessionStorage.getItem('goodPosts')) {
            const goodPosts = sessionStorage.getItem('goodPosts').split(',');
            if (goodPosts.length !== 0 && goodPosts.indexOf(String(infoId)) !== -1) btn.current.src = require('../../assets/images/redGood.png');
            // infdexOf는 해당 값의 index값 반환, 없을 경우 -1 반환
        }
    }, [infoId]);

    const go = () => navigate(`/info/${infoId}`);

    return (
        <div className="post">
            <div className="postLeft" onClick={go}>
                {cpImg
                    ? <img className="postImg" src={cpImg} alt="companyImg" />
                    : <img className="postImg" src={require('../../assets/images/logo.png')} alt="companyImg" />}
            </div>

            <div className="postText">
                <div className="postHeader">
                    <div className="postHeaderLeft" onClick={go}>
                        <div className="companyName">
                            {infoCpName}
                        </div>
                        <div className="jobName">
                            {title}
                        </div>
                    </div>
                    <img className="goodBtn" src={require('../../assets/images/good.png')} alt="good" ref={btn} onClick={(event) => good(event, infoId, userNum)} />
                </div>

                <div className="postFooter" onClick={go}>

                    <div className="postBoxGroup">
                        <span className="postBox postDdayBox">
                            {deadline
                                ? `~ ${deadline[0]}년 ${deadline[1]}월 ${deadline[2]}일`
                                : '상시 모집'}
                        </span>
                    </div>
                    <div className="postDetail postBoxGroup">
                        <span className="postDetailText postCareer">
                            <img className="postDetailImg postCareerImg" src={require('../../assets/images/career.png')} alt="career" />
                            {minCareer === -1 && maxCareer === -1
                                ? '경력 무관'
                                : minCareer === 0 && maxCareer === 0
                                    ? '신입'
                                    : `${minCareer}년 ~ ${maxCareer}년`}
                        </span>
                        <span className="postDetailText postArea">
                            <img className="postDetailImg postAreaImg" src={require('../../assets/images/area.png')} alt="area" />
                            {infoLoc
                                ? infoLoc.split(' ').map((v, index) => (
                                    index <= 2
                                        ? v + ' '
                                        : null
                                ))
                                : ' -'}
                        </span>
                    </div>

                    {infoTech
                        ? infoTech.map((v, index) => (
                            v !== '' && index < 3
                                ? <div key={v + index} className="postStackBoxs">
                                    <span className="postBox postStackBox">
                                        {v}
                                    </span>
                                </div>
                                : index === 4
                                    ? <div key={v + index} className="postStackBoxs">
                                        <span className="postBox postStackBox">
                                            {'...'}
                                        </span>
                                    </div>
                                    : null
                        ))
                        : null}
                </div>
            </div>
        </div>
    );
};

export default Post;
