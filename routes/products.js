const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const {
  addProduct,
  getAllProducts,
  getProduct,
} = require('../controllers/productsController');

router.get('/api/products', getAllProducts);

router.get('/api/products/:id', getProduct);

router.post('/api/products', upload.none(), addProduct);

module.exports = router;
