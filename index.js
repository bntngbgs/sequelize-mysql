const express = require('express');
const app = express();
const productRouter = require('./routes/products');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(productRouter);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server running on port: ${process.env.EXPRESS_PORT}`);
});
