import React, { useEffect, useRef } from "react";
import cookies from "react-cookies";
import axios from "axios"; //axios 사용하기 위함
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const keepLogin = useRef(null);
    const keepEmail = useRef(null);

    // delete after
    sessionStorage.setItem('userNum', 12345);
    sessionStorage.setItem('email', 'userIDuserID@site.com');
    sessionStorage.setItem('userName', '홍길동');
    sessionStorage.setItem('birth', '2001-04-05');
    sessionStorage.setItem('phone', '010-0000-0000');
    sessionStorage.setItem('pos', ['백엔드', '프론트']);
    sessionStorage.setItem('goodPosts', [11, 22, 33, 44, 55, 66]);
    sessionStorage.setItem('company1', '쿠팡');
    sessionStorage.setItem('company2', '카카오');
    sessionStorage.setItem('company3', '네이버');
    sessionStorage.setItem('company4', '베달의 민족');
    sessionStorage.setItem('company5', '한화');
    sessionStorage.setItem('profit', 1);
    sessionStorage.setItem('stable', 1);
    sessionStorage.setItem('grow', 1);
    sessionStorage.setItem('pay', 1);
    sessionStorage.setItem('scale', 1);

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        if (cookies.load('email')) { // 이메일 기억하기
            document.getElementsByClassName('email')[0].value = cookies.load('email');
            document.getElementsByClassName('emailKeep')[0].src = require("../../assets/images/keepLogin.png");
            document.getElementsByClassName('emailKeep')[0].classList.toggle('keep');
        }
    }, []);

    const check = (event) => {
        event.target.src === require("../../assets/images/noKeepLogin.png")
            ? event.target.src = require("../../assets/images/keepLogin.png")
            : event.target.src = require("../../assets/images/noKeepLogin.png");

        event.target.classList.toggle('keep');
        // 체크하면 keep이 className에 추가됨

        if (!keepLogin.current.classList.contains('keep')) {
            // cookies 내용 삭제
        }
        if (!keepEmail.current.classList.contains('keep')) cookies.remove('email');
    };

    const change = (type) => {
        // 경고 문구 없애기
        if (type === 'email') document.getElementsByClassName('emailError')[0].style.display = 'none';
        if (type === 'pw') document.getElementsByClassName('pwError')[0].style.display = 'none';
        document.getElementsByClassName('enterError')[0].style.display = 'none';
    };

    const doLogin = () => {
        const email = document.getElementsByClassName('email')[0].value;
        const pw = document.getElementsByClassName('password')[0].value;

        if (!email.includes('@')) document.getElementsByClassName('emailError')[0].style.display = 'block';
        else if (pw === '') document.getElementsByClassName('pwError')[0].style.display = 'block';
        else {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
                email: email,
                pw: pw
            }).then((res) => { //axios.post 성공하면
                if (res.data.message === 'no') document.getElementsByClassName('enterError')[0].style.display = 'block';
                else {

                    // session에 정보 저장
                    // change res data
                    sessionStorage.setItem('userNum', 12345);
                    sessionStorage.setItem('email', 'userIDuserID@site.com');
                    sessionStorage.setItem('userName', '홍길동');
                    sessionStorage.setItem('birth', '2001-04-05');
                    sessionStorage.setItem('phone', '010-0000-0000');
                    sessionStorage.setItem('pos', ['백엔드', '프론트']);
                    sessionStorage.setItem('goodPosts', [11, 22, 33, 44, 55, 66]);
                    sessionStorage.setItem('company1', '쿠팡');
                    sessionStorage.setItem('company2', '카카오');
                    sessionStorage.setItem('company3', '네이버');
                    sessionStorage.setItem('company4', '베달의 민족');
                    sessionStorage.setItem('company5', '한화');
                    sessionStorage.setItem('profit', 1);
                    sessionStorage.setItem('stable', 1);
                    sessionStorage.setItem('grow', 1);
                    sessionStorage.setItem('pay', 1);
                    sessionStorage.setItem('scale', 1);
                    const big = makeBig(sessionStorage.getItem('profit'), sessionStorage.getItem('stable'), sessionStorage.getItem('grow'), sessionStorage.getItem('pay'), sessionStorage.getItem('scale'));
                    sessionStorage.setItem('big', big);

                    // 로그인 유지하기 -> cookies
                    if (keepLogin.current.classList.contains('keep')) {

                        // change res data
                        cookies.save('userNum', 12345);
                        cookies.save('email', 'userIDuserID@site.com');
                        cookies.save('userName', '홍길동');
                        cookies.save('birth', '2001-04-05');
                        cookies.save('phone', '010-0000-0000');
                        cookies.save('pos', ['백엔드', '프론트']);
                        cookies.save('goodPosts', [11, 22, 33, 44, 55, 66]);
                        cookies.save('company1', '쿠팡');
                        cookies.save('company2', '카카오');
                        cookies.save('company3', '네이버');
                        cookies.save('company4', '베달의 민족');
                        cookies.save('company5', '한화');
                        cookies.save('profit', 1);
                        cookies.save('stable', 1);
                        cookies.save('grow', 1);
                        cookies.save('pay', 1);
                        cookies.save('scale', 1);
                        const big = makeBig(sessionStorage.getItem('profit'), sessionStorage.getItem('stable'), sessionStorage.getItem('grow'), sessionStorage.getItem('pay'), sessionStorage.getItem('scale'));
                        cookies.save('big', big);

                        navigate(-1); // 이전 페이지로 이동
                    }
                    // 이메일 기억하기
                    else if (keepEmail.current.classList.contains('keep')) cookies.save('email', email);
                };
            }).catch((err) => { //axios.post 에러나면
                console.log(err);
                document.getElementsByClassName('enterError')[0].style.display = 'block';
            });
        }
    };

    const makeBig = (profit, stable, pay, scale, grow) => {
        const valueGroup = [profit, stable, pay, scale, grow];
        const max = Math.max(...valueGroup);
        let maxGroup = [];
        for (let i = 0; i < 5; i++) {
            if (valueGroup[i] === max) maxGroup.push(i);
        }

        if (maxGroup.length === 5 || maxGroup.length === 4) maxGroup = [];
        return maxGroup;
    };

    return (
        <div className="login">
            <div className="loginText">
                IT Career Fit
            </div>
            <div className="loginBox">
                <div className="loginInputBox loginInputFirst">
                    <img className="loginImg" src={require('../../assets/images/id.png')} alt="id" />
                    <input className="loginInput email" type="email" placeholder="이메일(이메일 주소)" onChange={() => change('email')} />
                </div>
                <div className="loginInputBox loginInputSecond">
                    <img className="loginImg" src={require('../../assets/images/pw.png')} alt="pw" />
                    <input className="loginInput password" type="password" placeholder="비밀번호" onChange={() => change('pw')} />
                </div>
                <div className="loginCheck">
                    <div className="loginCheckBox keepLogin">
                        <img className="keepImg loginKeep" src={require('../../assets/images/noKeepLogin.png')} ref={keepLogin} alt="keep" onClick={check} />
                        로그인 상태 유지
                    </div>
                    <div className="loginCheckBox keepEmail">
                        <img className="keepImg emailKeep" src={require('../../assets/images/noKeepLogin.png')} ref={keepEmail} alt="keep" onClick={check} />
                        이메일 기억하기
                    </div>
                </div>

                <div className="keepLogin loginError emailError">이메일 주소를 입력해주십시오.</div>
                <div className="keepLogin loginError pwError">비밀번호를 입력해주십시오.</div>
                <div className="keepLogin loginError enterError">로그인 정보를 다시 입력해주십시오.</div>

                <button className="btn loginBtn greenBtn" onClick={doLogin}>
                    로그인
                </button>
            </div>
            <br />
            <div className="askSignUp">
                아직 회원이 아니신가요?
                <span className="goSignUp" onClick={() => navigate('/signup')}>회원가입</span>
            </div>
        </div>
    );
};

export default Login;
