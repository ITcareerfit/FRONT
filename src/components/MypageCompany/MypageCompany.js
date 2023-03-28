import React from "react";
// import { useNavigate } from "react-router-dom";

const MypageCompany = ({ img, name }) => {
    // const navigate = useNavigate();

    return (
        <div className="mypageCompany">
            <img className="mypageCompanyImg" src={img} alt="companyLogo" />

            <div className="mypageCompanyName">{name}</div>

            <div className="mypageCompanyLink">
                채용정보
                <img className="mypageCompanySelect" src={require('../../assets/images/blueSelect.png')} alt="select" />
            </div>
        </div>
    );
};

export default MypageCompany;
