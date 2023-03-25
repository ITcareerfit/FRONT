import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const MainProfile = () => {
    const navigate = useNavigate();

    const data = {
        labels: ['안정성', '성장성', '사내문화', '워라밸', '연봉'],
        // labels: ['','','','',''],
        datasets: [
            {
                label: 'My Values',
                data: [80, 90, 60, 50, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
            // 다른 차트 또 올리기
            // {
            //     label: 'Company Values',
            //     data: [58, 90, 40, 60, 76],
            //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
            //     borderColor: 'rgb(54, 162, 235)',
            // }
        ],
    };

    const options = {
        scales: {
            r: {
                min: 0, // 표 최소 최대값
                max: 100,
                ticks: { // 표 수치값 설정
                    color: 'rgb(143, 143, 143)',
                    display: false,
                    stepSize: 20, // 표 수치값 간격 설정
                }
            },
        },
        // 라벨 지우기
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <div className="profile">
            <div className="profileChartBox">
                <Radar data={data} options={options} className="profileChart" />
            </div>
            <div className="profileInfo">
                <div className="profileText">프로필</div>
                <div className="profileEmail">known@user.com 님</div>

                <div className="profileInfoDetail">
                    <div className="profileInfoTitle">관심 포지션</div>
                    <div className="profileInfoAnswer">백엔드</div>
                </div>

                <div className="profileInfoDetail">
                    <div className="profileInfoTitle">추천 기업</div>
                    <div className="profileInfoAnswer profileLink" onClick={() => { navigate('/main'); }}>
                        3건
                        <img className="companyNext" src={require('../../assets/images/purpleNext.png')} alt="next" />
                    </div>
                </div>

                <div className="profileInfoDetail">
                    <div className="profileInfoTitle">관심 기업</div>
                    <div className="profileInfoAnswer profileLink" onClick={() => { navigate('/main'); }}>
                        3건
                        <img className="companyNext" src={require('../../assets/images/purpleNext.png')} alt="next" />
                    </div>
                </div>

                <div className="profileInfoDetail">
                    <div className="profileImgLeft">
                        <img className="profileImg" src={require('../../assets/images/test.png')} alt="user" />
                        <span className="profileImgEmail">
                            known@user.com
                        </span>
                    </div>
                    <div className="goProfile">프로필 확인하기</div>
                </div>
            </div>
        </div>
    );
};

export default MainProfile;
