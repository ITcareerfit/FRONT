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

const BarGraph = () => {

    const data = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        datasets: [
            {
                label: 'BackEnd',
                data: [25, 37, 40, 38, 53, 49, 58],
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.5,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                    // 'rgba(255, 205, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    // 'rgb(255, 159, 64)',
                    // 'rgb(255, 205, 86)',
                    // 'rgb(75, 192, 192)',
                    // 'rgb(54, 162, 235)',
                    // 'rgb(153, 102, 255)',
                    // 'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
            {
                label: 'FrontEnd',
                data: [65, 49, 58, 55, 43, 48, 30],
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.5,
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    // 'rgb(255, 99, 132)',
                    // 'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    // 'rgb(75, 192, 192)',
                    // 'rgb(54, 162, 235)',
                    // 'rgb(153, 102, 255)',
                    // 'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
            {
                label: 'AI',
                data: [50, 52, 48, 45, 54, 56, 52],
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.5,
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                    // 'rgba(255, 205, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    // 'rgb(255, 99, 132)',
                    // 'rgb(255, 159, 64)',
                    // 'rgb(255, 205, 86)',
                    // 'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    // 'rgb(153, 102, 255)',
                    // 'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'top' as const,
            },
            title: {
                display: true,
                text: '2023 상반기 직종별 IT Trend',
                size: '20px'
            },
        },
        // scales: {
        //     xAxes: [{
        //         barPercentage: 1
        //     }]
        // }
    };

    return (
        <div className="graph">
            <Bar type="bar" data={data} options={options} style={{ display: 'inline-block' }} />
        </div>
    );
};

export default BarGraph;
