import Brand from "../models/BrandSchema.js";
export const createBrand = async (req, res) => {
  const { title } = req.body;
  try {
    const brand = new Brand({
      title,
    });
    await Brand.create(brand);
    res.status(200).json({
      success: true,
      message: "user successfull created",
      data: brand,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error" + error });
  }
};
