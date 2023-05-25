import React, { useEffect, useRef, useState } from "react";
import cookies from "react-cookies";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseMany, Header, MypageCompany, MypagePost } from "../../components";
import { useValueNav } from "../../hooks";

const Mypage = () => {
    const navigate = useNavigate();
    const value = useValueNav;

    const userNum = useParams().userNum;

    const company1 = JSON.parse(sessionStorage.getItem('company1')); // 객체로 변환
    const company2 = JSON.parse(sessionStorage.getItem('company2'));
    const company3 = JSON.parse(sessionStorage.getItem('company3'));
    const company4 = JSON.parse(sessionStorage.getItem('company4'));
    const company5 = JSON.parse(sessionStorage.getItem('company5'));
    const userName = sessionStorage.getItem('userName');
    // const birth = sessionStorage.getItem('birth').split(','); // , 기준으로 나누기
    const phone = sessionStorage.getItem('phone');
    const pos = sessionStorage.getItem('pos').split(',');

    const [loading, setLoading] = useState({ display: 'block' });
    const [show, setShow] = useState({ display: 'none' });
    const [goodPosts, setGoodPosts] = useState([]);
    const [open, setOpen] = useState('');
    const [position, setPosition] = useState(pos);
    const newName = useRef(null);
    const newPhone = useRef(null);
    const newPos = useRef(null);

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'white';

        axios.get(`${process.env.REACT_APP_SERVER_URL}/mypage/${userNum}`
        ).then((res) => {
            sessionStorage.setItem('goodPosts', res.data.user_gp_list);
            if (cookies.load('email')) cookies.save('goodPosts', res.data.user_gp_list);
            setGoodPosts(res.data.gp_list_info);
        }).catch((err) => {
            console.log(err);
        });

        setLoading({ display: 'none' });
        setShow({ display: 'block' });
    }, [userNum]);

    const edit = () => {
        let post = {};
        if (newName.current.value) post.userName = newName.current.value;
        if (newPhone.current.value) post.phone = newPhone.current.value;
        if (newPos.current.value) post.pos = newPos.current.value;
    };

    return (
        <>
            <Header />
            <div className="loadingContainer" style={loading}>
                <div className="loading"></div>
                <div id="loadingText">LOADING</div>
            </div >
            <div className="basicPage" style={show}>
                <div className="mypage">
                    <div className="mypageHeader">
                        <img className="mypageImg" src={require('../../assets/images/mypage.png')} alt="user" />
                        <div className="mypageUser">
                            <span className="userName">{userName}</span> 님
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
                            <span className="goLink goLinkValue" onClick={() => value(navigate)}>가치관확인</span>

                            <div className="mypageBox">
                                {company1 !== null
                                    ? <>
                                        <MypageCompany id={'first'} cpImg={company1.cpImg} cpName={company1.cpName} open={[open, setOpen]} />

                                        <MypageCompany id={'second'} cpImg={company2.cpImg} cpName={company2.cpName} open={[open, setOpen]} />

                                        <MypageCompany id={'thrid'} cpImg={company3.cpImg} cpName={company3.cpName} open={[open, setOpen]} />

                                        <MypageCompany id={'fourth'} cpImg={company4.cpImg} cpName={company4.cpName} open={[open, setOpen]} />

                                        <MypageCompany id={'fifth'} cpImg={company5.cpImg} cpName={company5.cpName} open={[open, setOpen]} />
                                    </>
                                    : <img className="mypageEmpty" src={require('../../assets/images/empty.png')} alt="emply" />}
                            </div>
                        </div>

                        <div className="mypageInfo">
                            <span className="goLink" onClick={() => navigate(`goodpost`)}>+ 더보기</span>
                            {/* navigate에 /goodpost가 아니라 goodpost라고 적으면 현 url 뒤 /goodpost 로 이동 */}

                            <div className="mypageBox mypageBoxSecond">
                                {goodPosts.length !== 0
                                    ? goodPosts.slice(0, 3).map((v, index) => { // 3개만 출력
                                        return (
                                            <div className="mypagePostBox mypagePostTool" key={v + index}>
                                                <MypagePost infoId={v.infoId} infoCpName={v.infoCpName.cpName} title={v.title} minCareer={v.minCareer} maxCareer={v.maxCareer} infoLoc={v.infoLoc} />
                                            </div>
                                        );
                                    })
                                    : <img className="mypageEmpty" src={require('../../assets/images/empty.png')} alt="emply" />}
                            </div>
                        </div>

                        <div className="mypageInfo mypageInfoUserEdit">
                            <span className="goLink" onClick={edit}>수정하기</span>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">이름</div>
                                <input className="mypageEditInput mypageBorder mypagePadding" type="text" placeholder={userName} ref={newName} />
                            </div>

                            {/* <div className="mypageEditBox mypageEditBirthBox">
                                <div className="mypageEditTitle">생년월일</div>
                                <div className="mypageEditInput mypageEditInputBirth">
                                    <div className="mypageBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[0]}</div>
                                        년</div>
                                    <div className="mypageBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[1]}</div>
                                        월</div>
                                    <div className="mypageBorder mypagePadding mypageEditBirth">
                                        <div className="birthDetail">{birth[2]}</div>
                                        일</div>
                                </div>
                            </div> */}

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">전화번호</div>
                                <input className="mypageEditInput mypageBorder mypagePadding" type="text" placeholder={phone} ref={newPhone} />
                            </div>

                            <div className="mypageEditBox">
                                <div className="mypageEditTitle">관심 직무</div>
                                <ChooseMany className={'mypagePos'} mainClassName={'mypagePos'} option={['DBA', 'ERP', 'iOS', 'QA', 'VR/AR/3D', '개발PM', '게임 서버', '게임 클라이언트', '그래픽스', '데브옵스', '데이터 엔지니어링', '로보틱스 미들웨어', '머신러닝', '모바일 게임', '블록체인', '사물인터넷(IoT)', '서버/백엔드', '시스템 소프트웨어', '시스템/네트워크', '안드로이드', '웹 퍼블리싱', '웹 풀스택', '응용 프로그램', '인공지능(AI)', '인터넷 보안', '임베디드 소프트웨어', '크로스 플랫폼', '프론트엔드']} open={[open, setOpen]} value={[position, setPosition]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mypage;
