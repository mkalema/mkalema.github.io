const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res) => {

    //const product =
    (new Product(1, "France", 200, "The best")).save();
    (new Product(2, "Italy", 140, "The mafias")).save();
    (new Product(3, "Germany", 120, "Football made in Germany")).save();
    (new Product(4, "Spain", 50, "Tik Taka")).save();
    (new Product(5, "Portugal", 30, "Finesse")).save();

    const products = Product.getAll();

    res.render('product', {products: products, pageTitle: "Products Page"});
});

module.exports = router;