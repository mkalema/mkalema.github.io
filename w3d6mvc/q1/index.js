const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    let styleFile = "day.css";

    if(date.getHours() >= 6 && date.getHours() <= 18){
        styleFile = "day.css"
    }else {
        styleFile = "night.css"
    }
    res.render("index", {
        time: date.toTimeString(), style: styleFile
    })
});

app.listen(3000);