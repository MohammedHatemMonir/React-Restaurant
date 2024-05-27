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

export default function MyAreaChart({ ResID }) {
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

  // Transform data to extract date and totalPrice
  const transformedData = q.data?.data?.ResOrders.map((item) => ({
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
