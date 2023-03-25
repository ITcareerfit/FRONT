import React from "react";
// import { useNavigate } from "react-router-dom";
import { Header, InfoBox, InfoApply } from "../../components";

const Info = () => {
    // const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="infoPage">
                <div className="basicPage">
                    <div className="infoBox">
                        <InfoBox img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} job={'FrontEnd Software Engineer'} company={'레몬베이스'} jobtitle={'프론트엔드'} employTitle={'정규직'} pay={'3000이상'} Dday={4} career={'2년~7년'} loc={'서울시 성동구 0000'} stack={['프론트 엔드', 'TypeScript', 'JavaScript']} text={[['업무 소개', '-업무 소개'], ['자격 조건', '-자격 조건']]} />

                        <InfoApply img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} job={'Frontend Software Engineer'} company={'레몬베이스'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
