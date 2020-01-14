var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ServerPort = 1337 || process.env.PORT;
var urlendcoderParser = bodyParser.urlencoded();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('Sidor'))
app.use(express.static('Sidor/html'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/Sidor/html/index.html');
})


var server = app.listen(ServerPort, function(){
    console.log('Server is online on port ' + server.address().port);
})