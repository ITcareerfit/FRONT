import React, { useRef, useState } from "react";
import { Choose, ChooseMany } from "../../components";

const SignUp = () => {

    const [open, setOpen] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState([]);
    const id = useRef(null);
    const pwCheckImg = useRef(null);
    const name = useRef(null);
    const birth1 = useRef(null);
    const birth2 = useRef(null);
    const birth3 = useRef(null);
    const call = useRef(null);

    const change = () => {
        document.getElementsByClassName('signUpError')[0].style.display = 'none';
        document.getElementsByClassName('signUpErrorBirth')[0].style.display = 'none';
    };

    const passWordCheck = () => {
        document.getElementsByClassName('signUpError')[0].style.display = 'none';
        document.getElementsByClassName('signUpErrorBirth')[0].style.display = 'none';

        const pw = document.getElementsByClassName('signUpPW')[0].value;
        const pwCheck = document.getElementsByClassName('signUpPWCheck')[0].value;

        if (pw !== '' || pwCheck !== '') {
            if (pw === pwCheck) {
                pwCheckImg.current.src = require('../../assets/images/samePW.png');
            }
            else {
                pwCheckImg.current.src = require('../../assets/images/pw.png');
            }
        }
    };

    const signUp = () => {
        const now = new Date();

        if (id.current.value && email && pwCheckImg.current.src === require('../../assets/images/samePW.png') && name.current.value && call.current.value) {
            if (birth1.current.value >= 1900 && birth1.current.value <= now.getFullYear() && birth2.current.value >= 1 && birth2.current.value <= 12 && birth3.current.value >= 1 && birth3.current.value <= 31) {
                // getFullYear로 현재 년도 가져오기

                // axios 소통하기 (position은 빈배열 혹은 직무가 들어있음)

            }
            else document.getElementsByClassName('signUpErrorBirth')[0].style.display = 'block';
        }
        else document.getElementsByClassName('signUpError')[0].style.display = 'block';
    };

    return (
        <div className="signUpPage">
            <div className="signUpHeader">
                <span className="signUpLogo">IT Career Fit</span> &nbsp;&nbsp;&nbsp;회원가입
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    아이디(이메일)
                </div>
                <div className="signUpAnswer" onChange={change}>
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputLeft" type="text" ref={id} />

                    <Choose className={'selectGroup selectEmail signUpInputRight'} mainClassName={'selectEmail'} option={['@naver.com', '@kakao.com', '@gmail.com']} open={[open, setOpen]} value={[email, setEmail]} />
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
                    <img className="pwCheckImg" ref={pwCheckImg} src={require('../../assets/images/pw.png')} alt="pw" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    이름
                </div>
                <div className="signUpAnswer" onChange={change}>
                    <input className="signUpInside signUpBorder signUpPadding" type="text" ref={name} />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    생년월일
                </div>
                <div className="signUpAnswer" onChange={change}>
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputLeft" type="text" placeholder="년(4자)" ref={birth1} />
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputMiddle" type="text" placeholder="월" ref={birth2} />
                    <input className="signUpBorder signUpPadding signUpSmall signUpInputRight" type="text" placeholder="일" ref={birth3} />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    전화번호
                </div>
                <div className="signUpAnswer">
                    <input className="signUpInside signUpBorder signUpPadding" type="text" placeholder="전화번호 입력 (010-0000-0000)" ref={call} onChange={change} />
                </div>
            </div>

            <div className="signUpGroup signUpLast">
                <div className="signUpTitle">
                    관심 직무&nbsp;
                    <div className="smallBlue">(선택)</div>
                </div>
                <div className="signUpAnswer">
                    <ChooseMany className={'selectGroup selectJob'} mainClassName={'selectJob'} option={['프론트엔드', '백엔드', 'AI', 'QA 엔지니어', '웹 기획자']} open={[open, setOpen]} value={[position, setPosition]} />
                </div>
            </div>

            <div className="signUpError" style={{ display: 'none' }}>
                필수 입력 사항이 빠져있습니다.
            </div>
            <div className="signUpError signUpErrorBirth" style={{ display: 'none' }}>
                생년월일 정보를 확인해주십시오.
            </div>

            <button className="btn signUpBtn greenBtn" onClick={signUp}>
                가입하기
            </button>
        </div>
    );
};

export default SignUp;
