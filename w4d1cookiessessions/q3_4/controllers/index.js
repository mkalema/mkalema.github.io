const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    Product.removeAll();
    (new Product(1, "France", 200, "The best")).save();
    (new Product(2, "Italy", 140, "The mafias")).save();
    (new Product(3, "Germany", 120, "Football made in Germany")).save();
    (new Product(4, "Spain", 50, "Tik Taka")).save();
    (new Product(5, "Portugal", 30, "Finesse")).save();

    const products = Product.getAll();

    res.render('product', {products: products, pageTitle: "All Products"});
};

exports.getShoppingCart = (req, res, next) => {
    const products = req.session.cart ? req.session.cart : [];

    let total = 0;

    for (const value of products){
        console.log("Value: " );
        console.log( value);
        total += (value.quantity * value.product.price);
    }

    res.render("shoppingcart", {
        shoppinglist: products,
        total: total,
        pageTitle: 'Shopping Cart'
    });
}

exports.addToCart = (req, res, next) => {

    const cart = req.session.cart ? req.session.cart : [];

    let pid = parseInt(req.body.id);
    let name = req.body.name;
    let price = parseInt(req.body.price);

    let exists = false;
    let counter = 0;
    for(const p of cart){
        if(pid === p.product.id){
            cart[counter].quantity = cart[counter].quantity + 1;
            exists = true;
        }
        counter++;
    }

    if(!exists){
        let n = {
            quantity: 1,
            product: new Product(pid, name, price, "The mafias")
        }
        cart.push(n);
    }

    req.session.cart = cart;
    // for now redirect to shopping cart
    res.redirect(303, "/shoppingcart");

};


