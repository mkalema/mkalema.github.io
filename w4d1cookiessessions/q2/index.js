const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
const path = require('path');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {

    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${cssFile}">
        </head>
        <body>
            <form action="/result" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="age">Age</label>
                <input type="text" name="age" id="age">
                <input type="submit" value="Submit">
            </form>
        </body>
        </html>`
    );

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
    res.redirect(303,`/output?name=${name}&age=${age}`)
});
app.get('/output', (req, res) => {

    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "";
    }
    res.send(`Welcome ${name}. You are ${age} years old`);

});
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});