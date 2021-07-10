const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {

    res.render("form");
});


app.post('/result', (req, res) => {

    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "";
    }
    res.redirect(303, `/output?name=${name}&age=${age}`);
    //res.render("output", {name: name, age: age});
});

app.get('/output', (req, res) => {

    res.render("output", {name: req.query.name, age: req.query.age});
});

app.listen(3000);