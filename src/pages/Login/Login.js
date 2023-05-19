import React, { useEffect, useRef } from "react";
import cookies from "react-cookies";
import axios from "axios"; //axios 사용하기 위함
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const keepLogin = useRef(null);
    const keepEmail = useRef(null);

    // delete after
    // sessionStorage.setItem('userNum', 12345);
    // sessionStorage.setItem('email', 'userIDuserID@site.com');
    // sessionStorage.setItem('userName', '홍길동');
    // sessionStorage.setItem('birth', '2001-04-05');
    // sessionStorage.setItem('phone', '010-0000-0000');
    // sessionStorage.setItem('pos', ['백엔드', '프론트']);
    // sessionStorage.setItem('goodPosts', [11, 22, 33, 44, 55, 66]);
    // sessionStorage.setItem('company1', '쿠팡');
    // sessionStorage.setItem('company2', '카카오');
    // sessionStorage.setItem('company3', '네이버');
    // sessionStorage.setItem('company4', '베달의 민족');
    // sessionStorage.setItem('company5', '한화');
    // sessionStorage.setItem('profit', 1);
    // sessionStorage.setItem('stable', 1);
    // sessionStorage.setItem('grow', 1);
    // sessionStorage.setItem('pay', 1);
    // sessionStorage.setItem('scale', 1);

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
                    sessionStorage.setItem('userNum', res.data.user.userNum);
                    sessionStorage.setItem('email', res.data.user.email);
                    sessionStorage.setItem('userName', res.data.user.userName);
                    sessionStorage.setItem('birth', res.data.user.birth);
                    sessionStorage.setItem('phone', res.data.user.phone);
                    sessionStorage.setItem('pos', res.data.user.pos);
                    sessionStorage.setItem('goodPosts', res.data.user.goodPosts);
                    sessionStorage.setItem('company1', JSON.stringify(res.data.user.company1));
                    sessionStorage.setItem('company2', JSON.stringify(res.data.user.company2));
                    sessionStorage.setItem('company3', JSON.stringify(res.data.user.company3));
                    sessionStorage.setItem('company4', JSON.stringify(res.data.user.company4));
                    sessionStorage.setItem('company5', JSON.stringify(res.data.user.company5));
                    sessionStorage.setItem('profit', res.data.user.profit);
                    sessionStorage.setItem('stable', res.data.user.stable);
                    sessionStorage.setItem('grow', res.data.user.grow);
                    sessionStorage.setItem('pay', res.data.user.pay);
                    sessionStorage.setItem('scale', res.data.user.scale);
                    const big = makeBig(sessionStorage.getItem('profit'), sessionStorage.getItem('stable'), sessionStorage.getItem('grow'), sessionStorage.getItem('pay'), sessionStorage.getItem('scale'));
                    sessionStorage.setItem('big', big);

                    // 로그인 유지하기 -> cookies
                    if (keepLogin.current.classList.contains('keep')) {

                        cookies.save('userNum', res.data.user.userNum);
                        cookies.save('email', res.data.user.email);
                        cookies.save('userName', res.data.user.userName);
                        cookies.save('birth', res.data.user.birth);
                        cookies.save('phone', res.data.user.phone);
                        cookies.save('pos', res.data.user.pos);
                        cookies.save('goodPosts', res.data.user.goodPosts);
                        cookies.save('company1', JSON.stringify(res.data.user.company1));
                        cookies.save('company2', JSON.stringify(res.data.user.company2));
                        cookies.save('company3', JSON.stringify(res.data.user.company3));
                        cookies.save('company4', JSON.stringify(res.data.user.company4));
                        cookies.save('company5', JSON.stringify(res.data.user.company5));
                        cookies.save('profit', res.data.user.profit);
                        cookies.save('stable', res.data.user.stable);
                        cookies.save('grow', res.data.user.grow);
                        cookies.save('pay', res.data.user.pay);
                        cookies.save('scale', res.data.user.scale);
                        const big = makeBig(sessionStorage.getItem('profit'), sessionStorage.getItem('stable'), sessionStorage.getItem('grow'), sessionStorage.getItem('pay'), sessionStorage.getItem('scale'));
                        cookies.save('big', big);
                    }
                    // 이메일 기억하기
                    else if (keepEmail.current.classList.contains('keep')) cookies.save('email', email);
                    navigate(-1); // 이전 페이지로 이동
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
