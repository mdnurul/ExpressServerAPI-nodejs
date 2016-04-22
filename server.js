/**
 * Created by bitcanny on 4/4/16.
 */

/*
http://localhost:3000/

 */

var express = require('express');
var bodyParser = require("body-parser");

var fs = require("fs");

var app = express();

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var PORT = 5000;
var HOST = 'localhost';

app.get('/', function (req, res) {

    //console.log("IP:","Port:")
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        //console.log( data );
        res.end( data );
        console.log( "Resquest hit get root /...");
    });

    //res.send('Hello World!');
});

app.get('/user', function (req, res) {

    //console.log("IP:","Port:")
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        //console.log( data );
        res.end(data);
        console.log( "Resquest hit get user...");
    });

    //res.send('Hello World!');
});

app.post('/adduser',function(req, res){

    /**
    if(!req.body.hasOwnProperty('user4') ||
    !req.body.hasOwnProperty('password')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
    }

    var newQuote = {
    author : req.body.user4
    };


      */

    var userObj = req.body;
       // name = userObj.name;

    console.log( "Post Resquest hit add user...");
    console.log( "Request:",userObj);
    console.log( "Response:",req);
    res.end({User: 'Added'}.toString());
});


var server = app.listen(PORT,HOST, function () {



    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});


