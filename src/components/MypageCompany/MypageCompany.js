import React, { useState } from "react";
import axios from "axios";
import { Modal, MypagePost } from "../";

const MypageCompany = ({ id, cpImg, cpName, open }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState(null);

    const check = () => {
        if (open[0] !== '') {
            //열려있는 창 닫기
            document.getElementById(open[0]).style.display = 'none';
            open[1]('');
            if (open[0] !== id) {
                // 다른 창 열기
                open[1](id);
                document.getElementById(id).style.display = 'block';
                communicate();
            }
        }
        else {
            // 창 열기
            open[1](id);
            document.getElementById(id).style.display = 'block';
            communicate();
        }
    };

    const communicate = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/mypage?cpName=${cpName}`
        ).then((res) => {
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });

        setModalOpen(!modalOpen);
    };

    return (
        <div className="mypageCompany">
            <img className="mypageCompanyImg" src={cpImg} alt="companyLogo" />

            <div className="mypageCompanyName">{cpName}</div>

            <div className="mypageCompanyLink" onClick={check}>
                채용정보
                <img className="mypageCompanySelect" src={require('../../assets/images/blueSelect.png')} alt="select" />
            </div>

            <div className="mypageCompanyInfo" id={id}>
                <Modal open={modalOpen} className="modal" setOpen={setModalOpen}>
                    <div className="companyModal">
                        {cpImg
                            ? <img className="companyModalImg" src={cpImg} alt="company" />
                            : <img className="companyModalImg" src={require('../../assets/images/logo.png')} alt="company" />}
                        <div className="companyModalRight">
                            <div className="companyModalName">
                                {cpName}
                            </div>
                            <div>
                                {post
                                    ? post[0].infoCpName.culture : null}
                            </div>
                        </div>
                    </div>
                    {post
                        ? post.map((v, index) => <div className="companyValueModal" key={v + index}>
                            <MypagePost infoId={post[index].infoId} infoCpName={post[index].infoCpName.cpName} title={post[index].title} minCareer={post[index].minCareer} maxCareer={post[index].maxCareer} infoLoc={post[index].infoLoc} />
                        </div>)
                        : <img className="companyValueModalEmpty" src={require('../../assets/images/empty.png')} alt="empty" />}
                </Modal>
            </div>
        </div>
    );
};

export default MypageCompany;
