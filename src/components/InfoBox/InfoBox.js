import React from "react";

const InfoBox = ({ cpImg, title, infoCpName, infoPos, type, minPay, maxPay, deadline, minCareer, maxCareer, infoLoc, infoTech, content }) => {

    return (
        <div className="infoLeft infoBoxTool">
            <div className="infoIn">
                <div className="infoDetail">
                    {cpImg
                        ? <img className="infoCompanyImg" src={cpImg} alt="companyImg" />
                        : <img className="infoCompanyImg" src={require('../../assets/images/logo.png')} alt="companyImg" />}
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
                                {infoPos
                                    ? infoPos.map((v, index) => index !== infoPos.length - 1 ? v + ', ' : v) : null}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                고용 형태
                            </div>
                            <div className="infoBoxAnswer">
                                {type === 1 ? '정규직' : '계약직'}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                연봉
                            </div>
                            <div className="infoBoxAnswer">
                                {minPay === -1 ? '면접 후 결정' : `${minPay} ~ ${maxPay}`}
                            </div>
                        </div>
                    </div>
                    <div className="infoBoxHalf">
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                마감일
                            </div>
                            <div className="infoBoxAnswer infoBoxDday">
                                {deadline ? `D-${deadline}` : '상시 모집'}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                경력
                            </div>
                            <div className="infoBoxAnswer">
                                {minCareer === -1
                                    ? '경력 무관'
                                    : maxCareer === 0
                                        ? '신입'
                                        : `${minCareer}년 ~ ${maxCareer}년`}
                            </div>
                        </div>
                        <div className="infoText">
                            <div className="infoBoxTitle">
                                위치
                            </div>
                            <div className="infoBoxAnswer">
                                {infoLoc ? infoLoc : ' -'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="infoPostText">
                    {infoTech.length !== 1 || infoTech[0] !== '' // 없으면 [''] 상태
                        ? <>
                            <div className="infoPostTitle">
                                기술 스택
                            </div>
                            <div className="infoPostAnswer"></div>
                            {infoTech.map((v, index) => {
                                return (
                                    <span key={v + index} className="postBox postStackBox infoStack">
                                        {v}
                                    </span>
                                );
                            })}</>
                        : null}
                </div>

                {/* html태그를 react에 띄우기 */}
                <div className="infoPostText" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div >
    );
};

export default InfoBox;
