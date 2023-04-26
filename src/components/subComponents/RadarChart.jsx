import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Assignment 01',
        marks: 60,
        id: 1,
        cnt: 490,
    },
    {
        name: 'Assignment 02',
        marks: 60,
        id: 2,
        cnt: 590,
    },
    {
        name: 'Assignment 03',
        marks: 60,

        id: 3,
        cnt: 350,
    },
    {
        name: 'Assignment 04',
        marks: 60,

        id: 4,
        cnt: 350,
    },
    {
        name: 'Assignment 05',
        marks: 60,

        id: 5,
        cnt: 350,
    },
    {
        name: 'Assignment 06',
        marks: 58,

        id: 6,
        cnt: 480,
    },
    {
        name: 'Assignment 07',
        marks: 60,

        id: 7,
        cnt: 460,
    },
    {
        name: 'Assignment 08',
        marks: 60,
        id: 8,
        cnt: 380,
    },
];

export default function RadarChart() {

    return (
        <ResponsiveContainer width="100%" aspect={3} >
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="id" stroke="#ff7300" />
                <Scatter dataKey="marks" fill="red" />
            </ComposedChart>
        </ResponsiveContainer>
    );

}
