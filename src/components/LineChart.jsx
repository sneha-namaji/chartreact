import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomLineChart = () => {
    const line = [
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

        <LineChart width={930} height={450} data={line} 
            margin={{ top: 75, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line  dataKey="pv" stroke="#8884d8" />
            <Line  dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    )
}

export default CustomLineChart