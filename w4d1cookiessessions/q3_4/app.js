const express = require('express');
const path = require('path');
const session = require('express-session');

const router = require("./routers/router");

const app = express();
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'salt for cookie signing',
}));

app.use("/", router);

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
