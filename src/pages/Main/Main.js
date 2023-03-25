import React from "react";
import { useNavigate } from "react-router-dom";
import { Banner, Header, MainProfile, NoProfile, Post } from "../../components";

const Main = () => {
    sessionStorage.setItem('userPK', 12345);
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <Banner />
            <div className="basicPage headerFarPage">
                <div className="goPost" onClick={() => { navigate('/'); }}>
                    <span className="goPostText">공고 확인하기</span>
                    <img className="goPostImg" src={require('../../assets/images/blackNext.png')} alt="next" />
                </div>

                <div className="mainBox">

                    <div className="postGroup mainPostGroup">
                        <Post company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    </div>
                    {sessionStorage.getItem('userPK') ?
                        <MainProfile />
                        :
                        <NoProfile />}
                </div>
            </div>
        </>
    );
};

export default Main;
