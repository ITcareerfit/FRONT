import { Navigate } from "react-router-dom";

const IsLogin = ({ children }) => {

    // if (sessionStorage.getItem('userPK')) return children;
    // else {
    //     alert('이 서비스는 로그인이 필요합니다.');
    //     return <Navigate to='/login' />;
    //     // useNavigate 말고 Navigate 써야지 동작함
    // }

    return children;
};

export default IsLogin;
