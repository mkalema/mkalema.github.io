const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    Product.removeAll();
    (new Product(1, "France", 200, "The best")).save();
    (new Product(2, "Italy", 140, "The mafias")).save();
    (new Product(3, "Germany", 120, "Football made in Germany")).save();
    (new Product(4, "Spain", 50, "Tik Taka")).save();
    (new Product(5, "Portugal", 30, "Finesse")).save();
    const products = Product.getAll();

    res.render('product', {products: products, pageTitle: "All Products", count: 0});
};

exports.getShoppingCart = (req, res, next) => {
    const products = req.session.cart ? req.session.cart : [];

    let total = 0;

    for (const value of products){
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
    let quantity = parseInt(req.body.quantity);
    console.log(req.body);

    let exists = false;
    let counter = 0;
    for(const p of cart){
        if(pid === p.product.id){
            if(!quantity){
                quantity = 1;
            }
            cart[counter].quantity = cart[counter].quantity + quantity;
            exists = true;
        }
        counter++;
    }

    if(!exists){
        if(!quantity){
            quantity = 1;
        }
        let n = {
            quantity: quantity,
            product: new Product(pid, name, price, "The mafias")
        }
        cart.push(n);
    }

    req.session.cart = cart;

    res.status(200).json({
        'count': cart.length,
    });

};

exports.setProduct = (req, res) => {

    let id = req.query.id;
    let name = req.query.name;
    let price = req.query.price;

    const cart = req.session.cart ? req.session.cart : [];

    res.render("setproduct", {
        id: id,
        name: name,
        price: price,
        pageTitle: 'Set Product',
        count: cart.length
    });

}


