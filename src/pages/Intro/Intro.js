import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/main'), 3000); // 3000ms 후 main으로 이동
    }, [navigate]);

    return (
        <div className="intro">Intro</div>
    );
};

export default Intro;
