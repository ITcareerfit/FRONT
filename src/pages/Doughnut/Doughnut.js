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

// Line Graph
const Doughnut = () => {
    const data = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
        datasets: [
            {
                label: 'Spring',
                data: [5, 4, 3, 4, 5, 3, 4],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Node',
                data: [7, 6, 7, 5, 3, 2, 4],
                borderColor: 'rgb(255, 205, 86)',
                backgroundColor: 'rgba(255, 205, 86,0.5)',
                yAxisID: 'y1',
            },
            {
                label: 'Django',
                data: [4, 5, 4, 3, 6, 5, 5],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y1',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis',
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                min: 1,
                max: 7,
            },
            y1: {
                type: 'linear',
                display: false,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    return (
        <div className="trend">
            <Line data={data} options={options} />
        </div>
    );
};

export default Doughnut;
