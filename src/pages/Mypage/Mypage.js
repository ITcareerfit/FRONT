import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Header, MypageCompany, MypagePost } from "../../components";

const Mypage = () => {
    // const navigate = useNavigate();

    const birth = [2001, 11, 23];

    const [userName, setUserName] = useState('사용자');

    sessionStorage.clear();
    sessionStorage.setItem('userPK', 'known@user.com');

    useEffect(() => {
        if (sessionStorage.getItem('userPK')) {
            setUserName(sessionStorage.getItem('userPK'));
        }
    }, []);

    return (
        <>
            <Header />
            <div className="basicPage">
                <div className="mypage">
                    <div className="mypageHeader">
                        <img className="mypageImg" src={require('../../assets/images/mypage.png')} alt="user" />
                        <div className="mypageUser">
                            <span className="userName">{userName}</span> 님
                        </div>
                    </div>
                    <div className="mypageInfoText">
                        <div className="mypageTitle">추천 기업</div>
                        <div className="mypageTitle">관심 채용 정보</div>
                        <div className="mypageTitle mypageTitleUserEdit">회원정보</div>
                    </div>

                    <hr className="mypageLine" />

                    <div className="mypageInfoBox">
                        <div className="mypageInfo">
                            <span className="mypageValue">
                                나의 가치관이 궁금하신가요?&nbsp;&nbsp;
                            </span>
                            <span className="goLink goLinkValue">가치관확인</span>

                            <div className="mypageBox">
                                <MypageCompany img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} />

                                <MypageCompany img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} />

                                <MypageCompany img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} />

                                <MypageCompany img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} />

                                <MypageCompany img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} />
                            </div>
                        </div>

                        <div className="mypageInfo">
                            <span className="goLink">+ 더보기</span>

                            <div className="mypageBox">
                                <MypagePost company={'카카오'} title={'Frontend Software Engineer'} career={'2년~7년'} area={'서울시 성동구'} />

                                <MypagePost company={'카카오'} title={'Frontend Software Engineer'} career={'2년~7년'} area={'서울시 성동구'} />

                                <MypagePost company={'카카오'} title={'Frontend Software Engineer'} career={'2년~7년'} area={'서울시 성동구'} />
                            </div>
                        </div>

                        <div className="mypageInfo mypageInfoUserEdit">
                            <span className="goLink">수정하기</span>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">이름</div>
                                <input className="mypageEditInput signUpBorder mypagePadding" type="text" placeholder="홍길동" />
                            </div>

                            <div className="mypageEditBox mypageEditBirthBox">
                                <div className="mypageEditTitle">생년월일</div>
                                <div className="mypageEditInput mypageEditInputBirth">
                                    <div className="signUpBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[0]}</div>
                                        년</div>
                                    <div className="signUpBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[1]}</div>
                                        월</div>
                                    <div className="signUpBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[2]}</div>
                                        일</div>
                                </div>
                            </div>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">전화번호</div>
                                <input className="mypageEditInput signUpBorder mypagePadding" type="text" placeholder="010-0000-0000" />
                            </div>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">관심 직무</div>
                                <input className="mypageEditInput signUpBorder mypagePadding" type="text" placeholder="백엔드 개발자" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mypage;
