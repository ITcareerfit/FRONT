import React from "react";
// import { useNavigate } from "react-router-dom";

const Post = ({ img, company, job, Dday, career, area, stack }) => {
    // const navigate = useNavigate();

    const good = (event) => {
        event.target.src === require("../../assets/images/good.png")
            ? event.target.src = require("../../assets/images/redGood.png")
            : event.target.src = require("../../assets/images/good.png");
    };

    return (
        <div className="post">
            <div className="postLeft">
                <img className="postImg" src={img} alt="companyImg" />
            </div>

            <div className="postText">
                <div className="postHeader">
                    <div className="postHeaderLeft">
                        <div className="companyName">
                            {company}
                        </div>
                        <div className="jobName">
                            {job}
                        </div>
                    </div>

                    <img className="goodBtn" src={require('../../assets/images/good.png')} alt="good" onClick={good} />
                </div>

                <div className="postBoxGroup">
                    <span className="postBox postDdayBox">
                        마감 D - {Dday}
                    </span>
                </div>

                <div className="postDetail">
                    <span className="postDetailText postCareer">
                        <img className="postDetailImg postCareerImg" src={require('../../assets/images/career.png')} alt="career" />
                        {career}
                    </span>
                    <span className="postDetailText postArea">
                        <img className="postDetailImg postAreaImg" src={require('../../assets/images/area.png')} alt="area" />
                        {area}
                    </span>
                </div>

                <div className="postBoxGroup">
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
