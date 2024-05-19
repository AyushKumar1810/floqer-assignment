import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';
import axios from 'axios';

interface SalaryData {
    year: number;
    jobs: number;
    avg_salary_usd: number;
}

const Analytics: React.FC = () => {
    const [data, setData] = useState<SalaryData[]>([]);

    useEffect(() => {
        axios.get('../data/salaries.json').then((response) => {
            setData(response.data);
        });
    }, []);

    const config = {
        data,
        xField: 'year',
        yField: 'jobs',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [{ type: 'marker-active' }],
    };

    return <Line {...config} />;
};

export default Analytics;
