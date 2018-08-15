var express = require('express');
var Request = require('request');
var app = express();

app.get('/',function(req, res){
    res.send('Hello World!!!! ');
});

app.get('/getImage', function(req, res){
    Request.get({
        "headers": { "Authorization": "Client-ID 00b377fced4d34551f562471919cc635ca34c0a0713fb835bf651bedfc3acb06" },
        "url": "https://api.unsplash.com/photos/random"
    },(error, response, body)=> {
        //console.log(JSON.parse(body));
        res.send(JSON.parse(body));
    })
});

app.get('/now',function(req, res){
    
    res.format({
        'text/plain': function(){
            res.send('Hello World Now!!!! '+req.hostname);
        },
        'text/html': function(){
            res.send('Hello World Now!!!! '+req.hostname);
        },
        'application/json': function(){
            res.send({message:'Hello World Now!!!! '+req.hostname});
        },
        'default': function(){
            res.status(406).send('Not Acceptable');
        }
    });
    
});



var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s',host,port);
})