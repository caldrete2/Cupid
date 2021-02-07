const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'));
app.set('port', PORT);

app.get('/', function(req, res) {
	res.render('views/home');
});

app.listen(PORT);
