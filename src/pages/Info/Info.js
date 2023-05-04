import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header, InfoBox, InfoApply } from "../../components";

const Info = () => {
    const infoId = useParams().infoId;

    useState([]); // delete after
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/info?infoId=${infoId}`
        ).then((res) => {
            setInfo(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [infoId]);

    return (
        <>
            <Header />
            <div className="infoPage">
                <div className="basicPage">
                    <div className="infoBox">
                        {info.length !== 0
                            ? <>
                                <InfoBox cpImg={info.infoCpName.cpImg} title={info.title} infoCpName={info.infoCpName.cpName} infoPos={info.infoPosList} type={info.type} minPay={info.minPay} maxPay={info.maxPay} deadline={info.dday} minCareer={info.minCareer} maxCareer={info.maxCareer} infoLoc={info.infoLoc} infoTech={info.infoTechList} content={info.content} />

                                <InfoApply cpImg={info.infoCpName.cpImg} title={info.title} infoCpName={info.infoCpName.cpName} url={info.infoUrl} />
                            </>
                            : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
