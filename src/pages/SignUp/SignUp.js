import React, { useState } from "react";
import { Choose } from "../../components";

const SignUp = () => {

    const [open, setOpen] = useState('');

    const passWordCheck = () => {
        const pw = document.getElementsByClassName('signUpPW')[0].value;
        const pwCheck = document.getElementsByClassName('signUpPWCheck')[0].value;

        if (pw !== '' || pwCheck !== '') {
            if (pw === pwCheck) {
                document.getElementsByClassName('pwCheckImg')[0].src = require('../../assets/images/samePW.png');
            }
            else {
                document.getElementsByClassName('pwCheckImg')[0].src = require('../../assets/images/pw.png');
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
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputLeft" type="text" />

                    <Choose className={'selectGroup selectEmail signUpInputRight'} mainClassName={'selectEmail'} option={['@naver.com', '@kakao.com', '@gmail.com']} open={[open, setOpen]} />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    비밀번호
                </div>
                <div className="signUpAnswer">
                    <input className="signUpPW signUpInside signUpBorder signUpPadding" type="password" onChange={passWordCheck} />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    비밀번호 재확인
                </div>
                <div className="signUpAnswer signUpBorder" >
                    <input className="signUpPWCheck signUpBorder signUpPadding" type="password" onChange={passWordCheck} />
                    <img className="pwCheckImg" src={require('../../assets/images/pw.png')} alt="pw" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    이름
                </div>
                <div className="signUpAnswer">
                    <input className="signUpInside signUpBorder signUpPadding" type="text" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    생년월일
                </div>
                <div className="signUpAnswer">
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputLeft" type="text" placeholder="년(4자)" />
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputMiddle" type="text" placeholder="월" />
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputRight" type="text" placeholder="일" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    전화번호
                </div>
                <div className="signUpAnswer">
                    <input className="signUpInside signUpBorder signUpPadding" type="text" placeholder="전화번호 입력" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    관심 직무&nbsp;
                    <div className="smallBlue">(선택)</div>
                </div>
                <div className="signUpAnswer">
                    <Choose className={'selectGroup selectJob'} mainClassName={'selectJob'} option={['프론트엔드', '백엔드', 'AI']} open={[open, setOpen]} />
                </div>
            </div>

            <button className="btn signUpBtn greenBtn">
                가입하기
            </button>
        </div>
    );
};

export default SignUp;
