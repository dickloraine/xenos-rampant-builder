import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const CustomLabel = ({ x, y, width, value }) => {
  const theme = useTheme();
  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill={theme.palette.text.primary}
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

const CustomXAxis = ({ x, y, payload }) => {
  const theme = useTheme();
  return (
    <text x={x} y={y + 10} fill={theme.palette.text.primary} textAnchor="middle">
      {payload.value}
    </text>
  );
};

export default function UnitDistributionChart({ data, height, colors }) {
  return (
    <ResponsiveContainer height={height}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={<CustomXAxis />} />
        <YAxis />
        <Legend wrapperStyle={{ bottom: 0, left: 50 }} />
        <Bar dataKey="Units" fill={colors[0]} minPointSize={3}>
          <LabelList dataKey="Units" position="top" content={<CustomLabel />} />
        </Bar>
        <Bar dataKey="Points" fill={colors[1]} minPointSize={3}>
          <LabelList dataKey="Points" position="top" content={<CustomLabel />} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
