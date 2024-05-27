const { Order } = require("../../database/models/orders");

const allRestaurantOrders = async (req, res) => {
    try {
        // Get the current date and set the time to the start of the day
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        // Query orders made today
        const todayOrders = await Order.find({ createdAt: { $gte: startOfDay } });

        // Group orders by restaurant ID and calculate totals
        const restaurantOrders = todayOrders.reduce((acc, order) => {
            const { resId, price } = order;
            if (!acc[resId]) {
                acc[resId] = { orders: [], totalOrders: 0, totalPrice: 0 };
            }
            acc[resId].orders.push(order);
            acc[resId].totalOrders += 1;
            acc[resId].totalPrice += price;
            return acc;
        }, {});

        res.status(200).json({
            success: true,
            data: restaurantOrders
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
