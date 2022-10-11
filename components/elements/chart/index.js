import React from 'react';
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



export const MyBar = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },

        // Modify the axis by adding scales
        scales: {
            // to remove the labels
            x: {
                ticks: {
                    display: false,
                },

                // to remove the x-axis grid
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            // to remove the y-axis labels
            y: {
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
                // to remove the y-axis grid
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };

    const labels = ['Coding', 'Code review', 'QA Reviews'];

    var data = {
        labels,
        legend: {
            display: false,
        },
        datasets: [
            {
                label: '',
                fill: false,
                data: [55, 25, 20],
                backgroundColor: 'rgba(3, 41, 61, 0.1)',
            },
            {
                label: '',
                data: [30, 40, 30],
                backgroundColor: 'rgba(77, 189, 152, 1)',
            },

        ],
    };

    return <Bar data={data} options={options} />;
}