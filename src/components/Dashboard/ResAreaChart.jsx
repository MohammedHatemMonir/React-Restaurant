import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSignal } from "@preact/signals-react";

// Sample data

const data = [
  {
    _id: "662bded2acdd2f44774b019f",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 50,
  },
  {
    _id: "662d64b156180c7b2b0c279d",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 1,
  },
  {
    _id: "662d65ab56180c7b2b0c27c4",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 2,
  },
  {
    _id: "662dcaaaba058a3acd831e58",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 50,
  },
  {
    _id: "662dcb32ba058a3acd831e7d",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 261,
  },
  {
    _id: "6638ab518e19fc325a4e50e1",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 50,
  },
  {
    _id: "663e54238e06315ca05a42ac",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 211,
  },
  {
    _id: "664d623856176dadf2367881",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 50,
  },
  {
    _id: "665180147265f87cbdbdb787",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 50,
  },
  {
    _id: "665180f77265f87cbdbdb7b6",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 1,
  },
  {
    _id: "665186387265f87cbdbdb7f2",
    dateOrdered: "2024-04-27T20:48:49.121Z",
    totalPrice: 50,
  },
];

export default function MyAreaChart({ ResID }) {
  const data = useSignal();
  // All Restaurant Orders
  const q = useQuery({
    queryKey: ["allRestaurantOrders"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboard/allRestaurantOrders/${ResID}`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });

  console.log("All Restaurant Orders", q.data?.data.ResOrders);
  data.value = q.data?.data?.ResOrders;
  // Transform data to extract date and totalPrice
  const transformedData = q.data?.data?.ResOrders.map((item) => ({
    date: new Date(item.dateOrdered).toLocaleDateString(),
    totalPrice: item.totalPrice,
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
          dataKey="totalPrice"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
