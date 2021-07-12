const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    Product.removeAll();
    (new Product(1, "France", 200, "The best")).save();
    (new Product(2, "Italy", 140, "The mafias")).save();
    (new Product(3, "Germany", 120, "Football made in Germany")).save();
    (new Product(4, "Spain", 50, "Tik Taka")).save();
    (new Product(5, "Portugal", 30, "Finesse")).save();

    const products = Product.getAll();

    res.render('product', {products: products, pageTitle: "Products Page"});
};

exports.getShoppingCart = (req, res, next) => {

    const list = buildShoppingCart();

    let total = 0;
    list.forEach(value => {
        total += (value.quantity * value.product.price);
    });

    res.render("shoppingcart", {
        shoppinglist: list,
        total: total,
        pageTitle: 'Shopping Cart'
    });
}

exports.addToCart = (req, res, next) => {
    const body = req.body;
    // for now redirect to shopping cart
    res.redirect(303, "/shoppingcart");

};

function buildShoppingCart() {
    return [{
        quantity: 1,
        product: new Product(2, "Italy", 140, "The mafias")
    }, {
        quantity: 2,
        product: new Product(4, "Spain", 50, "Tik Taka")
    }, {
        quantity: 1,
        product: new Product(5, "Portugal", 30, "Finesse")
    }
    ];
}
