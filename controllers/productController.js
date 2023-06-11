const Product = require("../models/product");

//POST Product Create
module.exports.createProduct = async function (req, res) {
  try {
    const { name, quantity } = req.body;
    const product = await Product.create({ name, quantity });
    res.json({ data: { product } });
    console.log("product Created Sucssess full!");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// List all products
module.exports.listProducts = async function (req, res) {
  try {
    const products = await Product.find();
    res.json({ data: { products } });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Delete a product
module.exports.delete = async function (req, res) {
  try {
    console.log(req.params.id);
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete products" });
  }
};

// Update quantity of a product
module.exports.updateProductQuatity = async function (req, res) {
  try {
    const { id } = req.params;
    const { number } = req.query;

    const product = await Product.findByIdAndUpdate(
      id,
      // $inc operator is used for incrementing numeric fields.
      { $inc: { quantity: parseInt(number, 10) } },
      { new: true }
    );
    res.json({ product, message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to Update products" });
  }
};
