"use client" 
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
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Sales',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.number.int({ min: 100, max: 999 })),
            borderColor: 'rgb(230 55 60)',
            backgroundColor: 'rgb(230 55 60)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.number.int({ min: 100, max: 999 })),
            borderColor: 'rgb(50 59 102)',
            backgroundColor: 'rgb(50 59 102)',
        },
    ],
};

const LineChart = () => {
    return <Line options={options} data={data} />;
}


export default LineChart
