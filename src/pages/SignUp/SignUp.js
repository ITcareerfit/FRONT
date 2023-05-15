import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Choose, ChooseMany } from "../../components";

const SignUp = () => {

    const [open, setOpen] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState([]);
    const id = useRef(null);
    const pwCheckImg = useRef(null);
    const userName = useRef(null);
    const birth = useRef(null);
    const phone = useRef(null);

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';
    }, []);

    const change = () => {
        document.getElementsByClassName('signUpError')[0].style.display = 'none';

        if (birth.current.value) {
            birth.current.style.fontSize = '20px';
            birth.current.style.color = 'black';
        }
    };

    const passWordCheck = () => {
        document.getElementsByClassName('signUpError')[0].style.display = 'none';

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

        if (id.current.value && email && pwCheckImg.current.src === require('../../assets/images/samePW.png') && birth.current.value && userName.current.value && phone.current.value) {

            let data = {};
            data.email = id.current.value + email;
            data.pw = document.getElementsByClassName('signUpPW')[0].value;
            data.userName = userName.current.value;
            data.birth = birth.current.value;
            data.phone = phone.current.value;
            if (position.length !== 0) data.pos = position;

            axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, data
            ).then((res) => {
                console.log(res);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            });
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
                    <input className="signUpInside signUpBorder signUpPadding signUpPW" type="password" onChange={passWordCheck} />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    비밀번호 재확인
                </div>
                <div className="signUpAnswer signUpBorder" >
                    <input className="signUpBorder signUpPadding signUpPWCheck" type="password" onChange={passWordCheck} />
                    <img className="pwCheckImg" ref={pwCheckImg} src={require('../../assets/images/pw.png')} alt="pw" />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    이름
                </div>
                <div className="signUpAnswer" onChange={change}>
                    <input className="signUpInside signUpBorder signUpPadding" type="text" ref={userName} />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    생년월일
                </div>
                <div className="signUpAnswer" onChange={change}>
                    <input className="signUpInside signUpBorder signUpPadding signUpBirth" type="date" ref={birth} />
                </div>
            </div>

            <div className="signUpGroup">
                <div className="signUpTitle">
                    전화번호
                </div>
                <div className="signUpAnswer">
                    <input className="signUpInside signUpBorder signUpPadding" type="text" placeholder="전화번호 입력 (010-0000-0000)" ref={phone} onChange={change} />
                </div>
            </div>

            <div className="signUpGroup signUpLast">
                <div className="signUpTitle">
                    관심 직무&nbsp;
                    <div className="smallBlue">(선택)</div>
                </div>
                <div className="signUpAnswer">
                    <ChooseMany className={'selectGroup selectJob'} mainClassName={'selectJob'} option={['DBA', 'ERP', 'iOS', 'QA', 'VR/AR/3D', '개발PM', '게임 서버', '게임 클라이언트', '그래픽스', '데브옵스', '데이터 엔지니어링', '로보틱스 미들웨어', '머신러닝', '모바일 게임', '블록체인', '사물인터넷(IoT)', '서버/백엔드', '시스템 소프트웨어', '시스템/네트워크', '안드로이드', '웹 퍼블리싱', '웹 풀스택', '응용 프로그램', '인공지능(AI)', '인터넷 보안', '임베디드 소프트웨어', '크로스 플랫폼', '프론트엔드']} open={[open, setOpen]} value={[position, setPosition]} />
                </div>
            </div>

            <div className="signUpError" style={{ display: 'none' }}>
                필수 입력 사항이 빠져있습니다.
            </div>

            <button className="btn signUpBtn greenBtn" onClick={signUp}>
                가입하기
            </button>
        </div>
    );
};

export default SignUp;
