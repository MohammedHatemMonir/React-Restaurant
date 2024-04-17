import { FaCircle } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function ResPieChart({
  positive,
  negative,
  natural,
  allComments,
}) {
  // console.log("Hema 1234", positive);
  // PieChart Data
  const myValue = 100;
  const data = [
    {
      name: "Positive",
      value: (positive / allComments) * myValue,
    },
    {
      name: "Negative",
      value: (negative / allComments) * myValue,
    },
    {
      name: "Neutral",
      value: (natural / allComments) * myValue,
    },
    // { name: "Group D", value: (200 / 400) * 100 },
  ];
  // , "#FF8042"
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                fill={COLORS[index % COLORS.length]}
                key={`cell-${index}`}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="legend">
        <FaCircle className="text-primary" />
        Positive <FaCircle className="text-success" />
        Negative <FaCircle className="text-warning" />
        Neutral
      </div>

      {/* <hr></hr>
    <div className="stats">
      <i className="far fa-clock"></i>
      Campaign sent 2 days ago
    </div> */}
    </>
  );
}
