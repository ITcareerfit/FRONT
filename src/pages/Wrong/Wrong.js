import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wrong = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/main'), 2000);
    }, [navigate]);

    return (
        <div className="wrong">
            This is wrong access.
            <br /> <br />
            Redirect to Main page.
        </div>
    );
};

export default Wrong;
