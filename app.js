'use strict'

const express = require('express');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//app.get('/', (req, res) => res.redirect('index.html'));


app.get('/', function (req, res) {
	res.render('index.html');
});

app.get('/sobre', function(req, res){
		res.render('sobre.html')
});

app.get('/contato', function(req, res){
	res.render('contato.html')
})

	
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function () {
	console.log("server starting on " + appEnv.url);
});
