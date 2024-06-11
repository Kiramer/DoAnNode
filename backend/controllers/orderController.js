import Order from "../models/OrderSchema.js";
import Product from "../models/ProductSchema.js";
export const createOrder = async (req, res) => {
  try {
    const promises = req.body.cart.map(async (order) => {
      const productData = await Product.findOneAndUpdate(
        {
          _id: order.id,
          quantity: { $gte: order.quantity },
        },
        {
          $inc: {
            quantity: -order.quantity,
            sold: +order.quantity,
          },
        },
        { new: true }
      );
      if (productData) {
        return {
          status: "OK",
          message: "SUCCESS",
        };
      } else {
        return {
          status: "OK",
          message: "ERR",
          id: order.product,
        };
      }
    });
    const results = await Promise.all(promises);
    const response = await Order.create(req.body);
    console.log("🚀 ~ createOrder ~ req.body:", req.body.cart);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({
      success: true,
      message: "Orders Found",
      data: orders,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Order Found",
    });
  }
};
