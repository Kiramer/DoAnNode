import ProCategory from "../models/ProCategorySchema.js";
export const createProCategory = async (req, res) => {
  const { title } = req.body;
  try {
    const proCategory = new ProCategory({
      title,
    });
    await ProCategory.create(proCategory);
    res.status(200).json({
      success: true,
      message: "user successfull created",
      data: proCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error" + error });
  }
};
