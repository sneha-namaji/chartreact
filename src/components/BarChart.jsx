import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBarChart = () => {
    const data = [
        {
            "name": "India",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Telangana",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Andra Pradesh",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "West Bangole",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Tamil Nadu",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Delhi",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Kerala",
            "uv": 3490,
            "pv": 4300
        }
    ]


    return (
        <div>
                
                <BarChart width={900} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
        </div>
    )
};

export default CustomBarChart;