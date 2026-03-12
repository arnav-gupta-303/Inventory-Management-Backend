const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProductByName,
  filterByCategory
} = require('../controllers/productController');

router.get('/search', searchProductByName);
router.get('/category', filterByCategory);

router.route('/')
  .post(createProduct)
  .get(getProducts);

router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
