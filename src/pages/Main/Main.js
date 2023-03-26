import React from "react";
import { useNavigate } from "react-router-dom";
import { Banner, Header, MainProfile, NoProfile, Post } from "../../components";

const Main = () => {
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
                        <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                        <Post img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} company={'네모회사'} job={'백엔드 개발자'} career={'경력 무관'} area={'성남시 분당구'} stack={['Java', 'Spring', 'Linux']} />

                    </div>
                    {sessionStorage.getItem('userPK') ?
                        <MainProfile img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} />
                        :
                        <NoProfile />}
                </div>
            </div>
        </>
    );
};

export default Main;
