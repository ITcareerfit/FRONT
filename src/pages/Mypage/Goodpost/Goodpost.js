import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import { Header, MypagePost, Pagination } from "../../../components";
import { useNavigate } from "react-router-dom";

const Goodpost = () => {
    const navigate = useNavigate();

    // const userNum = useParams().userNum; // url의 params 가져오기

    const userName = sessionStorage.getItem('userName');
    // const goodPosts = sessionStorage.getItem('goodPosts').split(','); // , 기준으로 나누기

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        // userNum로 세부정보 받기 -> axios

        // axios get 최대 페이지 개수 받아오기
        setMaxPage(3);
        // axios.get(`${process.env.REACT_APP_SERVER_URL}/search`
        // ).then((res) => {
        //     console.log(res);
        //     setPosts(res);
        // }).catch((err) => {
        //     console.log(err);
        // });
    }, []);

    useEffect(() => {
        // axios get 으로 goodPosts 세부 정보 받아오기 -> 현재는 ID만 존재

        if (page === 1) setPosts([
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'Frontend Software Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            }
        ]);
        if (page === 2) setPosts([
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: '백엔드개발자',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            }
        ]);
        if (page === 3) setPosts([
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            },
            {
                infoId: 1,
                infoCpName: '카카오',
                title: 'AI Engineers',
                minCareer: 2,
                maxCareer: 7,
                infoLoc: '서울시 성동구'
            }
        ]);

        // axios.get(`${process.env.REACT_APP_SERVER_URL}/search`
        // ).then((res) => {
        //     console.log(res);
        //     setPosts(res);
        // }).catch((err) => {
        //     console.log(err);
        // });

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

                                {posts
                                    ? posts.map((v, index) => {
                                        // company, title, career, area change
                                        return (
                                            <div className="goodpostBox mypagePostTool" key={v + index}>
                                                <MypagePost infoId={v.infoId} infoCpName={v.infoCpName} title={v.title} minCareer={v.minCareer} maxCareer={v.maxCareer} infoLoc={v.infoLoc} />
                                            </div>
                                        );
                                    })
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination maxPage={maxPage} page={[page, setPage]} />
            </div>
        </>
    );
};

export default Goodpost;
