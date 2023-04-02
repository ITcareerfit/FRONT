import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


const DoughnutGraph = ({ labels, label, datas, title, size }) => {

    const data = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: datas,
                // 최대 7개 가능(색 때문)
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                    // 필요한 갯수만큼만 색상 인식함
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                    // 필요한 갯수만큼만 색상 인식함
                ],
                borderWidth: 2,
                datalabels: {
                    labels: {
                        index: { // labels 이름
                            color: (context) =>
                                context.dataset.borderColor,
                            align: 'end',
                            anchor: 'end',
                            padding: '0',
                            font: (context) => // fontSize 말고 객체 형태로 받아야함
                                context.dataIndex === size[0] // 더 큰 글씨로
                                    ? { size: '18px', weight: 'bold' }
                                    : context.dataIndex === size[1] // 더 작은 글씨로
                                        ? { size: '12px', weight: 'bold' }
                                        : { size: '15px', weight: 'bold' },
                            formatter: (value, context) => context.chart.data.labels[context.dataIndex], // labels 내용
                        },
                    }
                }
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false // 데이터의 라벨 지우기 (ex. c, python..)
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: '15px'
                },
                padding: {
                    top: '30'
                },
                position: 'bottom',
            },
        },
        layout: {
            padding: {
                top: 70,
                bottom: 70,
            }
        }
    };

    return (
        <div className="doughnut" >
            <Doughnut data={data} options={options} plugins={[ChartDataLabels]} style={{ display: 'inline-block' }} />
            {/* plugins로 datalabels 사용하기 */}
        </div >
    );
};

export default DoughnutGraph;
