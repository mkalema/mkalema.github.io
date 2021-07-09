const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {

    res.send('<form action="/result" method="post">' +
        '<label>Name </label><input name="name"> ' +
        '<label>Age </label><input name="age"> ' +
        '<button type="submit">Submit</button></form>');
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
    res.send(`Welcome ${name}. You are ${age} years old`);
});

app.listen(3000);