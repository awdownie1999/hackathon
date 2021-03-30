import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';
const data = [
  {
    name: 'Page A',
    sleep: 4000,
    exercise: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    sleep: 3000,
    exercise: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    sleep: 2000,
    exercise: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    sleep: 2780,
    exercise: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    sleep: 1890,
    exercise: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    sleep: 2390,
    exercise: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    sleep: 3490,
    exercise: 4300,
    amt: 2100,
  },
];

export const Example = () => {
    return (
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="exercise" stackId="a" fill="#8884d8" />
          <Bar dataKey="sleep" stackId="a" fill="#82ca9d" />
        </BarChart>
    );
}
