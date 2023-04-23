import React, { useEffect, useRef } from "react";
import cookies from "react-cookies";
import axios from "axios"; //axios 사용하기 위함
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const keepLogin = useRef(null);
    const keepEmail = useRef(null);

    // delete after
    sessionStorage.setItem('userPK', 12345);
    sessionStorage.setItem('id', 'userIDuserID@site.com');
    sessionStorage.setItem('name', '홍길동');
    sessionStorage.setItem('birth', [2001, 11, 18]);
    sessionStorage.setItem('call', '010-0000-0000');
    sessionStorage.setItem('position', ['백엔드']);
    sessionStorage.setItem('goodPosts', [11, 22, 33]);
    sessionStorage.setItem('company1', 11);
    sessionStorage.setItem('company2', 22);
    sessionStorage.setItem('company3', 33);
    sessionStorage.setItem('company4', 44);
    sessionStorage.setItem('company5', 55);

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
            axios.post('/api/login/test', {
                email: email,
                pw: pw
            }).then((res) => { //axios.post 성공하면
                console.log(res);

                // session에 정보 저장
                // change res data
                sessionStorage.setItem('userPK', 12345);
                sessionStorage.setItem('id', 'userIDuserID@site.com');
                sessionStorage.setItem('name', '홍길동');
                sessionStorage.setItem('birth', [2001, 11, 18]);
                sessionStorage.setItem('call', '010-0000-0000');
                sessionStorage.setItem('position', ['백엔드']);
                sessionStorage.setItem('goodPosts', [1, 2, 3]);
                sessionStorage.setItem('company1', 11);
                sessionStorage.setItem('company2', 22);
                sessionStorage.setItem('company3', 33);
                sessionStorage.setItem('company4', 44);
                sessionStorage.setItem('company5', 55);

                // 로그인 유지하기
                if (keepLogin.current.classList.contains('keep')) {
                    // cookies에 정보 저장
                    // change res data
                    cookies.save('userPK', 12345);
                    cookies.save('id', 'userIDuserID@site.com');
                    cookies.save('name', '홍길동');
                    cookies.save('birth', [2001, 11, 18]);
                    cookies.save('call', '010-0000-0000');
                    cookies.save('position', ['백엔드']);
                    cookies.save('goodPosts', [1, 2, 3]);
                    cookies.save('company1', 11);
                    cookies.save('company2', 22);
                    cookies.save('company3', 33);
                    cookies.save('company4', 44);
                    cookies.save('company5', 55);
                }
                // 이메일 기억하기
                else if (keepEmail.current.classList.contains('keep')) cookies.save('email', email);

                navigate(-1); // 이전 페이지로 이동

            }).catch((err) => { //axios.post 에러나면
                console.log(err);
                document.getElementsByClassName('enterError')[0].style.display = 'block';
            });
        }
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
                <button className="btn signupBtn whiteBtn" onClick={() => navigate('/signup')}>
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Login;
