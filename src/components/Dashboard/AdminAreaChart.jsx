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

const myData = {
  success: true,
  data: {
    restaurantOrders: {
      "66256e30703f282c845e225c": {
        orders: [
          {
            _id: "664b27a8b3b8eb15946bba53",
            resId: "66256e30703f282c845e225c",
            meals: [
              {
                id: "6625862a71831e03f238f05d",
                quantity: 1,
              },
            ],
            totalPrice: 50,
            user: "6612ff3292bc623860104906",
            status: "pending",
            dateOrdered: "2024-05-20T10:36:24.590Z",
            __v: 0,
          },
        ],
        totalOrders: 1,
        totalPrice: 50,
      },
      "6625a8463d202d6cdd4d61f6": {
        orders: [
          {
            _id: "664d623856176dadf2367881",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "6625a8833d202d6cdd4d620d",
                quantity: 1,
              },
            ],
            totalPrice: 50,
            user: "664cd0d898826c2c2a391b65",
            status: "pending",
            dateOrdered: "2024-05-22T03:10:48.386Z",
            __v: 0,
          },
          {
            _id: "665180147265f87cbdbdb787",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "6625a8833d202d6cdd4d620d",
                quantity: 1,
              },
            ],
            totalPrice: 50,
            user: "664cd0d898826c2c2a391b65",
            status: "pending",
            dateOrdered: "2024-05-25T06:07:16.116Z",
            __v: 0,
          },
          {
            _id: "665180f77265f87cbdbdb7b6",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "665180c57265f87cbdbdb7a9",
                quantity: 1,
              },
            ],
            totalPrice: 1,
            user: "664cd0d898826c2c2a391b65",
            status: "pending",
            dateOrdered: "2024-05-25T06:11:03.997Z",
            __v: 0,
          },
          {
            _id: "665186387265f87cbdbdb7f2",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "6625a8833d202d6cdd4d620d",
                quantity: 1,
              },
            ],
            totalPrice: 50,
            user: "664cd0d898826c2c2a391b65",
            status: "pending",
            dateOrdered: "2024-05-25T06:33:28.279Z",
            __v: 0,
          },
          {
            _id: "66543f1550c7282d78d14403",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "6625a8833d202d6cdd4d620d",
                quantity: 1,
              },
            ],
            totalPrice: 50,
            user: "6651d97a74ea96d0690f7999",
            status: "pending",
            dateOrdered: "2024-05-27T08:06:45.454Z",
            __v: 0,
          },
          {
            _id: "66543fa850c7282d78d14439",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "665180c57265f87cbdbdb7a9",
                quantity: 1,
              },
            ],
            totalPrice: 1,
            user: "6651d97a74ea96d0690f7999",
            status: "pending",
            dateOrdered: "2024-05-27T08:09:12.077Z",
            __v: 0,
          },
          {
            _id: "66544e31aebdd405b1630a9f",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "665180c57265f87cbdbdb7a9",
                quantity: 1,
              },
            ],
            totalPrice: 1,
            user: "6652064593a3d362d412287e",
            status: "pending",
            dateOrdered: "2024-05-27T09:11:13.539Z",
            __v: 0,
          },
          {
            _id: "66553c0ecf4edb33ae6051af",
            resId: "6625a8463d202d6cdd4d61f6",
            meals: [
              {
                id: "6625a8833d202d6cdd4d620d",
                quantity: 1,
              },
            ],
            totalPrice: 50,
            user: "6652064593a3d362d412287e",
            status: "pending",
            dateOrdered: "2024-05-28T02:06:06.456Z",
            __v: 0,
          },
        ],
        totalOrders: 8,
        totalPrice: 253,
      },
      "66521e61c95c603dbbbc398f": {
        orders: [
          {
            _id: "6653a03e1f64913ddd9d8d55",
            resId: "66521e61c95c603dbbbc398f",
            meals: [
              {
                id: "6653a0331f64913ddd9d8d4c",
                quantity: 1,
              },
            ],
            totalPrice: 5,
            user: "6651d97a74ea96d0690f7999",
            status: "pending",
            dateOrdered: "2024-05-26T20:49:02.897Z",
            __v: 0,
          },
        ],
        totalOrders: 1,
        totalPrice: 5,
      },
    },
    totalOrders: 10,
    totalPrice: 308,
  },
};

export default function AdminAreaChart({ rawData1 }) {
  console.log("rawData1", rawData1);

  const transformData = (data) => {
    console.log("my dat", data);

    const orders = Object.values(data.restaurantOrders).flatMap((res) =>
      res.orders.map((order) => ({
        date: order.dateOrdered.split("T")[0],
        totalPrice: order.totalPrice,
      }))
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
          dataKey="totalPrice"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
