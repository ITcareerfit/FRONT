import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login">
            <div className="loginText">
                LOGIN
            </div>
            <div className="loginBox">
                <input className="loginInput email" type="email" placeholder="이메일을 입력해주세요" />
                <br />
                <input className="loginInput password" type="password" placeholder="비밀번호를 입력해주세요" />
            </div>
            <br />
            <button className="btn loginBtn greenBtn">
                로그인
            </button>
            <button className="btn loginBtn whiteBtn" onClick={() => { navigate('/signup'); }}>
                회원가입
            </button>
        </div>
    );
};

export default Login;
