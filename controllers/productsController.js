const Product = require('../models/products');

const getAllProducts = async (req, res) => {
  const productData = await Product.findAll();

  if (productData.length < 1) {
    return res.status(500).send({ error: 'Empty database table' });
  }

  res.send(productData);
};

const getProduct = async (req, res) => {
  const id = req.params.id;

  const productData = await Product.findAll({ where: { id: id } });

  if (productData.length < 1) {
    return res.status(500).send({ error: 'Data not found' });
  }

  res.send(productData);
};

const addProduct = async (req, res) => {
  const { id, name, price, stock, status, image_url } = req.body;

  try {
    const result = await Product.create({
      id,
      name,
      price,
      stock,
      status,
      image_url,
    });
    res.send(result);
  } catch (error) {
    res.send({ msg: error });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, stock, status, image_url } = req.body;
  const id = req.params.id;

  const product = await Product.findOne({ where: { id: id } });

  product.name = name;
  product.price = price;
  product.stock = stock;
  product.status = status;
  product.image_url = image_url;

  await product.save();

  res.send({ msg: 'product updated' });
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  await Product.destroy({ where: { id: productId } });

  res.send({ msg: 'product deleted' });
};

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
