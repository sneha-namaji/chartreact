import React from 'react'
import { AreaChart,  CartesianGrid, XAxis, YAxis, Tooltip, Area,  } from 'recharts';

const CustomAreaChart = () => {
   
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
        <AreaChart width={930} height={450} data={line}
        margin={{ top: 90, right: 30, left: 0, bottom: 0 }}>
            <defs>
                
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    )
}


export default CustomAreaChart