import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface JobTitlesTableProps {
    data: Record<string, number>;
}

interface JobTitleData {
    title: string;
    count: number;
}

const JobTitlesTable: React.FC<JobTitlesTableProps> = ({ data }) => {
    const titlesData: JobTitleData[] = Object.entries(data).map(([title, count]) => ({
        title,
        count,
    }));

    const columns: ColumnsType<JobTitleData> = [
        {
            title: 'Job Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Number of Jobs',
            dataIndex: 'count',
            key: 'count',
        },
    ];

    return <Table columns={columns} dataSource={titlesData} rowKey="title" />;
};

export default JobTitlesTable;
