import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="headerBox">
                <div className="headerLeft">
                    <span className="headerLogo">IT Career Fit</span>

                    <span className="headerSearch">
                        <span className="headerSearchText headerValues" onClick={() => { navigate('/value'); }}>
                            '나'와 기업 가치관
                        </span>
                        <img className="headerSearchImg" src={require('../../assets/images/search.png')} alt="search" />
                        <span className="headerSearchText headerPost" onClick={() => { navigate('/search'); }}>
                            채용 공고
                        </span>
                        <span className="headerSearchText headerTrend" onClick={() => { navigate('/trend'); }}>
                            2023 IT 트렌드
                        </span>
                    </span>

                </div>
                <div className="headerBtnBox">

                    {sessionStorage.getItem('userPK') ?
                        <>
                            <img className="headerUserImg" src={require('../../assets/images/user.png')} alt="headerUser" />
                            <span className="headerUser">userIduserID@site.com</span>
                            <button className="btn headerBtn blackBtn">
                                Log Out
                            </button>
                        </>
                        : <button className="btn headerBtn blackBtn" onClick={() => { navigate('/login'); }}>
                            Log In
                        </button>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
