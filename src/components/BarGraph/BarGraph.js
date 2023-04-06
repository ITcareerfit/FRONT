import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarGraph = ({ labels, label, datas, title }) => {

    const data = {
        labels: labels,
        datasets: [
            {
                label: label[0],
                data: datas[0],
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.5,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            },
            {
                label: label[1],
                data: datas[1],
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.5,
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 1
            },
            {
                label: label[2],
                data: datas[2],
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.5,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: { // 상단의 설명 텍스트 (ex. BackEnd)
                    font: {
                        family: 'Noto Sans KR'
                    }
                }
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: '17px',
                    family: 'Noto Sans Kr'
                }
            },
            tooltip: {
                bodyFont: {
                    family: 'Noto Sans KR'
                }
            }
        },
        scales: {
            x: { // 1월, 2월, 3월 ...
                ticks: {
                    font: {
                        size: '14px',
                        family: 'Noto Sans KR'
                    }
                },
            },
            y: { // 0, 10, 20 ...
                ticks: {
                    font: {
                        family: 'Noto Sans KR'
                    }
                },
            },
        }
    };

    return (
        <div className="graph">
            <Bar type="bar" data={data} options={options} style={{ display: 'inline-block' }} />
        </div>
    );
};

export default BarGraph;
