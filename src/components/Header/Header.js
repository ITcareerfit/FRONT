import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useValueNav, useLogout } from "../../hooks";

const Header = () => {
    const navigate = useNavigate();
    const value = useValueNav;

    const [userNum, setUserNum] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        setUserNum(sessionStorage.getItem('userNum'));
        setEmail(sessionStorage.getItem('email'));
    }, []);

    const userPopup = () => {
        document.getElementsByClassName('headerPopup')[0].style.display === 'none'
            ? document.getElementsByClassName('headerPopup')[0].style.display = 'block'
            : document.getElementsByClassName('headerPopup')[0].style.display = 'none';
    };

    return (
        <header className="header">
            <div className="headerBox">
                <div className="headerLeft">
                    <span className="headerLogo" onClick={() => navigate('/main')}>IT Career Fit</span>

                    <span className="headerSearch">
                        <span className="headerSearchText headerValues" onClick={() => value(navigate)}>
                            '나'와 기업 가치관
                        </span>
                        <img className="headerSearchImg" src={require('../../assets/images/search.png')} alt="search" />
                        <span className="headerSearchText headerPost" onClick={() => navigate('/search')}>
                            채용 공고
                        </span>
                        <span className="headerSearchText headerTrend" onClick={() => navigate('/trend')}>
                            2023 IT 트렌드
                        </span>
                    </span>

                </div>
                <div className="headerRight">

                    {sessionStorage.getItem('userNum')
                        ? <div className="headerUserBox" onClick={userPopup}>
                            <img className="headerUserImg" src={require('../../assets/images/user.png')} alt="headerUser" />
                            <span className="headerUser">
                                {email}
                                <div className="headerPopup" style={{ display: 'none' }}>
                                    <img className="headerPopupImg" src={require('../../assets/images/triangle.png')} alt="triangle" />
                                    <div className="headerPopupList headerPopupListFirst" onClick={() => navigate(`/mypage/${userNum}`)}>
                                        마이페이지
                                    </div>
                                    <div className="headerPopupList" onClick={() => value(navigate)}>
                                        가치관 확인
                                    </div>
                                    <div className="headerPopupList" onClick={useLogout}>
                                        로그아웃
                                    </div>
                                </div>
                            </span>
                        </div>
                        : <div className="headerNav">
                            <span className="headerNavMargin headerNavs" onClick={() => navigate('/login')}>Log In</span>
                            <span className="headerNavs" onClick={() => navigate('/signup')}>Sign Up</span>
                        </div>
                    }
                </div>
            </div>
        </header >
    );
};

export default Header;
