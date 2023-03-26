import React from "react";
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

const MyValue = ({ myValue, companyValue }) => {
    let data;

    companyValue
        ? data = {
            labels: ['수익성', '안정성', '급여', '사내문화', '성장가능성'],
            datasets: [
                {
                    label: 'My Values',
                    data: [myValue[0], myValue[1], myValue[2], myValue[3], myValue[4]],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                },
                // 다른 차트 또 올리기
                {
                    label: 'Company Values',
                    data: [companyValue[0], companyValue[1], companyValue[2], companyValue[3], companyValue[4]],
                    //58, 90, 40, 60, 76
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                }
            ],
        }
        : data = {
            labels: ['수익성', '안정성', '급여', '사내문화', '성장가능성'],
            datasets: [
                {
                    label: 'My Values',
                    data: [myValue[0], myValue[1], myValue[2], myValue[3], myValue[4]],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                }
            ],
        };


    const options = {
        scales: {
            r: {
                min: 0, // 표 최소 최대값
                max: 100,
                ticks: { // 표 수치값 설정 (0~100)
                    display: false,
                    stepSize: 20, // 표 수치값 간격 설정
                },
                pointLabels: { // 라벨 속성 지정 (ex. 안정성)
                    font: {
                        size: 15,
                        weight: 'bold',
                    },
                    color: 'rgb(101, 111, 119)',
                },
            },
        },
        plugins: { // 데이터의 라벨 지우기 (ex. myValue)
            legend: {
                display: false
            }
        }
    };

    return (
        <Radar data={data} options={options} style={{ display: 'inline-block' }} />
    );
};

export default MyValue;
