import axios from "axios";

const useGood = (event, infoId, userNum) => {
    let post = {};
    post.infoId = parseInt(infoId);

    if (event.target.src === require("../../assets/images/good.png")) post.flag = 0; // add
    else {
        // remove
        alert('정말로 삭제하시겠습니까?');
        post.flag = 1;
    }

    axios.post(`${process.env.REACT_APP_SERVER_URL}/mypage/${userNum}/goodpost`, post
    ).then((res) => {
        if (post.flag === 0) event.target.src = require("../../assets/images/redGood.png");
        else event.target.src = require("../../assets/images/good.png");
        sessionStorage.setItem('goodPosts', res.data);
    }).catch((err) => {
        console.log(err);
        alert('다시 시도해주십시오.');
    });
};

export default useGood;
