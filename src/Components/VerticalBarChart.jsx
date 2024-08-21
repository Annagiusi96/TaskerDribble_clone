import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell} from 'recharts';
import '../Style/styleVerticalBarChart.css'

const data = [
    { name: '02.08', uv: 1000 },
    { name: '03.08', uv: 1300 },
    { name: '04.08', uv: 2000 },
    { name: '05.08', uv: 300 },
    { name: '06.08', uv: 1000 },
    { name: '07.08', uv: 700 },
    { name: '08.08', uv: 300 },
];

function VerticalBarChart() {
    return (
        <BarChart width={500} height={180} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tick={false} axisLine={false} hide={true}/>
            <Tooltip />
            <Bar dataKey="uv" radius={10} >
                {data.map((el, index) => (
                    <Cell key={index} fill={el.uv > 1300 ? '#6737F5' : '#d3c7fb'}></Cell>
                ))}
                
            </Bar>

        </BarChart>
    );
}

export default VerticalBarChart;
