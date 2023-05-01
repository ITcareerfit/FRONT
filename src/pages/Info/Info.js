import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header, InfoBox, InfoApply } from "../../components";

const Info = () => {
    const infoId = useParams().infoId;

    useState([]); // delete after
    // const [info, setInfo] = useState([]);

    axios.get(`${process.env.REACT_APP_SERVER_URL}/info?infoId=${infoId}`
    ).then((res) => {
        console.log(res.data);
        // setInfo(res.data);

        // cpImg={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} title={'FrontEnd Software Engineer'} infoCpName={'레몬베이스'} infoPos={'프론트엔드'} type={'정규직'} minPay={'3000'} maxPay={'3000'} deadline={4} minCareer={2} maxCareer={7} infoLoc={'서울시 성동구 0000'} infoTech={['프론트 엔드', 'TypeScript', 'JavaScript']} text={[['업무 소개', '-업무 소개'], ['자격 조건', '-자격 조건']]} content={'<div>Hello</div>'}
    }).catch((err) => {
        console.log(err);
    });

    return (
        <>
            <Header />
            <div className="infoPage">
                <div className="basicPage">
                    <div className="infoBox">
                        {/* <InfoBox cpImg={info.cpImg} title={info.title} infoCpName={info.infoCpName} infoPos={info.infoPos} type={info.type} minPay={info.minPay} maxPay={info.maxPay} deadline={info.deadline} minCareer={info.minCareer} maxCareer={info.maxCareer} infoLoc={info.infoLoc} infoTech={info.infoTech} text={[['업무 소개', '-업무 소개'], ['자격 조건', '-자격 조건']]} content={info.content} /> */}
                        <InfoBox cpImg={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} title={'FrontEnd Software Engineer'} infoCpName={'레몬베이스'} infoPos={'프론트엔드'} type={'정규직'} minPay={'3000'} maxPay={'3000'} deadline={4} minCareer={2} maxCareer={7} infoLoc={'서울시 성동구 0000'} infoTech={['프론트 엔드', 'TypeScript', 'JavaScript']} text={[['업무 소개', '-업무 소개'], ['자격 조건', '-자격 조건']]} content={'<div>Hello</div>'} />

                        {/* <InfoApply cpImg={info.cpImg} title={info.title} infoCpName={info.infoCpName} /> */}
                        <InfoApply cpImg={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} title={'Frontend Software Engineer'} infoCpName={'레몬베이스'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
