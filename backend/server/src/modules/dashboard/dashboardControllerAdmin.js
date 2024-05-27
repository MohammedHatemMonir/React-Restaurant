const { Order } = require("../../database/models/orders");

const allRestaurantOrders = async (req, res) => {
    try {
        
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const todayOrders = await Order.find({
            createdAt: { $gte: startOfDay }
        });

        
        const restaurantOrders = todayOrders.reduce((acc, order) => {
            if (!acc[order.resId]) {
                acc[order.resId] = {
                    orders: [],
                    totalOrders: 0,
                    totalPrice: 0
                };
            }
            acc[order.resId].orders.push(order);
            acc[order.resId].totalOrders += 1;
            acc[order.resId].totalPrice += order.price;
            return acc;
        }, {});

        const responseData = Object.keys(restaurantOrders).map(resId => ({
            resId,
            orders: restaurantOrders[resId].orders.reverse(),
            totalOrders: restaurantOrders[resId].totalOrders,
            totalPrice: restaurantOrders[resId].totalPrice
        }));

        res.status(200).json({
            success: true,
            data: responseData
        });
    } catch (error) {
        console.log("Error fetching restaurant orders:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching restaurant orders."
        });
    }
};

module.exports = { allRestaurantOrders };
