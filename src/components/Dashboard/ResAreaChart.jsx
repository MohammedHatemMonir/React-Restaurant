import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MyAreaChart({ ResOrders }) {
  // Transform data to extract date and totalPrice
  const transformedData = ResOrders.map((item) => ({
    date: new Date(item.dateOrdered).toLocaleDateString(),
    "Total Price($)": item.totalPrice,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={transformedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total Price($)"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
