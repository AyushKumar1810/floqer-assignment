import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import JobTitlesTable from './JobTitlesTable';

interface SalaryData {
    year: number;
    jobs: number;
    avg_salary_usd: number;
    titles: Record<string, number>;
}

const MainTable: React.FC = () => {
    const [data, setData] = useState<SalaryData[]>([]);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    useEffect(() => {
        axios.get('../data/salaries.json').then((response) => {
            setData(response.data);
        });
    }, []);

    const columns: ColumnsType<SalaryData> = [
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            sorter: (a, b) => a.year - b.year,
        },
        {
            title: 'Number of Jobs',
            dataIndex: 'jobs',
            key: 'jobs',
            sorter: (a, b) => a.jobs - b.jobs,
        },
        {
            title: 'Average Salary (USD)',
            dataIndex: 'avg_salary_usd',
            key: 'avg_salary_usd',
            sorter: (a, b) => a.avg_salary_usd - b.avg_salary_usd,
        },
    ];

    const handleRowClick = (record: SalaryData) => {
        setSelectedYear(record.year);
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                rowKey="year"
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                })}
            />
            {selectedYear !== null && (
                <JobTitlesTable data={data.find(d => d.year === selectedYear)!.titles} />
            )}
        </>
    );
};

export default MainTable;
