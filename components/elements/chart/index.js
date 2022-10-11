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

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

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

    return (<ErrorBoundary>
        <Bar data={data} options={options} />;
    </ErrorBoundary>)
}