const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended:false}));
// views setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

let cookies = [];

app.get("/", (req, res) => {
    cookies = getcookie(req);

    res.render('index', {cookies: cookies, pageTitle: "Add Cookie"});
});

app.post("/result", (req, res) => {

    let cookieKey = req.body.cookieKey;
    let cookieValue = req.body.cookieValue;

    if(cookieKey){
        //cookies.push({key : cookieKey, value: cookieValue});
        res.cookie(cookieKey, cookieValue, {maxAge: 1000 * 60 * 60 * 24 * 7});//res.cookie('name', 'GeeksForGeeks').send()
    }
    console.log(req.cookies);

    res.redirect('back');
});

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});

function getcookie(req) {
    let cookie = req.headers.cookie;
    let emptyOutput = [];
    if (cookie) {
        let keyValuePairs = cookie.split('; ');
        for (let i = 0; i < keyValuePairs.length; i++) {
            let name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
            let value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=') + 1);
            emptyOutput.push({name, value});
        }
    }
    return emptyOutput;
}

