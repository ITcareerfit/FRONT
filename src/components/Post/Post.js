import React from "react";
import { useGood } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Post = ({ pk, img, company, job, Dday, career, area, stack }) => {
    const good = useGood;
    const navigate = useNavigate();

    const userPK = sessionStorage.getItem('userPK');

    const go = () => navigate(`/info/${pk}`);

    return (
        <div className="post">
            <div className="postLeft" onClick={go}>
                <img className="postImg" src={img} alt="companyImg" />
            </div>

            <div className="postText">
                <div className="postHeader">
                    <div className="postHeaderLeft" onClick={go}>
                        <div className="companyName">
                            {company}
                        </div>
                        <div className="jobName">
                            {job}
                        </div>
                    </div>

                    <img className="goodBtn" src={require('../../assets/images/good.png')} alt="good" onClick={(event) => good(event, pk, userPK)} />
                </div>

                <div className="postFooter" onClick={go}>

                    <div className="postBoxGroup">
                        <span className="postBox postDdayBox">
                            마감 D - {Dday}
                        </span>
                    </div>


                    <div className="postDetail postBoxGroup">
                        <span className="postDetailText postCareer">
                            <img className="postDetailImg postCareerImg" src={require('../../assets/images/career.png')} alt="career" />
                            {career}
                        </span>
                        <span className="postDetailText postArea">
                            <img className="postDetailImg postAreaImg" src={require('../../assets/images/area.png')} alt="area" />
                            {area}
                        </span>
                    </div>

                    {stack.map((v, index) => {
                        return (
                            <span key={v + index} className="postBox postStackBox">
                                {v}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Post;
