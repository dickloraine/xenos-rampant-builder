import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

export default function PointDistributionChart({ data, height, colors }) {
  return (
    <ResponsiveContainer height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
          outerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell key={entry} fill={colors[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const percentValue = (percent * 100).toFixed(0);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {percentValue > 0 ? `${percentValue}%` : ''}
    </text>
  );
};
