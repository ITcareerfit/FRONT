import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks";

const Header = () => {
    const navigate = useNavigate();

    const [userPK, setUserPK] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
        setUserPK(sessionStorage.getItem('userPK'));
        setId(sessionStorage.getItem('id'));
    }, []);

    const value = () => {
        // 5가지 가치 처리방법 어떻게? 로그인때 전달? -> change
        if (sessionStorage.getItem('profit')) navigate('/value');
        else navigate('/valueMain');
    };

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
                        <span className="headerSearchText headerValues" onClick={() => navigate('/value')}>
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
                <div className="headerBtnBox">

                    {sessionStorage.getItem('userPK')
                        ? <div className="headerUserBox" onClick={userPopup}>
                            <img className="headerUserImg" src={require('../../assets/images/user.png')} alt="headerUser" />
                            <span className="headerUser">
                                {id}
                                <div className="headerPopup" style={{ display: 'none' }}>
                                    <div className="headerPopupList" onClick={() => navigate(`/mypage/${userPK}`)}>
                                        마이페이지
                                    </div>
                                    <div className="headerPopupList" onClick={value}>
                                        가치관 확인
                                    </div>
                                    <div className="headerPopupList" onClick={useLogout}>
                                        로그아웃
                                    </div>
                                </div>
                            </span>
                        </div>
                        : <button className="btn headerBtn blackBtn" onClick={() => navigate('/login')}>
                            Log In
                        </button>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
