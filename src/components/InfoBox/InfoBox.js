import React from "react";
// import { useNavigate } from "react-router-dom";

const InfoBox = ({ img, job, company, jobtitle, employTitle, pay, Dday, career, loc, stack, text, htmlText }) => {
    // const navigate = useNavigate();

    return (
        <div className="infoLeft infoBoxTool">
            <div className="infoIn">
                <div className="infoDetail">
                    <img className="infoCompanyImg" src={img} alt="company" />
                    <div className="infoDetailRight">
                        <div className="infoJobName">
                            {job}
                        </div>
                        <div className="infoCompanyName">
                            {company}
                        </div>
                    </div>
                </div>

                <div className="infoBoxTool infoGrayBox">
                    <div className="infoBoxHalf">
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                직무
                            </div>
                            <div className="infoBoxAnswer">
                                {jobtitle}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                고용 형태
                            </div>
                            <div className="infoBoxAnswer">
                                {employTitle}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                연봉
                            </div>
                            <div className="infoBoxAnswer">
                                {pay}
                            </div>
                        </div>
                    </div>
                    <div className="infoBoxHalf">
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                마감일
                            </div>
                            <div className="infoBoxAnswer">
                                {Dday}일 마감
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                경력
                            </div>
                            <div className="infoBoxAnswer">
                                {career}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                위치
                            </div>
                            <div className="infoBoxAnswer">
                                {loc}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="infoPostText">
                    <div className="infoPostTitle">
                        기술 스택
                    </div>
                    <div className="infoPostAnswer"></div>
                    {stack.map((v, index) => {
                        return (
                            <span key={v + index} className="postBox postStackBox infoStack">
                                {v}
                            </span>
                        );
                    })}
                </div>

                {text.map((v, index) => {
                    return (
                        <div key={v + index} className="infoPostText">
                            <div className="infoPostTitle">
                                {v[0]}
                            </div>
                            <div className="infoPostAnswer">
                                {v[1]}
                            </div>
                        </div>
                    );
                })}

                {/* html태그를 react에 띄우기 */}
                <div className="infoPostText" dangerouslySetInnerHTML={{ __html: htmlText }} />
            </div>
        </div >
    );
};

export default InfoBox;
