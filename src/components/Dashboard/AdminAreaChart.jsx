import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
export default function AdminAreaChart({ rawData1 }) {
  console.log("rawData1", rawData1);

  const transformData = (data) => {
    console.log("my dat", data);

    const orders = Object.values(data?.restaurantOrders || {}).flatMap((res) =>
      res.orders.map((order) => {
        const originalDate = moment(order.dateOrdered);
        const relativeDate = originalDate.fromNow();
    
        return {
          date: relativeDate,
          "Total Price": order.totalPrice,
        };
      })
    );
    return orders;
  };

  const ordersData = transformData(rawData1);

  return (
    <ResponsiveContainer width="100%" height={425}>
      <AreaChart data={ordersData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total Price"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
