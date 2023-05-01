import axios from "axios";

const useGood = (event, infoId, userNum) => {
    let post = {};
    post.infoId = infoId;
    post.userNum = userNum;

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
        alert('다시 시도해주십시오.');
    });
};

export default useGood;
