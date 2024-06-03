import Order from "../models/OrderSchema.js";
export const createOrder = async (req, res) => {
  try {
    const response = await Order.create(req.body);
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
