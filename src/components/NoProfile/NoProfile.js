import React from "react";
import { useNavigate } from "react-router-dom";

const NoProfile = () => {
    const navigate = useNavigate();
    return (
        <div className="profile noProfile">
            <div className="noProfileText">
                본인 가치관과 부합하는
                <br />
                기업 추천을 받아보세요.
            </div>
            <button className="btn bannerBtn purpleBtn" onClick={() => { navigate('/login'); }}>
                로그인 하기
            </button>
        </div>
    );
};

export default NoProfile;
