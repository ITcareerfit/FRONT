import React from "react";
import { useNavigate } from "react-router-dom";

const MypageCompany = ({ id, img, name, info, title, open }) => {
    const navigate = useNavigate();

    const check = () => {
        if (open[0] !== '') {
            //열려있는 창 닫기
            document.getElementById(open[0]).style.display = 'none';
            open[1]('');
            if (open[0] !== id) {
                // 다른 창 열기
                open[1](id);
                document.getElementById(id).style.display = 'block';
            }
        }
        else {
            // 창 열기
            open[1](id);
            document.getElementById(id).style.display = 'block';
        }
    };

    return (
        <div className="mypageCompany">
            <img className="mypageCompanyImg" src={img} alt="companyLogo" />

            <div className="mypageCompanyName">{name}</div>

            <div className="mypageCompanyLink" onClick={check}>
                채용정보
                <img className="mypageCompanySelect" src={require('../../assets/images/blueSelect.png')} alt="select" />
            </div>

            <div className="mypageCompanyInfo" id={id}>
                {info.map((v, index) => {
                    return (
                        <div className="mypageCompanyInfoTitle" key={v + index} onClick={() => navigate(`/info/${v}`)}>
                            {title[index]}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MypageCompany;
