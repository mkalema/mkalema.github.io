const express = require("express");
const productController = require("../controllers");

const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);

router.get('/shoppingcart', productController.getShoppingCart);
router.post('/addToCart', productController.addToCart);
router.get('/', productController.getAllProducts);
router.get('/product', productController.setProduct);

module.exports = router;
