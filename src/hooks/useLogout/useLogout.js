import cookies from "react-cookies";

const useLogout = () => {

    // 자동로그인 정보 없애기 & session clear
    cookies.remove('userNum');
    cookies.remove('email');
    cookies.remove('userName');
    cookies.remove('birth');
    cookies.remove('phone');
    cookies.remove('pos');
    cookies.remove('goodPosts');
    cookies.remove('company1');
    cookies.remove('company2');
    cookies.remove('company3');
    cookies.remove('company4');
    cookies.remove('company5');
    cookies.remove('profit');
    cookies.remove('stable');
    cookies.remove('grow');
    cookies.remove('pay');
    cookies.remove('scale');

    sessionStorage.clear();

    alert('로그아웃 되었습니다.');
    window.location.replace('/main'); // hooks 내부이므로, navigate 대신 window 사용
};

export default useLogout;
