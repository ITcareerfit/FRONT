import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Header, MypageCompany, MypagePost } from "../../components";

const Mypage = () => {
    const navigate = useNavigate();

    // const id = sessionStorage.getItem('id');
    // const company1 = sessionStorage.getItem('company1');
    // const company2 = sessionStorage.getItem('company2');
    // const company3 = sessionStorage.getItem('company3');
    // const company4 = sessionStorage.getItem('company4');
    // const company5 = sessionStorage.getItem('company5');
    const goodPosts = sessionStorage.getItem('goodPosts').split(','); // , 기준으로 나누기
    const name = sessionStorage.getItem('name');
    const birth = sessionStorage.getItem('birth').split(',');
    const call = sessionStorage.getItem('call');
    const position = sessionStorage.getItem('position');

    const [open, setOpen] = useState('');
    const newName = useRef(null);
    const newCall = useRef(null);
    const newPosition = useRef(null);

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        // axios 소통 -> companyPK(=company1, company2...)로 (img, name), goodPosts로 세부정보 받기
    }, []);

    const valueCheck = () => {
        // change after
        if (sessionStorage.getItem('profit')) navigate('/value');
        else navigate('/valueMain');
    };

    const edit = () => {
        let post = {};
        if (newName.current.value) post.name = newName.current.value;
        if (newCall.current.value) post.call = newCall.current.value;
        if (newPosition.current.value) post.position = newPosition.current.value;

        if (post.name || post.call || post.position) {
            axios.post('/api/mypageEdit', post
            ).then((res) => {
                console.log(res);
                // session change
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    return (
        <>
            <Header />
            <div className="basicPage">
                <div className="mypage">
                    <div className="mypageHeader">
                        <img className="mypageImg" src={require('../../assets/images/mypage.png')} alt="user" />
                        <div className="mypageUser">
                            <span className="userName">{name}</span> 님
                        </div>
                    </div>
                    <div className="mypageInfoText">
                        <div className="mypageTitle">추천 기업</div>
                        <div className="mypageTitle">관심 채용 정보</div>
                        <div className="mypageTitle mypageTitleUserEdit">회원정보</div>
                    </div>

                    <hr className="mypageLine" />

                    <div className="mypageInfoBox">
                        <div className="mypageInfo">
                            <span className="mypageValue">
                                나의 가치관이 궁금하신가요?&nbsp;&nbsp;
                            </span>
                            <span className="goLink goLinkValue" onClick={valueCheck}>가치관확인</span>

                            <div className="mypageBox">
                                {/* img, name, info, title change after */}
                                <MypageCompany id={'first'} img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} info={[1, 2, 3]} title={['aa', 'bb', 'cc']} open={[open, setOpen]} />

                                <MypageCompany id={'second'} img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} info={[1, 2, 3]} title={['aa', 'bb', 'cc']} open={[open, setOpen]} />

                                <MypageCompany id={'thrid'} img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} info={[1, 2, 3]} title={['aa', 'bb', 'cc']} open={[open, setOpen]} />

                                <MypageCompany id={'fourth'} img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} info={[1, 2, 3]} title={['aa', 'bb', 'cc']} open={[open, setOpen]} />

                                <MypageCompany id={'fifth'} img={'https://mblogthumb-phinf.pstatic.net/20160427_105/ppanppane_1461740027409K9Eqv_PNG/%B8%C6%B5%B5%B3%AF%B5%E5_%B7%CE%B0%ED_%282%29.png?type=w2'} name={'쿠팡'} info={[1, 2, 3]} title={['aa', 'bb', 'cc']} open={[open, setOpen]} />
                            </div>
                        </div>

                        <div className="mypageInfo">
                            <span className="goLink" onClick={() => navigate(`goodpost`)}>+ 더보기</span>
                            {/* navigate에 /goodpost가 아니라 goodpost라고 적으면 현 url 뒤 /goodpost 로 이동 */}

                            <div className="mypageBox mypageBoxSecond">
                                {goodPosts.map((v, index) => {
                                    // company, title, career, area change
                                    return (
                                        <div className="mypagePostBox mypagePostTool" key={v + index}>
                                            <MypagePost pk={v} company={'카카오'} title={'Frontend Software Engineers'} career={'2년~7년'} area={'서울시 성동구'} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mypageInfo mypageInfoUserEdit">
                            <span className="goLink" onClick={edit}>수정하기</span>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">이름</div>
                                <input className="mypageEditInput signUpBorder mypagePadding" type="text" placeholder={name} ref={newName} />
                            </div>

                            <div className="mypageEditBox mypageEditBirthBox">
                                <div className="mypageEditTitle">생년월일</div>
                                <div className="mypageEditInput mypageEditInputBirth">
                                    <div className="signUpBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[0]}</div>
                                        년</div>
                                    <div className="signUpBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[1]}</div>
                                        월</div>
                                    <div className="signUpBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[2]}</div>
                                        일</div>
                                </div>
                            </div>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">전화번호</div>
                                <input className="mypageEditInput signUpBorder mypagePadding" type="text" placeholder={call} ref={newCall} />
                            </div>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">관심 직무</div>
                                <input className="mypageEditInput signUpBorder mypagePadding" type="text" placeholder={position} ref={newPosition} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mypage;
