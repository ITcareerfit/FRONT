import React from "react";

const SignUp = () => {

    const passWordCheck = () => {
        const pw = document.getElementsByClassName('signUpPW')[0].value;
        const pwCheck = document.getElementsByClassName('signUpPWCheck')[0].value;

        if (pw!=='' || pwCheck!=='') {
            if (pw === pwCheck) {
                document.getElementsByClassName('pwCheck')[0].src = require('../../assets/images/samePW.png');
            }
            else {
                document.getElementsByClassName('pwCheck')[0].src = require('../../assets/images/pw.png');
            }
        }
    };

    return (
        <div className="signUp">
            <div className="signUpHeader">
                <span className="signUpLogo">IT Career Fit</span> &nbsp;&nbsp;&nbsp;회원가입
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    아이디(이메일)
                </div>
                <div className="signUpAnswer">
                    <input className="signUpId" type="text" />
                    <input className="signUpId" type="text" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    비밀번호
                </div>
                <input className="signUpAnswer signUpPW" type="password" onChange={passWordCheck} />
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    비밀번호 재확인
                </div>
                <div className="signUpAnswer" >
                    <input className="signUpPWCheck" type="password" onChange={passWordCheck} />
                    <img className="pwCheck" src={require('../../assets/images/pw.png')} alt="pw" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    이름
                </div>
                <input className="signUpAnswer" type="text" />
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    생년월일
                </div>
                <div className="signUpAnswer">
                    <input className="signUpBirth signUpInput" type="text" placeholder="년(4자)" />
                    <input className="signUpBirth" type="text" />
                    <input className="signUpBirth signUpInput" type="text" placeholder="일" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    전화번호
                </div>
                <input className="signUpAnswer signUpInput" type="text" placeholder="전화번호 입력" />
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    관심 포지션 &nbsp;
                    <div className="smallBlue">(선택)</div>
                </div>
                <input className="signUpAnswer" type="password" />
            </div>
        </div>
    );
};

export default SignUp;
