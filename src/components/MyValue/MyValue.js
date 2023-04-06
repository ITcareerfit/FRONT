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

const MyValue = ({ myValue, companyValue, big, similar }) => {
    let data, options;

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
                // company value 겹쳐서 올리기
                {
                    label: 'Company Values',
                    data: [companyValue[0], companyValue[1], companyValue[2], companyValue[3], companyValue[4]],
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

    companyValue
        ? options = {
            scales: {
                r: {
                    min: 0, // 표 최소 최대값
                    max: 100,
                    ticks: { // 표 수치값 설정 (0~100)
                        display: false,
                        stepSize: 20, // 표 수치값 간격 설정
                    },
                    pointLabels: { // 라벨 속성 지정 (ex. 안정성)
                        font: function () {
                            const small = { size: 15, weight: 'bold', family: 'Noto Sans KR' };
                            const large = { size: 18, weight: 'bold', family: 'Noto Sans KR' };
                            let fontSet = [];
                            for (let i = 0; i < 5; i++) {
                                if (similar.includes(i)) fontSet.push(large); // similar에 i가 있다면 push
                                else fontSet.push(small);
                            }
                            return fontSet;
                        },
                        color: function () {
                            const grayColor = 'rgb(101,111,119)';
                            const blueColor = 'rgb(54, 162, 235)';
                            let colorSet = [];
                            for (let i = 0; i < 5; i++) {
                                if (similar.includes(i)) colorSet.push(blueColor);
                                else colorSet.push(grayColor);
                            }
                            return colorSet;
                        }
                    },
                },
            },
            plugins: { // 데이터의 라벨 지우기 (ex. myValue)
                legend: {
                    display: false
                },
                tooltip: {
                    bodyFont: {
                        family: 'Noto Sans KR'
                    }
                }
            }
        }
        : options = {
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    ticks: {
                        display: false,
                        stepSize: 20,
                    },
                    pointLabels: {
                        font: function () {
                            const small = { size: 15, weight: 'bold', family: 'Noto Sans KR' };
                            const large = { size: 18, weight: 'bold', family: 'Noto Sans KR' };
                            let fontSet = [];
                            for (let i = 0; i < 5; i++) {
                                if (big.includes(i)) fontSet.push(large);
                                else fontSet.push(small);
                            }
                            return fontSet;
                        },
                        color: function () {
                            const grayColor = 'rgb(101,111,119)';
                            const pinkColor = 'rgb(255,99,132)';
                            let colorSet = [];
                            for (let i = 0; i < 5; i++) {
                                if (big.includes(i)) colorSet.push(pinkColor);
                                else colorSet.push(grayColor);
                            }
                            return colorSet;
                        }
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    bodyFont: {
                        family: 'Noto Sans KR'
                    }
                }
            }
        };

    return (
        <Radar data={data} options={options} style={{ display: 'inline-block' }} />
    );
};

export default MyValue;
