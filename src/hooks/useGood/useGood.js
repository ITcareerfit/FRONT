import axios from "axios";

const useGood = (event, pk, userPK) => {
    let post = {};
    post.infoPK = pk;
    post.userPK = userPK;

    if (event.target.src === require("../../assets/images/good.png")) {
        // add
        event.target.src = require("../../assets/images/redGood.png");
        post.flag = 1;
    }
    else {
        // remove
        event.target.src = require("../../assets/images/good.png");
        post.flag = 0;
    }

    axios.post('/api/goodpost', post
    ).then((res) => {
        console.log(res);
        sessionStorage.setItem('goodPosts', res);
    }).catch((err) => {
        console.log(err);
        alert('관심공고 등록을 진행할 수 없습니다.');
    });
};

export default useGood;
