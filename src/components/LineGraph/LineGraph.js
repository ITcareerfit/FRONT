import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = ({ labels, label, datas, title }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: label[0],
                data: datas[0],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: label[1],
                data: datas[1],
                borderColor: 'rgb(255, 205, 86)',
                backgroundColor: 'rgba(255, 205, 86,0.5)',
                yAxisID: 'y',
            },
            {
                label: label[2],
                data: datas[2],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
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
                    family: 'Noto Sans KR'
                },
            },
            tooltip: {
                bodyFont: {
                    family: 'Noto Sans KR'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: '14px',
                        family: 'Noto Sans KR'
                    }
                },
            },
            y: {
                ticks: {
                    font: {
                        family: 'Noto Sans KR'
                    }
                },
                type: 'linear',
                display: true,
                position: 'left',
                min: 0
            }
        }
    };

    return (
        <div className="graph">
            <Line data={data} options={options} style={{ display: 'inline-block' }} />
        </div>
    );
};

export default LineGraph;
