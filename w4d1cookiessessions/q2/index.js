const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.set('port', process.env.PORT || 3000);
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'salt for cookie signing',
}));

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

    const name = req.body.name ? req.body.name : 'person';
    const age = req.body.age ? req.body.age : 'unknown';

    req.session.person = {
        name: name,
        age: age
    }

    res.redirect(303, `/output`);
});
app.get('/output', (req, res) => {

    const person = req.session.person;
    res.send(`Welcome ${person.name}. You are ${person.age} years old`);

});
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});