import React, { useEffect, useState } from "react";
import cookies from "react-cookies";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header, MypagePost, Pagination } from "../../../components";
import { useNavigate } from "react-router-dom";

const Goodpost = () => {
    const navigate = useNavigate();

    const userNum = useParams().userNum; // url의 params 가져오기

    const userName = sessionStorage.getItem('userName');

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/mypage/${userNum}/goodpost`
        ).then((res) => {
            sessionStorage.setItem('goodPosts', res.data.user_gp_list);
            if (cookies.load('email')) cookies.save('goodPosts', res.data.user_gp_list);
            setPosts(res.data.gp_list_info);

            if (res.data.user_gp_list.length % 9 === 0) setMaxPage(Math.floor(res.data.user_gp_list.length / 9));
            else setMaxPage(Math.floor(res.data.user_gp_list.length / 9) + 1);
        }).catch((err) => {
            console.log(err);
        });
    }, [userNum]);

    useEffect(() => {
        navigate(`?page=${page}`);
    }, [navigate, page]);

    return (
        <>
            <Header />
            <div className="basicPage">
                <div className="mypage">
                    <div className="mypageHeader">
                        <img className="mypageImg" src={require('../../../assets/images/mypage.png')} alt="user" />
                        <div className="mypageUser">
                            <span className="userName">{userName}</span> 님
                        </div>
                    </div>
                    <div className="mypageInfoText">
                        <div className="mypageTitle">관심 채용 정보</div>
                    </div>

                    <hr className="mypageLine" />

                    <div className="mypageInfoBox">
                        <div className="mypageInfo">
                            <div className="mypageBox mypageBoxSecond">

                                {posts.length !== 0
                                    ? posts.map((v, index) => {
                                        if (page * 9 > index && (page - 1) * 9 <= index) return (
                                            <div className="goodpostBox mypagePostTool" key={v + index}>
                                                <MypagePost infoId={v.infoId} infoCpName={v.infoCpName.cpName} title={v.title} minCareer={v.minCareer} maxCareer={v.maxCareer} infoLoc={v.infoLoc} />
                                            </div>
                                        );
                                        else return null;
                                    })
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination maxPage={maxPage} page={[page, setPage]} num={9} />
            </div>
        </>
    );
};

export default Goodpost;
