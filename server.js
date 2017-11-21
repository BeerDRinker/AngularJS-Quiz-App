const express = require('express');
const bodyParser = require('body-parser');
const loging = require('morgan');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(loging('dev'));

app.use(express.static(__dirname + '/app'));

const turtles = fs.readFileSync(__dirname + '/server/turtles.json');


app.get('/ninjasJSON', (req, res) => {
    res.send(turtles).status(200);
});

app.listen(port, () => {
    console.log(`server is up on port: ${port}`);
});