import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const keep = (event) => {
        event.target.src === require("../../assets/images/noKeepLogin.png")
            ? event.target.src = require("../../assets/images/keepLogin.png")
            : event.target.src = require("../../assets/images/noKeepLogin.png");

        event.target.classList.toggle('keep');
        // 체크하면 keep이 className에 추가됨
    };

    return (
        <div className="login">
            <div className="loginText">
                IT Career Fit
            </div>
            <div className="loginBox">
                <div className="loginInputBox loginInputFirst">
                    <img className="loginImg" src={require('../../assets/images/id.png')} alt="id" />
                    <input className="loginInput email" type="email" placeholder="이메일(이메일 주소)" />
                </div>
                <div className="loginInputBox">
                    <img className="loginImg" src={require('../../assets/images/pw.png')} alt="pw" />
                    <input className="loginInput password" type="password" placeholder="비밀번호" />
                </div>
                <div className="keepLogin">
                    <img className="keepLoginImg" src={require('../../assets/images/noKeepLogin.png')} alt="keep" onClick={keep} />
                    로그인 상태 유지
                </div>
                <button className="btn loginBtn greenBtn">
                    로그인
                </button>
            </div>
            <br />
            <div className="askSignUp">
                아직 회원이 아니신가요?
                <button className="btn signupBtn whiteBtn" onClick={() => { navigate('/signup'); }}>
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Login;
