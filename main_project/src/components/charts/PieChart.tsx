import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import React from "react";

const COLORS = ["#E892F4", "#92F4E8"];

interface pieChartProps {
  data: { name: string; value: number }[];
}

const PieCharts: React.FC<pieChartProps> = ({ data }) => {
  return (
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        cx={"50%"}
        cy={"50%"}
        labelLine={false}
        label
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieCharts;

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }: PieLabelRenderProps) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);
//
//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };
