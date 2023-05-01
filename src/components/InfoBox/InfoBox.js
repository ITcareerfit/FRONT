import React from "react";

const InfoBox = ({ cpImg, title, infoCpName, infoPos, type, minPay, maxPay, deadline, minCareer, maxCareer, infoLoc, infoTech, text, content }) => {

    return (
        <div className="infoLeft infoBoxTool">
            <div className="infoIn">
                <div className="infoDetail">
                    <img className="infoCompanyImg" src={cpImg} alt="company" />
                    <div className="infoDetailRight">
                        <div className="infoJobName">
                            {title}
                        </div>
                        <div className="infoCompanyName">
                            {infoCpName}
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
                                {infoPos}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                고용 형태
                            </div>
                            <div className="infoBoxAnswer">
                                {type}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                연봉
                            </div>
                            <div className="infoBoxAnswer">
                                {minPay}{maxPay}
                            </div>
                        </div>
                    </div>
                    <div className="infoBoxHalf">
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                마감일
                            </div>
                            <div className="infoBoxAnswer">
                                {deadline}일 마감
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                경력
                            </div>
                            <div className="infoBoxAnswer">
                                {minCareer}{maxCareer}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                위치
                            </div>
                            <div className="infoBoxAnswer">
                                {infoLoc}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="infoPostText">
                    <div className="infoPostTitle">
                        기술 스택
                    </div>
                    <div className="infoPostAnswer"></div>
                    {infoTech
                        ? infoTech.map((v, index) => {
                            return (
                                <span key={v + index} className="postBox postStackBox infoStack">
                                    {v}
                                </span>
                            );
                        })
                        : null}
                </div>

                {text
                    ? text.map((v, index) => {
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
                    })
                    : null}

                {/* html태그를 react에 띄우기 */}
                <div className="infoPostText" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div >
    );
};

export default InfoBox;
