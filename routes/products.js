const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productsController');

router.get('/api/products', getAllProducts);

router.get('/api/products/:id', getProduct);

router.post('/api/products', upload.none(), addProduct);

router.put('/api/products/:id', updateProduct);

router.delete('/api/products/:id', deleteProduct);

module.exports = router;
