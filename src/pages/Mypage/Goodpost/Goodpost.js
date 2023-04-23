import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Header, MypagePost } from "../../../components";

const Goodpost = () => {
    // const userPK = useParams().userPK; // url의 params 가져오기

    const name = sessionStorage.getItem('name');
    const goodPosts = sessionStorage.getItem('goodPosts').split(','); // , 기준으로 나누기

    useEffect(() => {
        // userPK로 세부정보 받기 -> axios
    }, []);

    return (
        <>
            <Header />
            <div className="basicPage">
                <div className="mypage">
                    <div className="mypageHeader">
                        <img className="mypageImg" src={require('../../../assets/images/mypage.png')} alt="user" />
                        <div className="mypageUser">
                            <span className="userName">{name}</span> 님
                        </div>
                    </div>
                    <div className="mypageInfoText">
                        <div className="mypageTitle">관심 채용 정보</div>
                    </div>

                    <hr className="mypageLine" />

                    <div className="mypageInfoBox">
                        <div className="mypageInfo">
                            <div className="mypageBox mypageBoxSecond">

                                {goodPosts.map((v, index) => {
                                    // company, title, career, area change
                                    return (
                                        <div className="goodpostBox mypagePostTool" key={v + index}>
                                            <MypagePost pk={v} company={'카카오'} title={'Frontend Software Engineers'} career={'2년~7년'} area={'서울시 성동구'} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Goodpost;
