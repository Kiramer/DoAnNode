import Product from "../models/ProductSchema.js";
export const createProduct = async (req, res) => {
  const { title, description, price, category, brand, quantity } = req.body;
  try {
    const product = new Product({
      title,
      description,
      price,
      category,
      brand,
      quantity,
    });
    await Product.create(product);
    res.status(200).json({
      success: true,
      message: "user successfull created",
      data: product,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error" + error });
  }
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to updated",
    });
  }
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};
export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "Product Found",
      data: product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No Product Found",
    });
  }
};
export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({}).select("-password");
    if (products.length === 0) {
      res.status(200).json({
        success: true,
        message: "Not Product Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Products Found",
      data: products,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Product Found",
    });
  }
};
//   export const getUserProfile = async (req, res) => {
//     const userId = req.userId;
//     try {
//       const user = await User.findById(userId);

//       if (!user) {
//         return res
//           .status(404)
//           .json({ success: false, message: "User not found" });
//       }

//       const { password, ...rest } = user._doc;
//       res.status(200).json({
//         success: true,
//         message: "Profile info is getting",
//         data: { ...rest },
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: "Something went wrong, cannot get",
//       });
//     }
//   };
